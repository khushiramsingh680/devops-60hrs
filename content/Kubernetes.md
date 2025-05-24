+++
title = "Day 07"
duration = "2h"
weight = 6
+++
---

## Topics to cover 
#### 01 [Curl](#curl-most-used-command)
#### 02 [Openssl](#openssl-commands)
## Curl most used command
- 1️⃣ **Basic GET request**: Send a GET request to a URL
```bash
curl https://example.com
```

- 2️⃣ **GET request with headers**: Send a GET request with custom headers
```bash
curl -H "Accept: application/json" https://example.com/api/data
```

- 3️⃣ **GET request with multiple headers**: Send a GET request with multiple custom headers
```bash
curl -H "Accept: application/json" -H "Authorization: Bearer <token>" https://example.com/api/data
```

- 4️⃣ **GET request and save output to a file**: Download content and save it to a file
```bash
curl -o output.html https://example.com
```

- 5️⃣ **Silent GET request**: Send a GET request without progress or error messages
```bash
curl -s https://example.com
```

- 6️⃣ **Verbose output**: Show detailed information about the request
```bash
curl -v https://example.com
```

- 7️⃣ **Follow redirects**: Automatically follow HTTP redirects
```bash
curl -L https://example.com
```

- 8️⃣ **POST request with form data**: Send form data in a POST request
```bash
curl -X POST -d "username=user&password=pass" https://example.com/login
```

