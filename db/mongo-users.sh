#!/bin/bash

echo "Creating Mongo database..."


function check() {
    mongo --host trnout-db -u $MONGO_USER -p $MONGO_PASS --quiet --eval "
        db = db.getSiblingDB('trnout');
        db.createUser({ \
            user: 'root', \
            pwd: 'password', \
            roles: [{ role: 'readWrite', db: 'trnout' }] \
        });
    "

    STATUS=$?

    echo "STATUS: $STATUS"

    if [ "$STATUS" = "1" ]; then
        return 1
    fi

    return 0
}


until check; do
  echo "Waiting for mongo to be ready"
  sleep 5
done


echo "Finished creating Mongo databases! "

