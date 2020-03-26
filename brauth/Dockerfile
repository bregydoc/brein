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

EXPOSE 6789

COPY --from=builder /brauth/brauth /

ENTRYPOINT ["/brauth"]
