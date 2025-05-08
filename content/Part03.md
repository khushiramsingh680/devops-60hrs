+++
title = "User, Group and Permissions: Day 03"
duration = "2h"
weight = 1
+++


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

































































































































































































































































































