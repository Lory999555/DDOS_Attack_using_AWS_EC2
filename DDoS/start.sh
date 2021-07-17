#!/bin/bash

if [ $# -eq 3 ]; then
	ssh -i "keypair.pem" ubuntu@ip "project/inundator -n $1 -c $2 -H 'Connection: keep-alive' $3" &
	ssh -i "keypair.pem" ubuntu@ip  "project/inundator -n $1 -c $2 -H 'Connection: keep-alive' $3" &
	ssh -i "keypair.pem" ubuntu@ip "project/inundator -n $1 -c $2 -H 'Connection: keep-alive' $3" &
else
	echo "attack.sh #packets #thread #ip"
fi
