#!/bin/bash
cd ../Cheekd-Meteor
modulus -p "EEKD-STAGE" env set MONGO_URL mongodb://root:#password01@novus.modulusmongo.net:27017/Azab2eqe
modulus -p "EEKD-STAGE" env set ROOT_URL http://eekdstage-20885.onmodulus.net
modulus -p "EEKD-STAGE" env set NODE_ENV test
# export METEOR_SETTINGS=$(cat private/config/test/settings.json)
# export METEOR_SETTINGS=`perl -pe'chomp' private/config/test/settings.json`
# echo $METEOR_SETTINGS
# modulus -p "CHEEKD-TEST" env set METEOR_SETTINGS $METEOR_SETTINGS
MODULUS_TOKEN=b21b84ce-e665-4813-afc3-dbe5c23f139e modulus -p "EEKD-STAGE" deploy