#!/bin/bash
cd ../Cheekd-Meteor
modulus -p "EEKD-TEST" env set MONGO_URL mongodb://root:#password01@novus.modulusmongo.net:27017/Arov3ori
modulus -p "EEKD-TEST" env set ROOT_URL http://eekdtest-20845.onmodulus.net
modulus -p "EEKD-TEST" env set NODE_ENV test
# export METEOR_SETTINGS=$(cat private/config/test/settings.json)
# export METEOR_SETTINGS=`perl -pe'chomp' private/config/test/settings.json`
# echo $METEOR_SETTINGS
# modulus -p "CHEEKD-TEST" env set METEOR_SETTINGS $METEOR_SETTINGS
MODULUS_TOKEN=b21b84ce-e665-4813-afc3-dbe5c23f139e modulus -p "EEKD-TEST" deploy