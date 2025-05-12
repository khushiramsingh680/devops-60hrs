+++
title = "Linux Basics: Day 02"
weight = 2
+++

## Architecture and File Structure of Linux 

### System Architecture
RHEL Linux 9 supports **x86_64** (64-bit) architecture by default. It also provides support for ARM-based systems. RHEL Linux 9 uses the **Linux Kernel** (typically version 5.14.x) and the **systemd** init system.

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
## 1. `pwd` (Print Working Directory)
- **Usage:** `pwd`
- **Explanation:** This command prints the full path of the current working directory. It helps users confirm where 
they are in the directory structure.

    **Example:**
    ```bash
    $ pwd
    /home/user
    ```

## 2. `ls` (List)
- **Usage:** `ls`
- **Explanation:** Lists the files and directories within the current directory. By default, `ls` will not show 
hidden files (files starting with a dot). Use options like `-l` for detailed listing or `-a` for all files.

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
- **Explanation:** This command allows you to change to a specified directory. If no argument is provided, it takes 
you to the user's home directory.

    **Example:**
    ```bash
    $ cd /home/user/Documents
    ```

## 4. `cp` (Copy)
- **Usage:** `cp <source> <destination>`
- **Explanation:** Copies files or directories from the source to the destination. You can use the `-r` option to 
copy directories recursively.

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
- **Explanation:** Removes a file. If you want to remove a directory, you must use the `-r` option for recursive 
removal.

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
- **Explanation:** Displays the contents of a file to the terminal. It can also be used to concatenate files 
together.

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
- **Explanation:** Changes the permissions of a file or directory. It uses numerical values to set read, write, and 
execute permissions for the owner, group, and others.

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
- **Explanation:** Displays the current running processes on your system, showing information such as process ID 
(PID), memory and CPU usage.

    **Example:**
    ```bash
    $ ps aux
    ```

## 14. `top` (Task Manager)
- **Usage:** `top`
- **Explanation:** Displays a real-time, dynamic view of the system’s running processes, including memory, CPU 
usage, and more.

    **Example:**
    ```bash
    $ top
    ```

## 15. `df` (Disk Free)
- **Usage:** `df -h`
- **Explanation:** Displays the available disk space on all mounted filesystems. The `-h` option makes the output 
human-readable.

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



# 🧪 Linux Command Line Practice Test

### 1. ✅ Check the hostname of the system
**Q:** What command is used to check the hostname of the current system?

<details>
<summary><strong>Click to see the answer</strong></summary>

```bash
hostname
```

</details>
```

---

### 2. 🕒 Check the current time of the system  
**Q:** Which command displays the system's current date and time?

<details>
<summary><strong>Click to see the answer</strong></summary>

```bash
date
```

</details>```

---

### 3. 🖥️ Change the hostname  
**Q:** What command would you use to change the system hostname to `linuxlab`?

<details>
<summary><strong>Click to see the answer</strong></summary>

```bash
sudo hostnamectl set-hostname linuxlab
```

</details>

---

### 4. 📁 Directory navigation  
**Q:** Create a directory called `practice`, move into it, and list at least 3 `cd` commands to navigate.

<details>
<summary><strong>Click to see the answer</strong></summary>

```bash
mkdir practice
cd practice
cd ..
cd -
cd ~
```

</details>

---

### 5. 📄 Create and edit a file  
**Q:** How do you create a file called `notes.txt`, add content using `cat`, and then edit it using `vi`?

<details>
<summary><strong>Click to see the answer</strong></summary>

```bash
touch notes.txt
cat > notes.txt
# (Type content and press Ctrl+D)
vi notes.txt
# (Press 'i' to insert, Esc to exit insert, ':wq' to save and exit)
```

</details>

---

### 6. 💾 Check available memory  
**Q:** Which command shows you memory usage in human-readable format?

<details>
<summary><strong>Click to see the answer</strong></summary>

```bash
free -h
```

</details>

---

