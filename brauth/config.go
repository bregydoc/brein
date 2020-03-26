package main

import (
	"os"

	"github.com/hashicorp/vault/api"
	"github.com/pkg/errors"
)

type GithubConfig struct {
	ClientID string
	ClientSecret string
}

type BrauthConfig struct {
	JWTSecret    string
	UserFilepath string
	RootUsername string
	RootPassword string
	SuccessURL string
}

type GlobalConfig struct {
	Github GithubConfig
	Brauth BrauthConfig
}

func getGlobalConfigFromVault() (*GlobalConfig, error) {
	vaultAddress := os.Getenv("VAULT_ADDRESS")
	vaultToken := os.Getenv("VAULT_TOKEN")

	client, err := api.NewClient(&api.Config{Address: vaultAddress})
	if err != nil {
		return nil, errors.Wrap(err, "error at create client for vault api")
	}

	client.SetToken(vaultToken)

	tape := client.Logical()

	brauth := "kv/data/brauth"

	github, err := tape.Read(brauth + "/github")
	if err != nil {
		return nil, errors.Wrap(err, "cannot read kv github oauth credentials")
	}

	brauthConf, err := tape.Read(brauth + "/brauth")
	if err != nil {
		return nil, errors.Wrap(err, "cannot read kv of brauth general config")
	}

	config := new(GlobalConfig)

	if github.Data["data"] != nil {
		data := github.Data["data"].(map[string]interface{})
		config.Github = GithubConfig{
			ClientID:     data["clientID"].(string),
			ClientSecret: data["clientSecret"].(string),
		}
	}

	if brauthConf.Data["data"] != nil {
		data := brauthConf.Data["data"].(map[string]interface{})
		config.Brauth = BrauthConfig{
			UserFilepath: data["usersFilepath"].(string),
			JWTSecret:    data["jwtSecret"].(string),
			RootUsername: data["rootUsername"].(string),
			RootPassword: data["rootPassword"].(string),
			SuccessURL: data["success_url"].(string),
		}
	}

	return config, nil
}

func LoadFromVault() (*GlobalConfig, error) {
	return getGlobalConfigFromVault()
}
