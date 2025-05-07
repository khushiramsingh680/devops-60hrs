var relearn_searchindex = [
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Vagrant Guide Vagrant is an open-source tool for building and managing virtualized environments. It provides easy-to-use workflows for working with different development environments.\nInstallation 1. Install VirtualBox Vagrant requires a provider such as VirtualBox. Download and install it from VirtualBox Downloads.\n2. Install Vagrant Download and install Vagrant from Vagrant Downloads.\nVerify the installation:\nvagrant --version Getting Started with Vagrant 1. Initialize a New Project To create a new Vagrant environment:\nvagrant init bento/ubuntu-24.04 --box-version 202407.23.0 This command creates a Vagrantfile in your project directory, which describes the virtual machine configuration.\n2. Start the Virtual Machine Run the following to launch the VM:\nvagrant up 3. SSH into the Virtual Machine Log into the virtual machine using SSH:\nvagrant ssh 4. Shut Down the Virtual Machine When done, halt the VM:\nvagrant halt Common Commands Command Description vagrant init Initialize a new Vagrant environment. vagrant up Start the Vagrant environment. vagrant ssh SSH into the Vagrant machine. vagrant halt Stop the virtual machine. vagrant destroy Remove the virtual machine. vagrant status Check the status of the virtual machine. vagrant provision Apply changes in the Vagrantfile to the VM. vagrant reload Restart the VM with updated configurations. Basic Vagrantfile Example Below is a sample Vagrantfile:\nVagrant.configure(\"2\") do |config| # Define the box to use config.vm.box = \"hashicorp/bionic64\" # Define the virtual machine's network config.vm.network \"private_network\", type: \"dhcp\" # Share a folder between the host and the guest config.vm.synced_folder \"./data\", \"/vagrant_data\" # Customize VM resources config.vm.provider \"virtualbox\" do |vb| vb.memory = \"1024\" vb.cpus = 2 end end Additional Resources Vagrant Official Documentation",
    "description": "Vagrant Guide Vagrant is an open-source tool for building and managing virtualized environments. It provides easy-to-use workflows for working with different development environments.\nInstallation 1. Install VirtualBox Vagrant requires a provider such as VirtualBox. Download and install it from VirtualBox Downloads.\n2. Install Vagrant Download and install Vagrant from Vagrant Downloads.\nVerify the installation:\nvagrant --version Getting Started with Vagrant 1. Initialize a New Project To create a new Vagrant environment:",
    "tags": [],
    "title": "Day 01",
    "uri": "/part01/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Linux Basics Tutorial Introduction to Linux Linux is an open-source operating system widely used in servers, desktops, and embedded systems. It’s known for its stability, security, and versatility. Linux is based on the Unix operating system and provides a command-line interface (CLI) for users to interact with the system.\nBasic Linux Commands Navigating the File System pwd\nPrints the current working directory.\npwd ls\nLists files and directories in the current directory.\nls ls -l # For detailed listing ls -la # for hiddent file starting with . cd\nChanges the current directory.\ncd /path/to/directory cd ~ # Goes to the home directory mkdir\nCreates a new directory.\nmkdir new_directory rmdir\nRemoves an empty directory.\nrmdir directory_name rm\nRemoves files or directories.\nrm file_name rm -r directory_name # Removes a directory and its contents File and Directory Operations touch\nCreates an empty file or updates the timestamp of an existing file.\ntouch new_file.txt cp\nCopies files or directories.\ncp source_file destination_file cp -r source_directory destination_directory # For directories mv\nMoves or renames files or directories.\nmv old_name new_name mv file_name /path/to/destination Viewing File Content cat\nDisplays the contents of a file.\ncat file.txt less\nOpens a file for reading, allowing scrolling through the content.\nless file.txt head\nDisplays the first 10 lines of a file.\nhead file.txt tail\nDisplays the last 10 lines of a file.\ntail file.txt Searching Files and Directories find\nFinds files and directories by name, type, and other attributes.\nfind /path/to/search -name \"filename.txt\" grep\nSearches for a specific pattern inside a file.\ngrep \"search_pattern\" file.txt File Permissions chmod\nChanges file permissions.\nchmod +x file.sh # Adds execute permission chmod 755 file.sh # Sets specific permissions chown\nChanges file owner and group.\nchown user:group file.txt Process Management ps\nLists running processes.\nps aux # Lists all processes top\nDisplays system processes in real-time.\ntop kill\nTerminates a process by its process ID (PID).\nkill PID Package Management (Debian/Ubuntu) apt update\nUpdates the list of available packages.\nsudo apt update apt upgrade\nUpgrades installed packages to their latest versions.\nsudo apt upgrade apt install\nInstalls a new package.\nsudo apt install package_name apt remove\nRemoves an installed package.\nsudo apt remove package_name User and Group Management useradd\nCreates a new user.\nsudo useradd username passwd\nChanges the password for a user.\nsudo passwd username groupadd\nCreates a new group.\nsudo groupadd group_name 3. File System Structure Linux uses a hierarchical file system structure, where everything is under the root directory /. Below are common directories:\n/ - Root directory /home - User home directories /etc - Configuration files /var - Variable files (e.g., logs) /usr - User programs and data /tmp - Temporary files 4. Basic Shell Scripting Create a script\nCreate a new file and add a shebang at the beginning (#!/bin/bash), followed by commands.\nnano script.sh #!/bin/bash echo \"Hello, Linux!\" Make the script executable\nchmod +x script.sh Run the script\n./script.sh Check the currently logged in user whoami Log in with root sudo -s Check memory usages free -m Disk Management Check all disk available fdisk -l lsblk Check block id of a disk blkid Check Disk space df -sh Check disk usgaes du -sh * How to format a disk mkfs.ext4 /dev/sdc How to mount to a directory ? mkdir /data mount /dev/sdc /data Mount this permanenetly vi /etc/fstab /dev/sdc ext4 /data defaults 0 0 Update the fstab mount -a Test after rebooting your Server if you want reboot init 6",
    "description": "Linux Basics Tutorial Introduction to Linux Linux is an open-source operating system widely used in servers, desktops, and embedded systems. It’s known for its stability, security, and versatility. Linux is based on the Unix operating system and provides a command-line interface (CLI) for users to interact with the system.\nBasic Linux Commands Navigating the File System pwd\nPrints the current working directory.\npwd ls\nLists files and directories in the current directory.",
    "tags": [],
    "title": "Day 02",
    "uri": "/part02/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Linux Permission Management Linux Disk Management",
    "description": "Linux Permission Management Linux Disk Management",
    "tags": [],
    "title": "Day 03",
    "uri": "/part03/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Linux Package Managemnt",
    "description": "Linux Package Managemnt",
    "tags": [],
    "title": "Day 04",
    "uri": "/part04/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Linux Performance Management",
    "description": "Linux Performance Management",
    "tags": [],
    "title": "Day 05",
    "uri": "/part05/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
