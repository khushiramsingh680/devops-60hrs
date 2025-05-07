+++
title = "Day 02"

+++

# Linux Basics Tutorial

##  Introduction to Linux

Linux is an open-source operating system widely used in servers, desktops, and embedded systems. It's known for its 
stability, security, and versatility. Linux is based on the Unix operating system and provides a command-line 
interface (CLI) for users to interact with the system.

##  Basic Linux Commands

###  Navigating the File System

- `pwd`  
  Prints the current working directory.  
  ```bash
  pwd
  ```

- `ls`  
  Lists files and directories in the current directory.  
  ```bash
  ls
  ls -l  # For detailed listing
  ls -la # for hiddent file starting with .
  ```

- `cd`  
  Changes the current directory.  
  ```bash
  cd /path/to/directory
  cd ~  # Goes to the home directory
  ```

- `mkdir`  
  Creates a new directory.  
  ```bash
  mkdir new_directory
  ```

- `rmdir`  
  Removes an empty directory.  
  ```bash
  rmdir directory_name
  ```

- `rm`  
  Removes files or directories.  
  ```bash
  rm file_name
  rm -r directory_name  # Removes a directory and its contents
  ```

###  File and Directory Operations

- `touch`  
  Creates an empty file or updates the timestamp of an existing file.  
  ```bash
  touch new_file.txt
  ```

- `cp`  
  Copies files or directories.  
  ```bash
  cp source_file destination_file
  cp -r source_directory destination_directory  # For directories
  ```

- `mv`  
  Moves or renames files or directories.  
  ```bash
  mv old_name new_name
  mv file_name /path/to/destination
  ```

###  Viewing File Content

- `cat`  
  Displays the contents of a file.  
  ```bash
  cat file.txt
  ```

- `less`  
  Opens a file for reading, allowing scrolling through the content.  
  ```bash
  less file.txt
  ```

- `head`  
  Displays the first 10 lines of a file.  
  ```bash
  head file.txt
  ```

- `tail`  
  Displays the last 10 lines of a file.  
  ```bash
  tail file.txt
  ```

###  Searching Files and Directories

- `find`  
  Finds files and directories by name, type, and other attributes.  
  ```bash
  find /path/to/search -name "filename.txt"
  ```

- `grep`  
  Searches for a specific pattern inside a file.  
  ```bash
  grep "search_pattern" file.txt
  ```

###  File Permissions

- `chmod`  
  Changes file permissions.  
  ```bash
  chmod +x file.sh  # Adds execute permission
  chmod 755 file.sh  # Sets specific permissions
  ```

- `chown`  
  Changes file owner and group.  
  ```bash
  chown user:group file.txt
  ```

### Process Management

- `ps`  
  Lists running processes.  
  ```bash
  ps aux  # Lists all processes
  ```

- `top`  
  Displays system processes in real-time.  
  ```bash
  top
  ```

- `kill`  
  Terminates a process by its process ID (PID).  
  ```bash
  kill PID
  ```

### Package Management (Debian/Ubuntu)

- `apt update`  
  Updates the list of available packages.  
  ```bash
  sudo apt update
  ```

- `apt upgrade`  
  Upgrades installed packages to their latest versions.  
  ```bash
  sudo apt upgrade
  ```

- `apt install`  
  Installs a new package.  
  ```bash
  sudo apt install package_name
  ```

- `apt remove`  
  Removes an installed package.  
  ```bash
  sudo apt remove package_name
  ```

### User and Group Management

- `useradd`  
  Creates a new user.  
  ```bash
  sudo useradd username
  ```

- `passwd`  
  Changes the password for a user.  
  ```bash
  sudo passwd username
  ```

- `groupadd`  
  Creates a new group.  
  ```bash
  sudo groupadd group_name
  ```

## 3. File System Structure

Linux uses a hierarchical file system structure, where everything is under the root directory `/`. Below are common 
directories:

- `/` - Root directory
- `/home` - User home directories
- `/etc` - Configuration files
- `/var` - Variable files (e.g., logs)
- `/usr` - User programs and data
- `/tmp` - Temporary files

### 4. Basic Shell Scripting

- **Create a script**  
  Create a new file and add a shebang at the beginning (`#!/bin/bash`), followed by commands.  
  ```bash
  nano script.sh
  #!/bin/bash
  echo "Hello, Linux!"
  ```

- **Make the script executable**  
  ```bash
  chmod +x script.sh
  ```

- **Run the script**  
  ```bash
  ./script.sh
  ```
### Check the currently logged in user
```bash
whoami
```
### Log in with root
```bash
sudo -s
```
### Check memory usages
```bash
free -m
```


### Disk Management
- Check all disk available 
```bash
fdisk -l
lsblk
```
- Check block id of a disk
```bash
blkid
```
- Check Disk space
```bash
df -sh
```
- Check disk usgaes
```bash
du -sh *
```
- How to format a disk
```bash
mkfs.ext4 /dev/sdc
```
- How to mount to a directory ?
```bash
mkdir /data
mount /dev/sdc /data
```
- Mount this permanenetly 
```bash
vi /etc/fstab
/dev/sdc   ext4   /data   defaults 0  0
```
- Update the fstab
```bash
mount -a
```
- Test after rebooting your Server if you want
```bash
reboot
init 6
```









































































































































































































































































































