#!/bin/bash

openssl genrsa -out server-client.key 4096
openssl req -new -key server-client.key -out server-client.csr -config config/clients/openssl_server-client.conf
openssl x509 -req -days 9999 -in server-client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server-client.crt -passin pass:$1
openssl verify -CAfile ca.crt server-client.crt
