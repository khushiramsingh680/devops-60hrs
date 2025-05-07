+++
title = "Day 02"

+++

# Linux Basics Commands

## 1. `pwd` (Print Working Directory)
- **Usage:** `pwd`
- **Explanation:** This command prints the full path of the current working directory. It helps users confirm where they are in the directory structure.

    **Example:**
    ```bash
    $ pwd
    /home/user
    ```

## 2. `ls` (List)
- **Usage:** `ls`
- **Explanation:** Lists the files and directories within the current directory. By default, `ls` will not show hidden files (files starting with a dot). Use options like `-l` for detailed listing or `-a` for all files.

    **Example:**
    ```bash
    $ ls -la
    total 28
    drwxr-xr-x 4 user user 4096 May 10 10:45 .
    drwxr-xr-x 3 user user 4096 May 10 10:45 ..
    -rw-r--r-- 1 user user   45 May 10 10:45 file1.txt
    ```

## 3. `cd` (Change Directory)
- **Usage:** `cd <directory-path>`
- **Explanation:** This command allows you to change to a specified directory. If no argument is provided, it takes you to the user's home directory.

    **Example:**
    ```bash
    $ cd /home/user/Documents
    ```

## 4. `cp` (Copy)
- **Usage:** `cp <source> <destination>`
- **Explanation:** Copies files or directories from the source to the destination. You can use the `-r` option to copy directories recursively.

    **Example:**
    ```bash
    $ cp file1.txt /home/user/backup/
    ```

## 5. `mv` (Move/Rename)
- **Usage:** `mv <source> <destination>`
- **Explanation:** Moves or renames files and directories. It’s also used to move files between directories.

    **Example:**
    ```bash
    $ mv oldname.txt newname.txt
    ```

## 6. `rm` (Remove)
- **Usage:** `rm <file>`
- **Explanation:** Removes a file. If you want to remove a directory, you must use the `-r` option for recursive removal.

    **Example:**
    ```bash
    $ rm -r directory_name
    ```

## 7. `touch` (Create Empty File)
- **Usage:** `touch <file-name>`
- **Explanation:** Creates a new empty file if it doesn’t exist. If the file exists, `touch` updates its timestamp.

    **Example:**
    ```bash
    $ touch newfile.txt
    ```

## 8. `cat` (Concatenate and Display File)
- **Usage:** `cat <file-name>`
- **Explanation:** Displays the contents of a file to the terminal. It can also be used to concatenate files together.

    **Example:**
    ```bash
    $ cat file1.txt
    ```

## 9. `echo` (Display Text)
- **Usage:** `echo <text>`
- **Explanation:** Displays the text to the terminal or outputs it to a file.

    **Example:**
    ```bash
    $ echo "Hello, World!"
    ```

## 10. `man` (Manual Pages)
- **Usage:** `man <command>`
- **Explanation:** Displays the manual or help documentation for a command.

    **Example:**
    ```bash
    $ man ls
    ```

## 11. `chmod` (Change File Permissions)
- **Usage:** `chmod <permissions> <file>`
- **Explanation:** Changes the permissions of a file or directory. It uses numerical values to set read, write, and execute permissions for the owner, group, and others.

    **Example:**
    ```bash
    $ chmod 755 script.sh
    ```

## 12. `chown` (Change Owner/Group)
- **Usage:** `chown <user>:<group> <file>`
- **Explanation:** Changes the ownership of a file or directory. You can specify a user, a group, or both.

    **Example:**
    ```bash
    $ chown user:group file.txt
    ```

## 13. `ps` (Process Status)
- **Usage:** `ps aux`
- **Explanation:** Displays the current running processes on your system, showing information such as process ID (PID), memory and CPU usage.

    **Example:**
    ```bash
    $ ps aux
    ```

## 14. `top` (Task Manager)
- **Usage:** `top`
- **Explanation:** Displays a real-time, dynamic view of the system’s running processes, including memory, CPU usage, and more.

    **Example:**
    ```bash
    $ top
    ```

## 15. `df` (Disk Free)
- **Usage:** `df -h`
- **Explanation:** Displays the available disk space on all mounted filesystems. The `-h` option makes the output human-readable.

    **Example:**
    ```bash
    $ df -h
    ```

