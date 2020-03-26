package main

import (
	"context"
	"fmt"
	"net/http"
	"os"

	"os/signal"
	"syscall"

	"github.com/pkg/errors"
	"github.com/tarent/loginsrv/logging"
	"github.com/tarent/loginsrv/login"
	_ "github.com/tarent/loginsrv/oauth2"
)

const applicationName = "brauth"

func main() {
	config := login.DefaultConfig()
	if err := logging.Set(config.LogLevel, config.TextLogging); err != nil {
		exit(nil, err)
	}
	logging.AccessLogCookiesBlacklist = append(logging.AccessLogCookiesBlacklist, config.CookieName)

	vaultConfig, err := LoadFromVault()
	if err != nil {
		panic(errors.Cause(err))
	}

	config.JwtSecret = vaultConfig.Brauth.JWTSecret

	if os.Getenv("PRODUCTION") != "" { // In production mode
		config.UserFile = vaultConfig.Brauth.UserFilepath
	} else {
		config.UserFile = "./users.yaml"
		config.CookieSecure = false
	}

	config.SuccessURL = "https://brein.minsky.cc/login"
	config.TextLogging = true
	
	config.Oauth = map[string]map[string]string{
		"github": {
			"client_id": vaultConfig.Github.ClientID,
			"client_secret": vaultConfig.Github.ClientSecret,
		},
	}
	config.Backends = login.Options{
		"simple": map[string]string{
			vaultConfig.Brauth.RootUsername: vaultConfig.Brauth.RootPassword,
		},
	}

	configToLog := *config
	configToLog.JwtSecret = "..."
	configToLog.Backends = login.Options{}
	logging.LifecycleStart(applicationName, configToLog)

	h, err := login.NewHandler(config)
	if err != nil {
		exit(nil, err)
	}
	handlerChain := logging.NewLogMiddleware(h)

	stop := make(chan os.Signal)
	signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM)

	port := config.Port
	if port != "" {
		port = fmt.Sprintf(":%s", port)
	}

	httpSrv := &http.Server{Addr: port, Handler: handlerChain}

	go func() {
		if err := httpSrv.ListenAndServe(); err != nil {
			if err == http.ErrServerClosed {
				logging.ServerClosed(applicationName)
			} else {
				exit(nil, err)
			}
		}
	}()
	logging.LifecycleStop(applicationName, <-stop, nil)

	ctx, ctxCancel := context.WithTimeout(context.Background(), config.GracePeriod)

	httpSrv.Shutdown(ctx)
	ctxCancel()
}

var exit = func(signal os.Signal, err error) {
	logging.LifecycleStop(applicationName, signal, err)
	if err == nil {
		os.Exit(0)
	} else {
		os.Exit(1)
	}
}