- 9️⃣ **POST JSON data**: Send JSON data in a POST request
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"John","age":30}' https://example.com/api/users
```

- 🔟 **PUT request with JSON**: Send JSON data in a PUT request
```bash
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated"}' https://example.com/api/users/1
```

- 1️⃣1️⃣ **DELETE request**: Send a DELETE request
```bash
curl -X DELETE https://example.com/api/users/1
```

- 1️⃣2️⃣ **Upload file with POST**: Upload a file in a POST request
```bash
curl -X POST -F "file=@/path/to/file.txt" https://example.com/upload
```

- 1️⃣3️⃣ **Download file with progress bar**: Download a file with a progress indicator
```bash
curl -O https://example.com/file.zip
```

- 1️⃣4️⃣ **Download file to a custom name**: Save the downloaded file with a custom name
```bash
curl -o newname.zip https://example.com/file.zip
```

- 1️⃣5️⃣ **Resume a partially downloaded file**: Resume downloading a file from where it left off
```bash
curl -C - -O https://example.com/file.zip
```

- 1️⃣6️⃣ **FTP upload**: Upload a file to an FTP server
```bash
curl -T file.txt ftp://ftp.example.com/ --user username:password
```

- 1️⃣7️⃣ **Send cookies**: Send cookies with the request
```bash
curl -b "name=value" https://example.com
```

- 1️⃣8️⃣ **Save cookies to a file**: Save cookies from the request to a file
```bash
curl -c cookies.txt https://example.com
```

- 1️⃣9️⃣ **Use cookies from a file**: Send cookies from a file with the request
```bash
curl -b cookies.txt https://example.com
```

- 2️⃣0️⃣ **HTTP authentication (Basic Auth)**: Send HTTP Basic Authentication
```bash
curl -u username:password https://example.com
```

- 2️⃣1️⃣ **Use a proxy**: Send a request through a proxy server
```bash
curl -x http://proxy.example.com:8080 https://example.com
```

- 2️⃣2️⃣ **Limit download speed**: Limit the download speed to a specific rate
```bash
curl --limit-rate 100k https://example.com
```

- 2️⃣3️⃣ **Use a specific request method (e.g., PATCH)**: Send a PATCH request
```bash
curl -X PATCH -d '{"status":"active"}' -H "Content-Type: application/json" https://example.com/api/resource
```

- 2️⃣4️⃣ **Upload multiple files with form**: Upload multiple files using form data
```bash
curl -F "file1=@file1.txt" -F "file2=@file2.txt" https://example.com/upload
```

- 2️⃣5️⃣ **Upload file with a specific content type**: Upload a file with a specified content type
```bash
curl -F "file=@file.json;type=application/json" https://example.com/upload
```

## Openssl Commands

- 1️⃣ **Generate a Self-Signed Certificate**: Create a self-signed SSL certificate with a private key
```bash
openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout server.key -out server.crt
```

- 2️⃣ **Generate a Private Key**: Generate a private RSA key
```bash
openssl genpkey -algorithm RSA -out private.key
```

- 3️⃣ **Generate a Public Key**: Generate a public key from a private key
```bash
openssl rsa -in private.key -pubout -out public.key
```

- 4️⃣ **Convert PEM to DER**: Convert a PEM-encoded certificate to DER format
```bash
openssl x509 -in certificate.pem -outform DER -out certificate.der
```

- 5️⃣ **Convert DER to PEM**: Convert a DER-encoded certificate to PEM format
```bash
openssl x509 -in certificate.der -inform DER -out certificate.pem -outform PEM
```

- 6️⃣ **View Certificate Information**: View details about an SSL certificate
```bash
openssl x509 -in certificate.crt -text -noout
```

- 7️⃣ **Verify Certificate**: Verify if a certificate is valid for a specific domain
```bash
openssl s_client -connect example.com:443 -showcerts
```

- 8️⃣ **Create a CSR (Certificate Signing Request)**: Generate a CSR using a private key
```bash
openssl req -new -key private.key -out request.csr
```

- 9️⃣ **Sign a CSR with a CA (Certificate Authority)**: Sign a CSR with a CA certificate
```bash
openssl x509 -req -in request.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out signed.crt -days 365
```

- 🔟 **Check SSL Certificate Expiry**: Check the expiration date of an SSL certificate
```bash
openssl x509 -in certificate.crt -noout -enddate
```

- 1️⃣1️⃣ **Create a PKCS12 File**: Convert a private key and certificate to a PKCS12 file
```bash
openssl pkcs12 -export -in certificate.crt -inkey private.key -out certificate.p12
```

- 1️⃣2️⃣ **Extract Certificate from PKCS12 File**: Extract a certificate from a PKCS12 file
```bash
openssl pkcs12 -in certificate.p12 -clcerts -nokeys -out certificate.crt
```

- 1️⃣3️⃣ **Extract Private Key from PKCS12 File**: Extract the private key from a PKCS12 file
```bash
openssl pkcs12 -in certificate.p12 -nocerts -out private.key
```

- 1️⃣4️⃣ **Encrypt a File with AES**: Encrypt a file using AES encryption
```bash
openssl enc -aes-256-cbc -salt -in plaintext.txt -out encrypted.txt
```

- 1️⃣5️⃣ **Decrypt a File with AES**: Decrypt a file that was encrypted with AES
```bash
openssl enc -d -aes-256-cbc -in encrypted.txt -out decrypted.txt
```

- 1️⃣6️⃣ **Generate a Diffie-Hellman Parameters File**: Generate a DH parameters file
```bash
openssl dhparam -out dhparams.pem 2048
```

- 1️⃣7️⃣ **Create an SSL/TLS Server Certificate**: Generate a server certificate from a CSR
```bash
openssl req -new -newkey rsa:2048 -nodes -keyout server.key -out server.csr
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365
```

- 1️⃣8️⃣ **Test SSL Connection**: Test an SSL connection to a server
```bash
openssl s_client -connect example.com:443
```

- 1️⃣9️⃣ **Generate an MD5 Hash of a File**: Generate an MD5 hash of a file
```bash
openssl dgst -md5 file.txt
```

- 2️⃣0️⃣ **Generate a SHA256 Hash of a File**: Generate a SHA256 hash of a file
```bash
openssl dgst -sha256 file.txt
```


- 1️⃣ **Generate a Self-Signed Certificate**: Create a self-signed SSL certificate with a private key
```bash
openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout server.key -out server.crt
```

- 2️⃣ **Generate a Private Key**: Generate a private RSA key
```bash
openssl genpkey -algorithm RSA -out private.key
```

- 3️⃣ **Generate a Public Key**: Generate a public key from a private key
```bash
openssl rsa -in private.key -pubout -out public.key
```

- 4️⃣ **Convert PEM to DER**: Convert a PEM-encoded certificate to DER format
```bash
openssl x509 -in certificate.pem -outform DER -out certificate.der
```

- 5️⃣ **Convert DER to PEM**: Convert a DER-encoded certificate to PEM format
```bash
openssl x509 -in certificate.der -inform DER -out certificate.pem -outform PEM
```

- 6️⃣ **View Certificate Information**: View details about an SSL certificate
```bash
openssl x509 -in certificate.crt -text -noout
```

- 7️⃣ **Verify Certificate**: Verify if a certificate is valid for a specific domain
```bash
openssl s_client -connect example.com:443 -showcerts
```

- 8️⃣ **Create a CSR (Certificate Signing Request)**: Generate a CSR using a private key
```bash
openssl req -new -key private.key -out request.csr
```

- 9️⃣ **Sign a CSR with a CA (Certificate Authority)**: Sign a CSR with a CA certificate
```bash
openssl x509 -req -in request.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out signed.crt -days 365
```

- 🔟 **Check SSL Certificate Expiry**: Check the expiration date of an SSL certificate
```bash
openssl x509 -in certificate.crt -noout -enddate
```

- 1️⃣1️⃣ **Create a PKCS12 File**: Convert a private key and certificate to a PKCS12 file
```bash
openssl pkcs12 -export -in certificate.crt -inkey private.key -out certificate.p12
```

- 1️⃣2️⃣ **Extract Certificate from PKCS12 File**: Extract a certificate from a PKCS12 file
```bash
openssl pkcs12 -in certificate.p12 -clcerts -nokeys -out certificate.crt
```

- 1️⃣3️⃣ **Extract Private Key from PKCS12 File**: Extract the private key from a PKCS12 file
```bash
openssl pkcs12 -in certificate.p12 -nocerts -out private.key
```

- 1️⃣4️⃣ **Encrypt a File with AES**: Encrypt a file using AES encryption
```bash
openssl enc -aes-256-cbc -salt -in plaintext.txt -out encrypted.txt
```

- 1️⃣5️⃣ **Decrypt a File with AES**: Decrypt a file that was encrypted with AES
```bash
openssl enc -d -aes-256-cbc -in encrypted.txt -out decrypted.txt
```

- 1️⃣6️⃣ **Generate a Diffie-Hellman Parameters File**: Generate a DH parameters file
```bash
openssl dhparam -out dhparams.pem 2048
```

- 1️⃣7️⃣ **Create an SSL/TLS Server Certificate**: Generate a server certificate from a CSR
```bash
openssl req -new -newkey rsa:2048 -nodes -keyout server.key -out server.csr
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365
```

- 1️⃣8️⃣ **Test SSL Connection**: Test an SSL connection to a server
```bash
openssl s_client -connect example.com:443
```

- 1️⃣9️⃣ **Generate an MD5 Hash of a File**: Generate an MD5 hash of a file
```bash
openssl dgst -md5 file.txt
```

- 2️⃣0️⃣ **Generate a SHA256 Hash of a File**: Generate a SHA256 hash of a file
```bash
openssl dgst -sha256 file.txt
```
