+++
title = ""
type = "home"
+++

- **DevOps** bridges the gap between development and operations, fostering a culture of collaboration and continuous improvement.
- With **automation** at its core, DevOps accelerates software delivery while ensuring stability, scalability, and security.
- Adopting **DevOps practices** empowers teams to innovate faster, respond to change efficiently, and deliver greater value to customers.

---

## 📚 Table of Contents

### 🟢 Getting Started
- [VirtualBox, Vagrant, and Basics of Linux](#/topics/part-01/)

---

## 📘 Linux Administration

### 🔹 Introduction to Linux
- History and Evolution  
- Linux Distributions Overview  
- System Architecture Basics  

### 🔹 User and Group Management
- Creating and Managing Users  
- Group Administration  
- Switching Users and `sudo` Access  

### 🔹 File System and Directory Structure
- Linux Directory Hierarchy Explained  
- Mounting and Unmounting File Systems  
- Disk Partitioning and LVM Basics  

### 🔹 File and Directory Permissions
- Understanding `rwx` Permissions  
- `chmod`, `chown`, and `chgrp`  
- Access Control Lists (ACLs)  
- Special Permissions: SUID, SGID, Sticky Bit  

### 🔹 Package Management
- `apt`, `yum`, `dnf`, `zypper`  
- Installing, Updating, and Removing Software  
- Managing Repositories  
- Compiling from Source  

### 🔹 Process and Service Management
- Understanding System Processes  
- Commands: `ps`, `top`, `htop`, `kill`, `nice`  
- Managing Services with `systemctl`  
- Startup and Boot Targets  

### 🔹 Performance Monitoring and Tuning
- CPU, Memory, Disk, Network Monitoring  
- Identifying Bottlenecks  
- Log Analysis and Rotation  

### 🔹 Networking Essentials
- Network Configuration: Static & DHCP  
- Tools: `ip`, `netstat`, `ss`, `ping`, `traceroute`, `nmap`  
- Firewalls: `iptables`, `firewalld`, `ufw`  
- SSH Configuration and Security  

### 🔹 Storage Management
- Mounting Disks and File Systems  
- Logical Volume Management (LVM)  
- Filesystem Types: `ext4`, `xfs`, `btrfs`, etc.  

### 🔹 Backup and Recovery
- Tools: `rsync`, `tar`, `dd`  
- Scheduled Backups using `cron`  
- Snapshot and Restore  
- Disaster Recovery Strategy  

### 🔹 Security and Hardening
- User Privileges and Auditing  
- SSH Key Authentication  
- SELinux/AppArmor Basics  
- Patch Management and Vulnerability Scanning  

### 🔹 Automation and Scripting
- Shell Scripting Basics  
- Scheduling Tasks with `cron`  
- Automation of Admin Tasks  

### 🔹 Logging and Troubleshooting
- Using `journalctl` and log files  
- Boot, Network, and Service Troubleshooting  
- Rescue Mode and Recovery  

### 🔹 Virtualization and Containers
- KVM and VirtualBox Basics  
- Introduction to Docker and Podman  
- Linux Namespaces and Cgroups  

---

## 🔐 SSL/TLS with OpenSSL

### 🔹 SSL/TLS Fundamentals
- What is SSL/TLS  
- Key Concepts: PKI, Certificates, CSRs  
- TLS Handshake Overview  

### 🔹 Certificate Generation
- Creating Private Keys  
- Generating CSRs  
- Adding SANs with `openssl.cnf`  
- Creating Self-Signed Certs  

### 🔹 Key and Cert Management
- Formats: PEM, DER, CRT, CER, KEY  
- Extract Public Keys  
- Convert Between Formats  

### 🔹 Certificate Validation
- Match Cert and Key  
- View Certificate and CSR Details  
- Check Validity Periods  

### 🔹 Advanced CSR Fields
- Using Config Files  
- Key Usage and Extended Usage  
- SAN and Custom Extensions  

### 🔹 Certificate Deployment
- For Nginx, Apache, HAProxy  
- Intermediate Chains  
- Secure File Permissions  

### 🔹 Testing SSL
- `openssl s_client`  
- Cipher Suite Validation  
- SSL Labs Testing  

### 🔹 Renewal and Automation
- Manual vs Automated Renewal  
- `certbot`, `acme.sh` Usage  
- Renewal Hooks  

### 🔹 Troubleshooting and Best Practices
- Common Errors (Mismatches, Expired Certs)  
- Storage Best Practices  
- TLS Hardening  

### 🔹 Local Development
- Using Local CAs  
- Tools: `mkcert`  
- Browser Trust Configurations  

---

## ⚙️ Ansible for RHEL 8/9

### 🔹 Introduction to Ansible
- Overview and Architecture  
- Agentless Automation Benefits  

### 🔹 Setup and Configuration
- Installing via DNF  
- Configuring `ansible.cfg`  
- Setting up Inventory  

### 🔹 Inventory Management
- Static and Dynamic Inventories  
- SSH Key Authentication  
- Grouping Hosts  

### 🔹 Package Management
- Modules: `dnf`, `yum`, `rpm`  
- Enabling EPEL and Custom Repos  
- Managing RPMs  

### 🔹 Service Management
- `service` and `systemd` Modules  
- Enabling/Disabling Services  
- Restarting and Reloading  

### 🔹 User and Group Tasks
- Create/Remove Users  
- Managing SSH Keys  
- ACL and Permissions  


## 🌱 OpenTofu (Terraform Fork)

1. **Intro to OpenTofu**
   - Open-source Terraform alternative
   - Community-driven governance
2. **Why Switch**
   - Licensing, transparency, neutrality
3. **Installation**
   - OpenTofu CLI
   - Migration from Terraform
4. **Code Compatibility**
   - Using existing Terraform HCL
5. **Providers**
   - Open registry support
6. **State Management**
   - Compatible backends
   - State locking and drift detection
7. **Modules**
   - Reusable and shareable configs
8. **CLI Commands**
   - `tofu plan`, `tofu apply`, etc.
9. **CI/CD**
   - Integration in pipelines
   - GitLab, GitHub Actions
10. **Best Practices**
    - Naming, modularity, Git workflows