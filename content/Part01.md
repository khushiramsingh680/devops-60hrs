+++
title = "Vagrant: Day 01"
weight = 1
duration = "1.5h"
+++

## 📦 Vagrant - Day 01

## 1. Introduction to Vagrant
- **What is Vagrant?**
  Vagrant is an open-source tool that allows you to build and manage virtualized development environments.

- **Benefits of Using Vagrant**
  - Reproducibility
  - Isolation
  - Simplified provisioning

- **Use Cases**
  - DevOps automation
  - Testing infrastructure
  - Multi-VM environments

---

## 2. Installation

### Linux/Mac/Windows

- **Step 1**: Install VirtualBox  
  https://www.virtualbox.org/wiki/Downloads

- **Step 2**: Install Vagrant  
  https://www.vagrantup.com/downloads

- **Verify Installation**:
  ```bash
  vagrant --version
  ```

---

## 3. Vagrantfile Basics

```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/bionic64"
  config.vm.network "private_network", type: "dhcp"
  config.vm.synced_folder "./data", "/vagrant_data"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
    vb.cpus = 2
  end
end
```

- **Key Options**:
  - `config.vm.box`: Defines the base box
  - Networking: private, public, and port forwarding
  - Synced folders: sharing between host and guest

---

## 4. Provisioning

- **Methods**:
  - Shell Scripts
  - Ansible
  - Puppet
  - Chef

- **Inline vs External**:
  - Inline: Defined inside the `Vagrantfile`
  - External: Separate script or playbook

Example (inline shell provision):
```ruby
config.vm.provision "shell", inline: <<-SHELL
  apt-get update
  apt-get install -y nginx
SHELL
```

---

## 5. Basic Commands

| Command                | Description                             |
|------------------------|-----------------------------------------|
| `vagrant init`         | Create a new Vagrantfile                |
| `vagrant up`           | Start the VM                            |
| `vagrant ssh`          | SSH into the VM                         |
| `vagrant halt`         | Stop the VM                             |
| `vagrant destroy`      | Delete the VM                           |
| `vagrant status`       | Check VM status                         |
| `vagrant box list`     | List installed boxes                    |
| `vagrant box add`      | Add a new box                           |
| `vagrant box remove`   | Remove a box                            |

---

## 6. Synced Folders

- **Default**: `/vagrant` directory synced
- **Custom Example**:
  ```ruby
  config.vm.synced_folder "./local", "/vm_data"
  ```

- **Types**: default, rsync, NFS

---

## 7. Networking

- **Port Forwarding**
  ```ruby
  config.vm.network "forwarded_port", guest: 80, host: 8080
  ```

- **Private Network**
  ```ruby
  config.vm.network "private_network", ip: "192.168.33.10"
  ```

- **Public Network**
  ```ruby
  config.vm.network "public_network"
  ```

---

## 8. Multi-Machine Environments

Example:
```ruby
Vagrant.configure("2") do |config|
  config.vm.define "web" do |web|
    web.vm.box = "ubuntu/bionic64"
  end

  config.vm.define "db" do |db|
    db.vm.box = "ubuntu/bionic64"
  end
end
```

Use cases:
- Web + DB setup
- HA/clustered configurations

---

## 9. Troubleshooting

- **Networking Issues**:
  - Check IP conflicts
  - Restart networking service inside VM

- **Provisioning Errors**:
  - Verify scripts and paths
  - Use external shell script for debugging

- **Debug Mode**:
  ```bash
  vagrant up --debug
  ```

---

## 10. Best Practices

- Track `Vagrantfile` in version control
- Use `.gitignore` to exclude `.vagrant/`
- Use small, optimized base boxes
- Clean up unused boxes:  
  ```bash
  vagrant box prune
  ```

---

## Getting Started Quick Steps

```bash
# Step 1: Initialize
vagrant init bento/ubuntu-24.04 --box-version 202407.23.0

# Step 2: Start
vagrant up

# Step 3: SSH
vagrant ssh

# Step 4: Halt
vagrant halt
```
### **--reprovision**
- **Usage:** `vagrant up --provision`
- **Explanation:** The `--reprovision` option is used with the `vagrant up` command to force the provisioning of the virtual machine, even if it has already been provisioned previously. This is useful if you want to apply changes to the provisioning scripts (such as updates or new configurations) without destroying and recreating the VM.

---

## Resources

- [Vagrant Documentation](https://www.vagrantup.com/docs)
- [Vagrant Boxes](https://app.vagrantup.com/boxes/search)