+++
title = "Linux Disk Management: Day 04"
duration = "2h"
weight = 4
+++
 
---
## Topics
- **[Recap](#recap)**
- **[Checking Exisitng disk](#-1-listing-disks-and-partitions)**
- **[Partiotion a Disk](#-2-partitioning-disks)**
- **[Mounting a disk after format](#-4-mounting-and-unmounting-disks)**
- **[Introduction to LVM](#-introduction-to-lvm-logical-volume-management)**
- **[Swap Partition](#-swap-partitions-in-linux)**
- **[Loging Overview](#-rhel-8-logging-overview)**

## Recap
- [ ] Umask usgae( to control the default permission)
- [ ] Log into the Vagrant virtual machine using the default SSH private key.
  ```ruby
  .vagrant/machines/<machine-name>/<provider>/private_key
  ssh -i <privatekey> <user-name>/ip
  ```
- [ ] Convert the private key .pem file into ppk to login with putty.
- [ ] Login to 3rd server but private key is on 1st server 
     - **🔐 SSH into a Third Server When Private Key Is on First Server (Using Agent Forwarding)**

    ### 🧭 Scenario
    You want to SSH into **Server C** from **Server A**, but the **SSH private key is only on your local machine (Laptop)**. You don't want to copy the key to Server A for security reasons.

    ---

    ### ✅ Solution: SSH Agent Forwarding

    This allows you to forward your SSH key securely from your **Laptop → Server A → Server C** without ever copying the private key.

    ---

    ### 📝 Steps

    - [ ]  **Start SSH Agent on Your Local Machine**

    ```bash
    eval "$(ssh-agent -s)"
    ssh-add /path/to/your/private_key
    ```
    - [ ] Check loaded keys:
    ```bash
     ssh-add -l

   ```
   - [ ] SSH into Server A with Agent Forwarding Enabled
   ```bash
    ssh -A user@serverA
  ```
  - [ ] From Server A, SSH into Server C
  ```bash
  ssh user@serverC
  ```

- [ ] Test the port forward on Virtualbox
- [ ] Test the port forward on Putty
### 📂 1. Listing Disks and Partitions
#### View all block devices:
```bash
lsblk
```
#### Show detailed partition table:

```bash
fdisk -l
```

#### View disk usage:

```bash
df -h
```

#### View inode usage:

```bash
df -i
```

---

## 🧱 2. Partitioning Disks

#### Using `fdisk` (for MBR-style partitions):

```bash
sudo fdisk /dev/sdX
# n -> new partition
# p -> primary
# w -> write changes
```

## 🛠️ 3. Creating Filesystems

#### Create ext4 filesystem:

```bash
sudo mkfs.ext4 /dev/sdX1
```

#### Create xfs filesystem:

```bash
sudo mkfs.xfs /dev/sdX1
```

---

## 📦 4. Mounting and Unmounting Disks

#### Create a mount point and mount:

```bash
sudo mkdir /mnt/data
sudo mount /dev/sdX1 /mnt/data
```

#### Unmount:

```bash
sudo umount /mnt/data
```

#### View mounted filesystems:

```bash
mount | grep sd
```

---

## 🔁 5. Persistent Mounting with `/etc/fstab`

#### Get UUID:

```bash
blkid /dev/sdX1
```

#### Edit `/etc/fstab`:

```
UUID=xxxx-xxxx  /mnt/data  ext4  defaults  0  2
```

Then run:

```bash
sudo mount -a   # To verify fstab is valid
```

---

## 🔍 6. Disk Usage Analysis

#### Using `du`:

```bash
du -sh /home/user
```

#### Using `ncdu` (interactive tool):

```bash
sudo apt install ncdu   # or yum install ncdu
ncdu /
```

---

## 🔒 7. Checking & Repairing Filesystems

#### ext4 check:

```bash
sudo fsck /dev/sdX1
```

> Must unmount first or run in recovery mode.

---
## 🔒 **Introduction to LVM (Logical Volume Management)**

**LVM (Logical Volume Management)** is a flexible and advanced way to manage disk storage in Linux. It allows you to create, resize, and manage storage volumes dynamically, as opposed to traditional partitioning. LVM abstracts the storage devices, giving you more control and flexibility over disk management.

### Key Concepts:
1. **Physical Volumes (PV)**: These are the actual hard drives or partitions that are initialized for use by LVM. A physical volume can be any storage device, such as a disk or a partition.
2. **Volume Groups (VG)**: A volume group is a collection of physical volumes. It pools storage from the physical volumes, making it easier to allocate storage dynamically.
3. **Logical Volumes (LV)**: Logical volumes are created within volume groups. These are the virtual storage units that users can use like a regular partition or disk, where file systems are created and data is stored.

### Advantages of LVM:
- **Dynamic Volume Resizing**: Easily resize logical volumes and file systems without data loss.
- **Snapshots**: Create backups of volumes at any point in time.
- **Better Disk Utilization**: You can combine multiple physical disks into a single volume group for better utilization and flexibility.
- **Striping and Mirroring**: LVM supports RAID-like features such as striping (for performance) and mirroring (for redundancy).

Now that we have a basic understanding of LVM, let’s look at some common **LVM commands** used to manage storage volumes.

## 🔒 LVM Commands

### 1️⃣ **List Physical Volumes (PV)**
```bash
pvs
```
This command lists all physical volumes in the system, showing basic information about each PV.

### 2️⃣ **Display Detailed Information about a Physical Volume**
```bash
pvdisplay /dev/sda
```
Displays detailed information about a specific physical volume.

### 3️⃣ **Create a Physical Volume**
```bash
pvcreate /dev/sda
```
Initialize a physical volume on a device (e.g., `/dev/sda`), so it can be added to a volume group.

### 4️⃣ **Extend a Physical Volume**
```bash
pvresize /dev/sda
```
Resize a physical volume, which is useful if you've expanded the underlying disk.

### 5️⃣ **List Volume Groups (VG)**
```bash
vgs
```
Shows a list of all volume groups in the system.

### 6️⃣ **Display Detailed Information about a Volume Group**
```bash
vgdisplay vg_name
```
Displays detailed information about a specific volume group, including the total size, free space, and more.

### 7️⃣ **Create a Volume Group**
```bash
vgcreate vg_name /dev/sda /dev/sdb
```
Creates a new volume group by adding physical volumes (e.g., `/dev/sda` and `/dev/sdb`) to the group.

### 8️⃣ **Extend a Volume Group by Adding More Physical Volumes**
```bash
vgextend vg_name /dev/sdc
```
Adds a new physical volume to an existing volume group to increase its available storage.

### 9️⃣ **Reduce the Size of a Volume Group**
```bash
vgreduce vg_name /dev/sdb
```
Removes a physical volume from a volume group.

### 🔟 **Create a Logical Volume (LV)**
```bash
lvcreate -n lv_name -L 10G vg_name
```
Create a new logical volume named `lv_name` with a size of 10GB in the specified volume group `vg_name`.

### 1️⃣1️⃣ **Display Information about Logical Volumes**
```bash
lvdisplay /dev/vg_name/lv_name
```
Shows detailed information about a specific logical volume.

### 1️⃣2️⃣ **Extend a Logical Volume**
```bash
lvextend -L +10G /dev/vg_name/lv_name
```
Extend a logical volume by 10GB.

### 1️⃣3️⃣ **Resize a Logical Volume (after extending)**
```bash
resize2fs /dev/vg_name/lv_name
```
Resize the file system on a logical volume after it has been extended.

### 1️⃣4️⃣ **Remove a Logical Volume**
```bash
lvremove /dev/vg_name/lv_name
```
Removes a specified logical volume.

### 1️⃣5️⃣ **Remove a Volume Group**
```bash
vgremove vg_name
```
Removes a specified volume group.

### 1️⃣6️⃣ **Remove a Physical Volume**
```bash
pvremove /dev/sda
```
Removes a physical volume, typically after removing it from the volume group.

### 1️⃣7️⃣ **List All Available LVM Commands**
```bash
lvm
```
Launches the interactive LVM command-line interface.

### 1️⃣8️⃣ **Display LVM System Information**
```bash
lvm pvscan
```
Scans for physical volumes and shows details about their status.

### 1️⃣9️⃣ **Create a Snapshot of a Logical Volume**
```bash
lvcreate -L 1G -s -n lv_snapshot /dev/vg_name/lv_name
```
Creates a snapshot of a logical volume, which can be used for backup purposes.

### 2️⃣0️⃣ **Activate a Volume Group**
```bash
vgchange -ay vg_name
```
Activates the specified volume group, making it available for use.

### 2️⃣1️⃣ **Deactivate a Volume Group**
```bash
vgchange -an vg_name
```
Deactivates a volume group, making it unavailable for use.


## 🔒 **Swap Partitions in Linux**

A **swap partition** is used by Linux to extend the available memory by using disk space. When the physical RAM is full, the system moves some of the inactive pages in RAM to swap space. It helps prevent the system from running out of memory and crashing. Swap partitions are particularly useful on systems with limited physical memory (RAM) or for systems running memory-intensive applications.

### Key Points About Swap:
1. **Swap Partition**: A dedicated disk partition used specifically for swap space.
2. **Swap File**: A regular file on an existing file system used to create swap space.
3. **Swapiness**: A kernel parameter that determines how aggressively the kernel will use swap space. A value of 0 means the system will avoid swapping, and a value of 100 means the system will swap aggressively.
4. **Performance Impact**: Swap space is much slower than physical RAM, so it's crucial not to rely too much on it. Excessive swapping (swapping too often) can slow down system performance.

### Swap Space Advantages:
- **Prevents Out of Memory Errors**: Swap provides a backup when the system runs out of RAM.
- **Improved System Stability**: Helps prevent crashes due to memory exhaustion.
- **Memory Management**: Allows Linux to keep rarely used parts of memory in swap and free up physical RAM for active processes.

---

### 🔒 **Commands Related to Swap Partitions**

### 1️⃣ **Check Current Swap Usage**
```bash
swapon -s
```
This command displays a summary of the current swap space in use on the system.

### 2️⃣ **Show Swap Information**
```bash
free -h
```
Displays the memory and swap usage in a human-readable format, including total, used, and available swap space.

### 3️⃣ **Create a Swap Partition**
```bash
fdisk /dev/sda
```
You can use `fdisk` to create a swap partition on a disk. This will involve creating a new partition and changing its type to swap.

- In `fdisk`, select the disk and choose the `n` option to create a new partition.
- Then, use the `t` command to change the partition type to `82` (Linux swap).

### 4️⃣ **Format a Partition as Swap**
```bash
mkswap /dev/sda3
```
Formats a partition (`/dev/sda3` in this case) as swap space.

### 5️⃣ **Enable the Swap Partition**
```bash
swapon /dev/sda3
```
Activates the swap partition (`/dev/sda3`) for use by the system.

### 6️⃣ **Disable a Swap Partition**
```bash
swapoff /dev/sda3
```
Disables a swap partition, freeing up the space for other uses.

### 7️⃣ **Check Swap Usage (Detailed)**
```bash
cat /proc/meminfo | grep Swap
```
Shows detailed information about swap space usage from the system's memory information.

### 8️⃣ **Add Swap Space Permanently to `/etc/fstab`**
```bash
echo '/dev/sda3 none swap sw 0 0' | sudo tee -a /etc/fstab
```
This command adds the swap partition (`/dev/sda3`) to `/etc/fstab` so that it is automatically enabled at boot time.

### 9️⃣ **Create a Swap File**
```bash
dd if=/dev/zero of=/swapfile bs=1M count=4096
```
This command creates a swap file (`/swapfile`) of 4GB (4096 MB).

### 🔟 **Change Permissions on the Swap File**
```bash
chmod 600 /swapfile
```
Sets the appropriate permissions for the swap file to ensure that only root can access it.

### 1️⃣1️⃣ **Make the Swap File**
```bash
mkswap /swapfile
```
Formats the swap file (`/swapfile`) to make it usable as swap space.

### 1️⃣2️⃣ **Activate the Swap File**
```bash
swapon /swapfile
```
Enables the swap file (`/swapfile`) for use.

### 1️⃣3️⃣ **Remove the Swap File**
```bash
swapoff /swapfile
rm /swapfile
```
Disables and removes the swap file from the system.

### 1️⃣4️⃣ **Show the Current Swappiness Setting**
```bash
cat /proc/sys/vm/swappiness
```
Displays the current swappiness value, which controls how often swap space is used.

### 1️⃣5️⃣ **Set the Swappiness Value**
```bash
sysctl vm.swappiness=10
```
Sets the swappiness value to 10 (lower means less aggressive swapping).

### 1️⃣6️⃣ **Make Swappiness Value Persistent**
```bash
echo "vm.swappiness = 10" | sudo tee -a /etc/sysctl.conf
```
Adds the swappiness setting to `/etc/sysctl.conf` for persistence across reboots.

---

### 🔒 **Conclusion on Swap**

Swap partitions and swap files are essential for managing memory on Linux systems, especially when running applications that consume a lot of memory. However, it’s important to monitor swap usage to avoid performance degradation due to excessive swapping. It’s best to have enough physical RAM to reduce reliance on swap space.

## 📘 Summary

- `lsblk`, `fdisk -l`, `df -h` – View disk info
- `fdisk`, `parted` – Create partitions
- `mkfs.ext4`, `mkfs.xfs` – Format partitions
- `mount`, `umount`, `fstab` – Manage mounts
- `fsck` – Repair filesystems

Linux disk management is critical for system setup, storage provisioning, and data integrity.

# 🧾 RHEL OS Logging Overview

RHEL 8 uses **`systemd-journald`** for system logs and **`rsyslog`** for traditional log file storage. Understanding both is essential for troubleshooting and auditing.

---

## 📒 Systemd Journal Logs (`journald`)

### 🔍 View Logs


- Show all logs
```shell
journalctl
```
- Show logs for a specific service
```shell
journalctl -u sshd
```
- Follow logs in real time
```shell
journalctl -f
```
- Show logs since boot
```shell
journalctl -b
```
- Show logs from today
```shell
journalctl --since today
```
- Show logs between time ranges
```shell
journalctl --since "2024-07-01" --until "2024-07-10"
```





































































































































































































































































































