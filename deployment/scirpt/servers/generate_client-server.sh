#!/bin/bash

openssl genrsa -out client-server.key 4096
openssl req -new -key client-server.key -out client-server.csr -config config/servers/openssl_client-server.conf
openssl x509 -req -days 9999 -in client-server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client-server.crt -passin pass:$1
openssl verify -CAfile ca.crt client-server.crt