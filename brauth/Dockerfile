FROM golang:1.14 as builder

WORKDIR /brauth

# Cache dependencies
COPY go.mod go.mod
COPY go.sum go.sum
RUN go mod download

# Copy code
COPY . .

RUN go build -a --ldflags '-linkmode external -extldflags "-static"' .

RUN ls -la
# ----------

FROM alpine:3.11

ENV LOGINSRV_HOST=0.0.0.0
ENV LOGINSRV_PORT=8080

EXPOSE 8080

COPY --from=builder /brauth/brauth /

ENTRYPOINT ["/brauth"]
