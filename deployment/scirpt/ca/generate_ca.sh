#!/bin/bash
openssl req -new -x509 -days 9999 -keyout ca.key -out ca.crt -config config/ca/openssl_ca.conf -passout pass:$1