openssl pkcs12 -export -out certificate.pfx -inkey layer.key -in layer.crt
# brew install openssl curl
/usr/local/Cellar/curl/7.37.0/bin/curl -v -E certificate.pfx:#password01 https://api-beta.layer.com/hello