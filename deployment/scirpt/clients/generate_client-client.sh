#!/bin/bash

openssl genrsa -out client-client.key 4096
openssl req -new -key client-client.key -out client-client.csr -config config/clients/openssl_client-client.conf
openssl x509 -req -days 9999 -in client-client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client-client.crt -passin pass:$1
openssl verify -CAfile ca.crt client-client.crt
