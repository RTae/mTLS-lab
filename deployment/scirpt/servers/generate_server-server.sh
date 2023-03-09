#!/bin/bash

openssl genrsa -out server-server.key 4096
openssl req -new -key server-server.key -out server-server.csr -config config/servers/openssl_server-server.conf
openssl x509 -req -days 9999 -in server-server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server-server.crt -passin pass:$1
openssl verify -CAfile ca.crt server-server.crt