+++
title = "Day 08"
duration = "2h"
weight = 6
+++
---

## Topics to cover 
#### 01 [Gitalab Installation](#-introduction-to-gitlab)
#### 02 [Curl](#curl-most-used-command)
#### 03 [Openssl](#openssl-commands)

## 🚀 **Introduction to GitLab**

GitLab is a **web-based DevOps lifecycle tool** that provides a Git repository manager with built-in features like:

- Issue tracking
- Continuous Integration/Continuous Deployment (CI/CD)
- Code review
- Project management
- Wiki and more

It enables teams to collaborate on code, automate testing, and deploy software efficiently.

---

## 🔧 What Is Git?

Before diving into GitLab, it's important to understand **Git**:

- **Git** is a version control system that lets you track code changes.
- It allows multiple developers to work on the same project simultaneously.

GitLab builds on Git by providing a **collaborative platform** for managing and deploying code.

---

## 🌐 GitLab vs GitHub vs Bitbucket

| Feature        | GitLab          | GitHub         | Bitbucket      |
|----------------|------------------|----------------|----------------|
| CI/CD Built-in | ✅ Yes           | ⚠️ Needs Actions | ✅ Yes         |
| Self-hosted    | ✅ Available     | ✅ Enterprise   | ✅ Available   |
| Open Source    | ✅ Core version  | ❌             | ❌             |

---

## 🔑 Key Features of GitLab

- **Repositories**: Git-based version control for code.
- **CI/CD Pipelines**: Automate building, testing, and deploying your code.
- **Merge Requests**: Review and approve code changes.
- **Issue Tracking**: Built-in project management tools.
- **Security & Compliance**: SAST, DAST, container scanning, etc.
- **Wiki & Docs**: Project documentation support.

---

## 🛠️ GitLab Editions

- **GitLab SaaS**: Hosted on GitLab.com
- **GitLab Self-Managed**: You install and run GitLab on your own server

### Versions:

- **Free** – Core features
- **Premium** – Enhanced CI/CD and support
- **Ultimate** – Security, compliance, and performance features

---

## 📦 Basic GitLab Workflow

1. **Clone the Repository**

   ```bash
   git clone https://gitlab.com/username/project.git
   ```

2. **Create a Branch**

   ```bash
   git checkout -b feature-branch
   ```

3. **Make Changes and Commit**

   ```bash
   git add .
   git commit -m "Added new feature"
   ```

4. **Push to GitLab**

   ```bash
   git push origin feature-branch
   ```

5. **Create a Merge Request (MR)** via the GitLab UI

6. **Code Review** and **Merge** into the main branch

---

## 📈 CI/CD Pipeline Example

`.gitlab-ci.yml` file defines your pipeline:

```yaml
stages:
  - build
  - test
  - deploy

build-job:
  stage: build
  script:
    - echo "Building the app..."

test-job:
  stage: test
  script:
    - echo "Running tests..."

deploy-job:
  stage: deploy
  script:
    - echo "Deploying the app..."
```

---

## ✅ Why Use GitLab?

- All-in-one DevOps platform
- Improves collaboration and code quality
- Automates the software delivery lifecycle
- Scalable for both small teams and large enterprises

---

## 📚 Learn More

- Official site: [https://about.gitlab.com](https://about.gitlab.com)
- Docs: [https://docs.gitlab.com](https://docs.gitlab.com)
- GitLab CI/CD: [https://docs.gitlab.com/ee/ci](https://docs.gitlab.com/ee/ci)

---

*GitLab helps you code, collaborate, and deploy — all in one place.* 💻🚀

## Gitlab Installation
- [ ] Create a Linux vm with 8GB of RAM , 2CPU min and 50GB of Disk space
- [ ] Have one public Domain
- [ ] [Follow the steps given here](https://about.gitlab.com/install/#almalinux)

## 🚀 Most Common `curl` Commands

`curl` is a command-line tool used for transferring data to or from a server using various protocols such as HTTP, HTTPS, FTP, and more.

---

## 🌐 1. Test Connectivity (Like `telnet` for HTTP)

To check if a service is reachable and responding on a specific port:

```bash
curl -v telnet://hostname:port
```

**Example:**

```bash
curl -v telnet://example.com:80
```

> Works similar to `telnet`, but only for protocols `curl` supports.

---

## 📥 2. Download a File (Like `wget`)

```bash
curl -O https://example.com/file.tar.gz
```

- `-O`: Saves the file with its original name.

Download and rename:

```bash
curl -o newname.tar.gz https://example.com/file.tar.gz
```

---

## 📤 3. Upload a File (Using POST)

```bash
curl -F "file=@/path/to/file.txt" https://example.com/upload
```

> Used for uploading files via web forms.

---

## 🔄 4. Make a POST Request

```bash
curl -X POST -d "username=user&password=pass" https://example.com/login
```

Or with JSON:

```bash
curl -X POST -H "Content-Type: application/json" \
-d '{"username":"user", "password":"pass"}' \
https://example.com/api/login
```

---

## 🔍 5. View HTTP Headers Only

```bash
curl -I https://example.com
```

> Shows only the response headers (`HEAD` request).

---

## 🧪 6. Check HTTP Status Code

```bash
curl -o /dev/null -s -w "%{http_code}\n" https://example.com
```

> Only prints the HTTP response code like `200`, `404`, etc.

---

## 🪪 7. Send Custom Headers (e.g. API Tokens)

```bash
curl -H "Authorization: Bearer <token>" https://api.example.com/data
```

---

## 🧰 8. Debug Full Request/Response

```bash
curl -v https://example.com
```

> Use `-v` (verbose) or `--trace` for full request/response logs.

---

## 🔁 9. Follow Redirects

```bash
curl -L https://short.url/link
```

> Follows HTTP 3xx redirects (like a shortened URL).

---

## 📡 10. Download from FTP Server

```bash
curl -u username:password ftp://ftp.example.com/file.zip -O
```

---

## 💡 Tips

- Add `-k` to ignore SSL certificate validation (not recommended for production):
  ```bash
  curl -k https://example.com
  ```
- Add `-s` for silent mode (no progress bar or errors).
- Use `-u user:pass` for basic auth.

---

## 📚 Learn More

- Official Docs: [https://curl.se/docs/](https://curl.se/docs/)
- Protocols Supported: HTTP, HTTPS, FTP, SFTP, SCP, LDAP, and more

---

*`curl` is like a Swiss Army knife for HTTP and beyond — learn it once, use it everywhere.* 🔧🌍

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
