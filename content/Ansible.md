+++
title = "Ansible"
duration = "32h"
weight = 8
+++
---

## 1. Getting Started with Ansible

- Overview on Ansible  
- Why use Ansible

## 2. Ansible Architecture

- Control node  
- Managed nodes  
- Inventory  
- Modules  
- Tasks  
- Playbooks  
- Lab Environment

## 3. Pre-requisites to Setup Ansible

- Control node requirements  
- Managed node requirements  
- Update `/etc/hosts` on all the hosts  
- Install mandatory pre-requisites on Ansible client nodes

## 4. Installing Ansible

- Install using package manager on RHEL 8  
- Install using package manager on CentOS 8  
- Install using pip

## 5. Configuring Ansible

- Create normal user  
- Configure password-less authentication  
- Verify password-less SSH authentication  
- Configure privilege escalation using sudo  
- Verify Ansible connectivity  

**Total Duration:** 8 hrs

## 6. Ansible Configuration File (`ansible.cfg`)

- `[defaults]` section  
- `[ssh_connection]` section  
- `[persistent_connection]` section  
- `[colors]` section

## 7. Using Ansible Ad-hoc Commands

- Overview  
- Sample ad-hoc command examples  
- How Ansible works with modules  
- Control the number of hosts for parallel execution (forks)  
- Transfer file from Ansible Engine to Managed Nodes  
- Download file from managed nodes to controller node  
- Copy files locally on the remote server (managed node)  
- Create or Remove file and directory  
- Remove a file from the managed nodes  
- Execute commands with root privileges  
- Working with packages using `yum` module  
- Execute ad-hoc commands as different user

## 8. Ansible Inventory Files

- Dynamic inventory  
- Static inventory  
- Provide hosts as an input argument  
- Groups in an inventory file  
- Groups of groups  
- Regular expressions with an inventory file  
- Variables in inventory

## 9. Working with Managed Nodes Without Python

**Total Duration:** 8 hrs  


## 10. Working with Managed Nodes with Password (Not Passphrase)

## 11. Jinja2 Templates and Syntax

- Variables  
- Use built-in filters  
- Configure VSFTPD using Jinja2 templates

## 12. Ansible Facts

- System default facts  
- User defined facts

## 13. Ansible Variables and Data Types

- Creating valid variable names  
- Built-in variables  
- Defining variables in inventory  
- Defining variable in project  
- Defining variables in playbook  
- Defining variables using command line  
- Accessing variables  
- Using `register` module to store output of any command  
- Using `set_fact` module to create a new variable  
- Prompt for user input with `vars_prompt`  
- Read and access variables from separate YAML or JSON file  
- Precedence

## 14. YAML Syntax in Ansible Playbooks

- What is YAML?  
- YAML file formatting  
- Create or Modify `.vimrc`  
- Constructing your Ansible playbook  

**Total Duration:** 8 hrs  


## 15. Introduction to Ansible Playbooks

- What are Ansible Playbooks  
- **Examples**  
  - Example-1: Your first playbook to install single package  
  - Example-2: Install multiple packages on different managed nodes  
  - Example-3: Disable gathering facts module  
  - Example-4: Assign custom name to the play and tasks  
  - Example-5: Execute playbook as shell scripts  
  - Example-6: Print debug message with playbooks  
  - Example-7: Increase verbosity level of playbook  
  - Example-8: Perform syntax check  
  - Example-9: Perform dry run of playbooks

## 16. Use Visual Code Studio to Write Playbooks (GUI)

- Download Visual Studio Code Repo  
- Access Visual Code Studio  
- Install Ansible Extension  
- Configure Visual Studio to use Ansible  
- Create playbook using Visual Studio

## 17. Using Operators in Ansible

- Arithmetic Operators  
- Comparison Operators  
- Test Operators  
- Logical Operators

## 18. Ansible Conditional Statements

- Using `when` statement  
- Using `failed_when` statement  
- Print message with `fail`  
- Using `changed_when` statement
