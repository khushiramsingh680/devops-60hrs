+++
title = "Linux Disk Management: Day 04"
duration = "2h"
weight = 4
+++
 


---

## 📂 1. Listing Disks and Partitions

### View all block devices:

```bash
lsblk
```

### Show detailed partition table:

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

#### Using `parted` (for GPT and scripting):

```bash
sudo parted /dev/sdX
(parted) mklabel gpt
(parted) mkpart primary ext4 1MiB 100%
(parted) quit
```

---

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

## 📘 Summary

- `lsblk`, `fdisk -l`, `df -h` – View disk info
- `fdisk`, `parted` – Create partitions
- `mkfs.ext4`, `mkfs.xfs` – Format partitions
- `mount`, `umount`, `fstab` – Manage mounts
- `fsck` – Repair filesystems

Linux disk management is critical for system setup, storage provisioning, and data integrity.

# 🧾 RHEL 8 Logging Overview

RHEL 8 uses **`systemd-journald`** for system logs and **`rsyslog`** for traditional log file storage. Understanding both is essential for troubleshooting and auditing.

---

## 📒 Systemd Journal Logs (`journald`)

### 🔍 View Logs

```bash
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





































































































































































































































































































