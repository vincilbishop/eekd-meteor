#!/bin/sh

set -e

KEY=layer.key
CRT=layer.crt
CSR=layer.csr

## Prefilled by admin web input
CN="cheekd.com"                  # Common Name (domain name)
O="Cheekd"                  # Organization (name of the company)
OU="chyg6fr0s001kur3amwvvjq7j"          # Organizational Unit (random md5 hash)
L="New York"                      # Locality (city)
ST="NY"                        # State (if in the US)
C="US"                  # Country Code (2-letter ISO country code)
EMAIL_ADDRESS="mark@fueled.com"
AUTH_TOKEN="4ac4056dfebb7490511a7f46dd8b662c"           # Authentication token (expires in one hour?)
API_PREFIX="https://api-beta.layer.com"
requires="openssl curl"

check() {
  command -v $1 >/dev/null 2>&1 || { echo >&2 "Layer SDK backend setup script requires $1 package to run. Please install it."; exit 1; }
}

die() {
  rm $KEY $CRT $CSR;
}

for a in $requires; do
  check $a;
done

echo "**** Layer SDK. 2014 ****"
echo
echo "Generating private key and CSR."
echo 

openssl req -new -newkey rsa:2048 -nodes -out $CSR -keyout $KEY \
  -subj "/C=$C/ST=$ST/L=$L/O=$O/OU=$OU/CN=$CN/emailAddress=$EMAIL_ADDRESS" \
  &> /dev/null || { echo >&2 "Generating ssl certificates failed."; die; exit 1; } 

curl -f -s -k -o $CRT --form "fileupload=@$CSR" https://beta.layer.com/api/backend-api/certificate/$AUTH_TOKEN || \
    { echo >&2 "Failed to upload CSR."; die; exit 1; }


rm $CSR;

echo
echo "Testing..."
echo
echo "WARNING: This cert test won't work with the pre-installed version of curl on OS X Mavericks."
echo

curl -f -s -k --key $KEY --cert $CRT $API_PREFIX/hello || \
    { echo >&2 "Test failed."; exit 1;}

echo
echo "You can now use your $KEY with your $CRT to access the Layer backend API."
echo 