### 7. 💽 Check disk and CPU info  
**Q:** How can you check the disk space and number of CPU cores?

<details>
<summary><strong>Click to see the answer</strong></summary>

```bash
df -h      # Disk space
nproc      # Number of CPU cores
lscpu      # Detailed CPU info
```

</details>

---

### 8. 🗑️ Practice `rm` command  
**Q:** What is the difference between `rm file.txt` and `rm -rvf dir/`?

<details>
<summary><strong>Click to see the answer</strong></summary>

- `rm file.txt` removes a single file.  
- `rm -rvf dir/` forcefully and recursively removes the directory `dir` and all its contents without confirmation.

</details>

---

### 9. 📋 Practice `cp` command  
**Q:** Copy `a.txt` to `b.txt`, and recursively copy a folder `dir1` to `dir2`.

<details>
<summary><strong>Click to see the answer</strong></summary>

```bash
cp a.txt b.txt
cp -rvf dir1/ dir2/
```

</details>

---

### 10. 🔁 Move and rename files  
**Q:** How do you move `temp.txt` to `/tmp` and rename `data.txt` to `archive.txt`?

<details>
<summary><strong>Click to see the answer</strong></summary>

```bash
mv temp.txt /tmp/
mv data.txt archive.txt
```

</details>

---

### 11. 📂 Check file systems  
**Q:** What command lists the file systems and their types?

<details>
<summary><strong>Click to see the answer</strong></summary>

```bash
df -T
lsblk -f
mount | column -t
```

</details>

---
## 🧪 Linux Command Line Practice Test (Relearn Theme)

### 1. ✅ Check the hostname of the system

{{< expand "Q: What command is used to check the hostname of the current system?" >}}
```bash
hostname
```
{{< /expand >}}

### 2. 🕒 Check the current time of the system

{{< expand "Q: Which command displays the system’s current date and time?" >}}
```bash
date
```
{{< /expand >}}

### 3. ✏️ Change the hostname of the system

{{< expand "Q: How do you change the hostname of a Linux system temporarily?" >}}
```bash
sudo hostname new-hostname
```
{{< /expand >}}

### 4. 📁 Create a directory and practice cd commands

{{< expand "Q: Which command is used to create a directory and then navigate into it?" >}}
```bash
mkdir testdir && cd testdir
```
{{< /expand >}}

### 5. 📝 Create a file with touch, add contents using cat, and edit with vi

{{< expand "Q: How do you create a file, add contents, and open it in vi editor?" >}}
```bash
touch file.txt
cat > file.txt
vi file.txt
```
{{< /expand >}}

### 6. 📊 Check memory available

{{< expand "Q: Which command shows the available memory on the system?" >}}
```bash
free -h
```
{{< /expand >}}

### 7. 💽 Check disk usage and number of CPUs

{{< expand "Q: Which command shows disk usage and CPU count?" >}}
```bash
df -h
nproc
```
{{< /expand >}}

### 8. 🗑️ Practice rm and rm -rvf

{{< expand "Q: How do you remove a directory and all its contents forcefully and recursively?" >}}
```bash
rm -rvf dir_name
```
{{< /expand >}}

### 9. 📄 Practice cp and cp -rvf

{{< expand "Q: How do you copy a directory recursively and force overwrite?" >}}
```bash
cp -rvf sourcedir targetdir
```
{{< /expand >}}

### 10. 📦 Test mv command

{{< expand "Q: How do you move or rename a file using mv?" >}}
```bash
mv oldname.txt newname.txt
```
{{< /expand >}}

### 11. 🗃️ Check different file systems available

{{< expand "Q: Which command lists mounted filesystems?" >}}
```bash
df -T
```
{{< /expand >}}


## Lab @1
- [ ] Login to a linux and enable password Authentication
- [ ] Check the root home directory
- [ ] Switch to a different user from root user
- [ ] Set the hostname persistently across reboot 
- [ ] Reboot system
- [ ] Shut down vm
- [ ] Check for how long system is running ?
  

























































































































































































































































































































































































































































