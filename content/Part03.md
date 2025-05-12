+++
title = "User, Group and Permissions: Day 03"
duration = "2h"
weight = 3
+++

## Topics
- **[Links in Linux](#understanding-links-in-linux)**
- **[Variable and Path](#variables-in-linux)**
- **[Echo commands](#echo-command-in-linux)**
- **[User Management](#user-management-in-rocky-linux-9)**
- **[Permission](#linux-permission-management)**
- **[SSH keys](#-ssh-key-authentication-in-rhel-8)**
- **[Network Management](#-rhel-8-networking-overview)**
## Understanding Links in Linux

In Linux, a **link** is a reference to a file or directory. It provides an additional path or name to access the same file or directory without duplicating the data. Links are used to organize files, create backups, and even provide shortcuts to files located elsewhere.

### Types of Links in Linux

1. **Hard Links**
2. **Symbolic (Soft) Links**

---

### 1. Hard Links

A **hard link** creates another directory entry for an existing file. Both the original file and the hard link point to the same inode (a data structure that holds the file's metadata and data block pointers). Hard links cannot be created for directories (except for special directories like `.` and `..`), and they do not work across different file systems.

#### Characteristics of Hard Links:
- Both the original file and the hard link share the same inode and data.
- Deleting the original file doesn't delete the data, as the hard link still points to the same data.
- They cannot span file systems.

#### Example Command to Create a Hard Link:

```bash
ln /path/to/sourcefile /path/to/hardlinkfile
```

---

### 2. Symbolic (Soft) Links

A **symbolic link** (symlink) is a special file that points to another file or directory. It stores the path to the original file and works as a shortcut or reference. Unlike hard links, symbolic links can span different file systems and can link to both files and directories.

#### Characteristics of Symbolic Links:
- A symlink contains a path to the original file.
- It works across different file systems.
- If the target file is deleted, the symlink becomes broken (dangling symlink).
- Useful for creating shortcuts or references to files in different locations.

#### Example Command to Create a Symbolic Link:

```bash
ln -s /path/to/sourcefile /path/to/symlinkfile
```
### Symbolic Link Example

A symbolic link points to the original file or directory, and acts like a shortcut.

```bash
ln -s /home/user/document.txt /home/user/symlink_document.txt
```
### Hard Link Example

A hard link points to the same data on the disk as the original file. Both the original file and the hard link are indistinguishable.

```bash
ln /home/user/document.txt /home/user/hardlink_document.txt
```
---

### Use Cases of Links

#### 1. **Hard Links Use Case**:
- **Backup or Duplication**: When you need another entry point to a file without duplicating the data. Hard links are useful in backups and creating copies without taking additional storage space.

#### 2. **Symbolic Links Use Case**:
- **Shortcuts**: To create a shortcut or reference to a file or directory in a different location. For example, creating a symlink to a configuration file in a different directory.

---

### Conclusion

Both **hard links** and **symbolic links** have their uses. Hard links are ideal for pointing directly to data without duplicating it, while symbolic links are perfect for creating shortcuts or linking files across file systems.


## `echo` Command in Linux

The `echo` command is used to display a line of text or the value of a variable to the standard output (usually the terminal). It is commonly used in shell scripts for printing messages.

### Syntax:
```bash
echo [OPTION] [STRING]
```


## Understanding Variables and Paths in Linux

### Variables in Linux

A **variable** in Linux is a container used to store information that can be accessed and manipulated by commands or scripts. Variables are essential in shell scripting, as they allow for dynamic and flexible execution of commands.

#### Types of Variables:
1. **Environment Variables**:
   - These variables are set globally and affect the behavior of the system or processes. They are usually set in the shell configuration files like `.bashrc`, `.bash_profile`, or `.profile`.
   - Example:
     ```bash
     export PATH="/usr/local/bin:$PATH"
     ```
     In this case, `PATH` is an environment variable that defines the directories where executable programs are located.

2. **Shell Variables**:
   - These are variables set for use within the shell session or script and are not global. They can store strings, numbers, and the results of commands.
   - Example:
     ```bash
     name="Alice"
     echo "Hello, $name"
     ```
     Output:
     ```
     Hello, Alice
     ```

#### Using Variables:
- **Define a variable**: 
  ```bash
  variable_name="value"
  ```

## Understanding the `.env` File in Linux

A **`.env` file** is used to set environment variables for your system or application. These variables store configuration values, credentials, and other parameters that the system or application can reference during execution. Typically, `.env` files are used to define key-value pairs in a format that's easy to manage, especially in development or deployment environments.

### Purpose of `.env` Files

1. **Storing Configuration**:
   - `.env` files are commonly used to store environment-specific configuration, such as API keys, database URLs, and other sensitive information.
   - This keeps sensitive information out of your main application code and allows different configurations for different environments (e.g., development, testing, production).

2. **Loading Environment Variables**:
   - The `.env` file allows for easy loading of variables into the environment at the start of a session, so they can be accessed by your shell or application.

### Format of a `.env` File

A `.env` file typically consists of **key-value pairs**, where the key is the name of the variable and the value is its corresponding value. Each pair is separated by an equal sign (`=`).

```bash
KEY=value
```

### Example of a `.env` File:

```bash
DATABASE_URL="postgres://user:password@localhost/dbname"
API_KEY="your-api-key-here"
DEBUG=true
PORT=3000
```

### Key Rules for `.env` Files:

1. **No spaces around the `=` sign**:
   - Valid:
     ```bash
     API_KEY="abc123"
     ```
   - Invalid:
     ```bash
     API_KEY = "abc123"  # This will not work
     ```

2. **Comments**:
   - You can add comments in a `.env` file by using the `#` symbol.
   - Example:
     ```bash
     # This is a comment
     DEBUG=true
     ```

3. **Quoting Values**:
   - If the value contains spaces or special characters, wrap it in double quotes (`"`).
   - Example:
     ```bash
     GREETING="Hello, World!"
     ```

### Using `.env` Files in Applications

- **In Node.js**:
  - You can use the `dotenv` package to load variables from a `.env` file into your application.
  - First, install `dotenv`:
    ```bash
    npm install dotenv
    ```
  - Then, add this line at the beginning of your JavaScript code:
    ```javascript
    require('dotenv').config();
    console.log(process.env.DATABASE_URL);
    ```

- **In Bash**:
  - You can load a `.env` file using the `source` or `.` command:
    ```bash
    source .env
    ```
    or
    ```bash
    . .env
    ```
  - After sourcing, the variables defined in the `.env` file will be available in the shell session.

### Best Practices for `.env` Files:

1. **Don't Commit `.env` Files to Version Control**:
   - Since `.env` files may contain sensitive information like passwords or API keys, it’s important **not to commit them to version control** (e.g., Git). Instead, add `.env` to your `.gitignore` file:
     ```bash
     # .gitignore
     .env
     ```

2. **Use Different `.env` Files for Different Environments**:
   - It's a common practice to have different `.env` files for different environments, such as:
     - `.env.development` for development
     - `.env.production` for production
   - This allows you to easily switch between configurations by specifying the appropriate `.env` file.

3. **Security Considerations**:
   - Store sensitive information (like passwords) securely, and use tools like `vault` or cloud secrets management services in production environments.

### Conclusion

The `.env` file is a convenient way to manage environment variables in Linux and other operating systems. It helps keep sensitive data like API keys, database URLs, and configuration settings separate from application code. By following best practices, you can ensure that `.env` files are used securely and effectively in both development and production environments.

## User Management in Rocky Linux 9

## Overview
User management in Linux involves creating, modifying, and deleting user accounts, as well as assigning user privileges and managing groups. In Rocky Linux 9, user management is done via command-line tools like `useradd`, `usermod`, `userdel`, and `groupadd`.

---

## 1. `useradd` (Create a New User)
- **Usage:** `useradd <username>`
- **Explanation:** The `useradd` command is used to create a new user account. The command creates the user's home directory and sets up default user configuration files.

    **Example:**
    ```bash
    $ sudo useradd -m john
    ```

    - `-m`: Creates the home directory for the user.

---

## 2. `usermod` (Modify User Account)
- **Usage:** `usermod [options] <username>`
- **Explanation:** The `usermod` command modifies an existing user account. You can change user details like the home directory, username, user ID, group membership, etc.

    **Examples:**
    - Change user’s home directory:
      ```bash
      $ sudo usermod -d /home/john_doe john
      ```

    - Add a user to a group:
      ```bash
      $ sudo usermod -aG sudo john
      ```
      - `-aG`: Adds the user to the specified group without removing them from other groups.

---

## 3. `userdel` (Delete a User Account)
- **Usage:** `userdel [options] <username>`
- **Explanation:** The `userdel` command removes a user account from the system. It can also remove the user's home directory and mail spool if specified.

    **Example:**
    ```bash
    $ sudo userdel -r john
    ```
    - `-r`: Removes the user’s home directory and mail spool along with the user.

---

## 4. `passwd` (Change User Password)
- **Usage:** `passwd <username>`
- **Explanation:** The `passwd` command is used to change a user's password. If no username is specified, it changes the current user's password.

    **Example:**
    ```bash
    $ sudo passwd john
    ```
    - Prompts you to enter a new password for the user `john`.

---

## 5. `groupadd` (Create a Group)
- **Usage:** `groupadd <groupname>`
- **Explanation:** The `groupadd` command creates a new group on the system.

    **Example:**
    ```bash
    $ sudo groupadd developers
    ```

---

## 6. `groupdel` (Delete a Group)
- **Usage:** `groupdel <groupname>`
- **Explanation:** The `groupdel` command deletes a specified group from the system. Note that it does not remove users assigned to the group.

    **Example:**
    ```bash
    $ sudo groupdel developers
    ```

---

## 7. `gpasswd` (Administer Group Passwords)
- **Usage:** `gpasswd <groupname>`
- **Explanation:** This command is used to administer group passwords. It allows you to assign a password to a group, which can be used for privileged group access.

    **Example:**
    ```bash
    $ sudo gpasswd developers
    ```

---

## 8. `id` (Display User and Group Information)
- **Usage:** `id <username>`
- **Explanation:** The `id` command displays the user’s UID (User ID), GID (Group ID), and group memberships.

    **Example:**
    ```bash
    $ id john
    ```
    - Displays information such as:
      ```
      uid=1001(john) gid=1001(john) groups=1001(john),10(wheel)
      ```

---

## 9. `groups` (Display Group Memberships)
- **Usage:** `groups <username>`
- **Explanation:** The `groups` command shows the groups to which a user belongs.

    **Example:**
    ```bash
    $ groups john
    ```
    - Output might be:
      ```
      john : john wheel
      ```

---

## 10. `chown` (Change Ownership of Files/Directories)
- **Usage:** `chown [options] <user>:<group> <file>`
- **Explanation:** The `chown` command is used to change the ownership of a file or directory. It can be used to assign files to a user and a group.

    **Example:**
    ```bash
    $ sudo chown john:developers /home/john/file.txt
    ```

---

## 11. `chgrp` (Change Group Ownership of Files/Directories)
- **Usage:** `chgrp <groupname> <file>`
- **Explanation:** The `chgrp` command changes the group ownership of a file or directory.

    **Example:**
    ```bash
    $ sudo chgrp developers /home/john/file.txt
    ```

---

## 12. `whoami` (Current User)
- **Usage:** `whoami`
- **Explanation:** Displays the username of the current user.

    **Example:**
    ```bash
    $ whoami
    john
    ```

---

## 13. `w` (Who Is Logged In)
- **Usage:** `w`
- **Explanation:** Displays who is logged in and what they are doing.

    **Example:**
    ```bash
    $ w
    ```

    - Example output:
      ```
      11:42:43 up 4 days,  3:34,  2 users,  load average: 0.00, 0.01, 0.05
      USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
      john     pts/0    :0               09:23    3.00s  0.01s  0.01s w
      ```

---

## 14. `last` (Display Last Logins)
- **Usage:** `last`
- **Explanation:** Displays the login history for users, showing when and where users last logged in.

    **Example:**
    ```bash
    $ last
    ```

---

## 15. `su` (Switch User)
- **Usage:** `su - <username>`
- **Explanation:** The `su` (substitute user) command allows you to switch to another user account. If no username is provided, it defaults to the root user.

    **Example:**
    ```bash
    $ su - john
    ```
    - Switches to the `john` user account.
## 16 SSH private and public key
# 🔐 SSH Key Authentication in RHEL 8

SSH key-based authentication is a secure and convenient method for logging into remote systems without using passwords.

---

## 📂 SSH Key Pair Basics

- **Public Key** (`id_rsa.pub`): Shared with the remote server.
- **Private Key** (`id_rsa`): Kept **secure and private** on the client.

> 🔒 Never share your **private key**.

---

- 🛠️ Generate SSH Key Pair

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
- Copy Public Key to Remote Server
```shell
ssh-copy-id user@remote-server
```
- Login with ssh key 
```shell
ssh user@remote-server
```
- Permissions on Remote Server for a specific user
```shell
sudo chown -R john:john /home/john/.ssh
chmod 700 /home/john/.ssh
chmod 600 /home/john/.ssh/authorized_keys
```
---

## 16. `sudo` (Execute a Command as Another User)
- **Usage:** `sudo <command>`
- **Explanation:** The `sudo` command allows users to execute commands with elevated privileges, typically as the root user. Users need to be part of the `sudoers` group to use `sudo`.

    **Example:**
    ```bash
    $ sudo apt update
    ```

---

## 17. `/etc/passwd` (User Account Information)
- **Explanation:** This file contains basic information about all user accounts on the system, including their username, UID, GID, home directory, and login shell.

    **Example:**
    ```bash
    $ cat /etc/passwd
    ```
    - Example entry:
      ```
      john:x:1001:1001:John Doe:/home/john:/bin/bash
      ```

---

## 18. `/etc/shadow` (User Password Information)
- **Explanation:** This file stores user password information in an encrypted format. Only privileged users (like root) can read this file.

    **Example:**
    ```bash
    $ cat /etc/shadow
    ```
    - Example entry:
      ```
      john:$6$8DF....:18011:0:99999:7:::
      ```

---


## Linux Permission Management

In Linux, **file and directory permissions** define who can read, write, or execute a file. These permissions are crucial for system security and multi-user environments.

---

## 🧱 Basic Concepts

Every file/directory has:

- **Owner**: User who owns the file
- **Group**: Group associated with the file
- **Others**: Everyone else

### Permission Types

| Symbol | Meaning     | Applies to        |
|--------|-------------|-------------------|
| `r`    | Read        | File: view content<br>Directory: list files |
| `w`    | Write       | File: modify content<br>Directory: add/remove files |
| `x`    | Execute     | File: run as a program<br>Directory: enter directory |

---

## 🔍 Viewing Permissions

Use `ls -l`:

```bash
$ ls -l file.txt
-rw-r--r-- 1 user group 1024 May  7 12:00 file.txt
```
### 2. Numeric (Octal) Mode

| Octal | Binary | Meaning |
|-------|--------|---------|
| 7     | 111    | rwx     |
| 6     | 110    | rw-     |
| 5     | 101    | r-x     |
| 4     | 100    | r--     |
| 0     | 000    | ---     |


## 🔍 What are Permissions in Linux?

Linux is a multi-user operating system. Every file or directory is associated with **access permissions** for:

- **User (u)** – the owner
- **Group (g)** – users in the same group
- **Others (o)** – all other users

Each can have three types of permissions:

| Symbol | Permission | File Meaning      | Directory Meaning        |
|--------|------------|-------------------|---------------------------|
| `r`    | Read       | View contents     | List files               |
| `w`    | Write      | Modify contents   | Add/remove files         |
| `x`    | Execute    | Run as program    | Enter (`cd`) the folder  |

---

## 👁️ Viewing Permissions

Use `ls -l` to view permissions:

```bash
$ ls -l file.txt
-rw-r--r-- 1 user group 1024 May  7 12:00 file.txt
```

Breakdown:
- `-` → file type (`d` for directory)
- `rw-` → user can read/write
- `r--` → group can read
- `r--` → others can read

---

## ✏️ Changing Permissions with `chmod`

You can change permissions in two ways:

### 1. Symbolic Mode

```bash
chmod u+x script.sh       # Add execute for user
chmod g-w file.txt        # Remove write for group
chmod o=r file.txt        # Set read-only for others
chmod a+x deploy.sh       # Add execute for all (user, group, others)
```

### 2. Numeric (Octal) Mode

| Octal | Binary | Permission |
|-------|--------|------------|
| 7     | 111    | rwx        |
| 6     | 110    | rw-        |
| 5     | 101    | r-x        |
| 4     | 100    | r--        |
| 0     | 000    | ---        |

Examples:

```bash
chmod 755 script.sh       # rwxr-xr-x
chmod 644 file.txt        # rw-r--r--
```

### Recursive Change

```bash
chmod -R 755 /path/to/dir
```

---

## 🔐 Special Permissions

Linux supports **special permissions** for advanced access control.

### 1. Setuid (Set User ID)

- When set on an executable, the process runs as the **file owner**.
- Represented by `s` in the user field (`rws`).

```bash
chmod u+s /usr/bin/somebinary
```

### 2. Setgid (Set Group ID)

- On **files**: Process runs with the file’s group.
- On **directories**: New files inherit the directory's group.
- Represented by `s` in the group field (`rwxr-sr-x`).

```bash
chmod g+s /shared/folder
```

### 3. Sticky Bit

- Commonly used on shared directories like `/tmp`.
- Only the file's **owner** can delete it.
- Represented by `t` in the others field (`rwxrwxrwt`).

```bash
chmod +t /shared/folder
```

---

## 🧪 Special Permissions with Octal

```bash
chmod 1755 file.sh   # Sticky bit + rwxr-xr-x
chmod 2755 file.sh   # Setgid + rwxr-sr-x
chmod 4755 file.sh   # Setuid + rwsr-xr-x
```

View them with `ls -l`:

- `s` in user/group field: Setuid/Setgid
- `t` in others field: Sticky bit

---

## 📘 Summary

- Use `ls -l` to view permissions
- Use `chmod` (symbolic or octal) to modify them
- Use `chown` to change file ownership
- Use `chmod u+s`, `g+s`, or `+t` to set special permissions

Mastering Linux permissions helps enforce security, especially in multi-user environments.


# 🌐 RHEL 8 Networking Overview

Red Hat Enterprise Linux 8 introduces several modern tools and practices for network configuration and management. It replaces legacy networking services like `network` and `ifconfig` with **NetworkManager** and `nmcli`.

---

## 🧰 Key Tools

| Tool     | Purpose                                      |
|----------|----------------------------------------------|
| `nmcli`  | CLI to control NetworkManager                |
| `nmtui`  | Text-based UI for NetworkManager             |
| `ip`     | Show/manipulate routing, devices, IPs        |
| `ss`     | Display socket statistics (replaces `netstat`) |
| `firewalld` | Manage firewall dynamically                |
| `nmstatectl` | Declarative network management (advanced) |

---

## 📁 Network Configuration Files

| File/Directory                      | Purpose                            |
|------------------------------------|------------------------------------|
| `/etc/NetworkManager/`             | Main NetworkManager configs        |
| `/etc/sysconfig/network-scripts/`  | Legacy ifcfg-* files (still used)  |
| `/etc/resolv.conf`                 | DNS resolution                     |
| `/etc/hosts`                       | Static hostname-IP mapping         |
| `/etc/hostname`                    | Sets the system hostname           |

---

## 🖧 Common Networking Commands

### 🔎 View Network Interfaces
```bash
ip a
nmcli device status
```
- Bring Interface Up/Down
```shell
nmcli device disconnect ens33
nmcli device connect ens33
```
- Set Static Ip address
```shell
nmcli con add type ethernet con-name static-ens33 ifname ens33 ipv4.addresses 192.168.1.100/24 \
  ipv4.gateway 192.168.1.1 ipv4.dns "8.8.8.8" ipv4.method manual
```
- Restart Networking 
```shell
nmcli networking off
nmcli networking on
# or restart NetworkManager service
systemctl restart NetworkManager
```






























































































































































































































































































