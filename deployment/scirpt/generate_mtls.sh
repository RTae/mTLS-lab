#!/bin/bash

function create_ca_cert () {
    bash ./ca/generate_ca.sh $1
}

function create_server_cert () {
    bash ./servers/generate_client-server.sh $1
    bash ./servers/generate_server-server.sh $1
}

function create_client_cert {
    bash ./clients/generate_server-client.sh $1
    bash ./clients/generate_client-client.sh $1
}

function main {

    echo Please input CA key password: 
    read password

    # Create CA certificate
    create_ca_cert ${password}
    # Create Server certificate
    create_server_cert ${password}
    # Create Client certificate
    create_client_cert ${password}

}

main