## 16. `free` (Memory Usage)
- **Usage:** `free -h`
- **Explanation:** Displays the amount of free and used memory in the system.

    **Example:**
    ```bash
    $ free -h
    ```

## 17. `uname` (System Information)
- **Usage:** `uname -a`
- **Explanation:** Displays the system information, including the kernel version, architecture, and other details.

    **Example:**
    ```bash
    $ uname -a
    ```

## 18. `hostname` (Get/Set Hostname)
- **Usage:** `hostname`
- **Explanation:** Displays or sets the system’s hostname.

    **Example:**
    ```bash
    $ hostname
    ```

---

# Architecture and File Structure on Rocky Linux 9

### System Architecture
Rocky Linux 9 supports **x86_64** (64-bit) architecture by default. It also provides support for ARM-based systems. Rocky Linux 9 uses the **Linux Kernel** (typically version 5.14.x) and the **systemd** init system.

- **Package Manager:** `dnf` (Dandified Yum)
- **System Architecture:** Primarily **x86_64**, also supports ARM and other architectures.

---

### File System Hierarchy

The file structure in Rocky Linux 9 follows the **Filesystem Hierarchy Standard (FHS)**, which is used across most Linux distributions. Here’s a breakdown of important directories:

#### 1. `/` (Root)
- The root directory is the top-most directory in the filesystem, from which all other directories branch out.

#### 2. `/bin` (Essential Binaries)
- Contains essential command binaries required for the system to boot and run.

    **Example:** `/bin/bash`, `/bin/ls`

#### 3. `/boot` (Boot Loader Files)
- Contains files necessary for booting the system, including the kernel.

    **Example:** `/boot/vmlinuz`, `/boot/grub2/`

#### 4. `/dev` (Device Files)
- Contains device files that represent system hardware, such as hard drives, terminals, and USB devices.

    **Example:** `/dev/sda`, `/dev/null`

#### 5. `/etc` (Configuration Files)
- Stores system-wide configuration files for the system and applications.

    **Example:** `/etc/passwd`, `/etc/hostname`

#### 6. `/home` (User Home Directories)
- Contains the home directories for regular users.

    **Example:** `/home/user1/`

#### 7. `/lib` (Essential Libraries)
- Contains shared libraries required by binaries in `/bin` and `/sbin`.

    **Example:** `/lib/libc.so.6`

#### 8. `/media` (Mount Points for Removable Media)
- Used for mounting removable media like USB drives and CD-ROMs.

    **Example:** `/media/usb/`

#### 9. `/mnt` (Temporary Mount Points)
- Typically used for temporary mounts of file systems.

    **Example:** `/mnt/data/`

#### 10. `/opt` (Optional Software Packages)
- Contains third-party application software packages that are not part of the core distribution.

    **Example:** `/opt/apache/`

#### 11. `/proc` (Virtual Filesystem for Kernel Information)
- A virtual file system that exposes system information such as running processes and hardware configuration.

    **Example:** `/proc/cpuinfo`, `/proc/meminfo`

#### 12. `/root` (Root User’s Home)
- The home directory for the root user.

    **Example:** `/root/`

#### 13. `/run` (Runtime Information)
- Contains runtime data such as information about running processes, and other system state data.

    **Example:** `/run/utmp`

#### 14. `/sbin` (System Binaries)
- Contains system binaries used for administrative tasks, typically accessible only to the root user.

    **Example:** `/sbin/reboot`, `/sbin/shutdown`

#### 15. `/tmp` (Temporary Files)
- Used for storing temporary files created by the system or applications. Files in this directory are often deleted after reboot.

    **Example:** `/tmp/tempfile`

#### 16. `/usr` (User Programs and Data)
- Contains user applications and data. It is one of the largest directories on a system.

    **Example:** `/usr/bin`, `/usr/lib`

#### 17. `/var` (Variable Data)
- Contains variable files such as logs, spool files, and caches.

    **Example:** `/var/log/`, `/var/spool/`

---

### Key Configuration Files

- **Network Configuration:** `/etc/sysconfig/network-scripts/ifcfg-eth0`
- **System Users and Groups:** `/etc/passwd`, `/etc/group`, `/etc/shadow`
- **Package Management:** `/etc/dnf/dnf.conf`
- **Systemd Services:** `/etc/systemd/system/`

---






















































































































































































































































































































































































































































