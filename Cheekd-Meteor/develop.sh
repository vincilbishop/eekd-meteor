#!/bin/bash
set +v
# sudo node-inspector --web-port=8181 &
# sudo NODE_OPTIONS="--debug=5858" hippometeor ROOT_URL=http://premosystems.pagekite.me SETTINGS=settings_testing.json mrt
# pagekite.py 3000 premosystems.pagekite.me
./jsdoc/document.sh
TZ=UTC NODE_ENV="development" NODE_OPTIONS="--debug=5858" ROOT_URL=https://premosystems.pagekite.me mrt --settings=./private/config/dev/settings.json
