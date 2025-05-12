+++
title = "Day 06"
duration = "2h"
weight = 6
+++
---

## Topics to cover 
#### 01 [Learning Grep](#-grep-commands-cheat-sheet)
#### 02  [Learning Redirection commands](#-grep-redirection-commands)
#### 03 [Learning Cut Commands](#️-cut-commands-cheat-sheet)
#### 04 [Learning Sed](#-sed-commands-cheat-sheet)
#### 05 [Learning Find](#-find-commands-cheat-sheet)
#### 06 [Learning Uniq](#-uniq-commands-cheat-sheet)

## 🔍 `grep` Commands Cheat Sheet

- 1️⃣ Basic Search: Search for the word "tree" in a file
```bash
grep "tree" /etc/tree.txt
```

- 2️⃣ Case-insensitive Search: Search for "tree", ignoring case
```bash
grep -i "tree" /etc/tree.txt
```

- 3️⃣ Search with Line Numbers: Search for "tree" and display line numbers
```bash
grep -n "tree" /etc/tree.txt
```

- 4️⃣ Count Matches: Count the number of lines that match "tree"
```bash
grep -c "tree" /etc/tree.txt
```

- 5️⃣ Invert Match: Display lines that do NOT contain "tree"
```bash
grep -v "tree" /etc/tree.txt
```

- 6️⃣ Show Matching Part Only: Show only the part of the line that matches "tree"
```bash
grep -o "tree" /etc/tree.txt
```

- 7️⃣ Extended Regex: Search for "ram" or "ravan" using extended regex
```bash
grep -E "ram|ravan" /etc/ram.txt
```

- 8️⃣ Whole Word Match: Match the word "tree" exactly (not part of another word)
```bash
grep -w "tree" /etc/tree.txt
```

- 9️⃣ Display File Name Only: Show filenames that contain the word "tree"
```bash
grep -l "tree" *.txt
```

- 🔟 Display File Name Only (No Match): Show filenames that do NOT contain the word "tree"
```bash
grep -L "tree" *.txt
```

- 1️⃣1️⃣ Recursive Search: Search for "tree" in all files recursively within a directory
```bash
grep -r "tree" /path/to/dir/
```

- 1️⃣2️⃣ Recursive Search (Case-insensitive): Search for "tree" recursively, ignoring case
```bash
grep -ir "tree" /path/to/dir/
```

- 1️⃣3️⃣ Search for Multiple Patterns: Search for either "tree" or "forest" in a file
```bash
grep -E "tree|forest" /etc/trees.txt
```

- 1️⃣4️⃣ Suppress Errors: Suppress error messages (e.g., for files that can't be read)
```bash
grep "tree" * 2>/dev/null
```

- 1️⃣5️⃣ Show Lines with Multiple Matches: Show lines that contain both "tree" and "forest"
```bash
grep "tree" /etc/trees.txt | grep "forest"
```

- 1️⃣6️⃣ Use with Pipes: Filter results from another command, such as ps or dmesg
```bash
ps aux | grep "nginx"                # Find running processes related to nginx
dmesg | grep -i "error"              # Look for "error" in system logs
```

- 1️⃣7️⃣ Use with xargs: Search for "ERROR" in all .log files listed in files.txt
```bash
cat files.txt | xargs grep "ERROR"
```


## 🔴 `grep` Redirection Commands

- 1️⃣ Redirect Standard Output to a File (Overwrite)
```bash
grep "tree" /etc/tree.txt > output.txt
```

- 2️⃣ Append Standard Output to a File
```bash
grep "tree" /etc/tree.txt >> output.txt
```

- 3️⃣ Redirect Errors to a File (Overwrite)
```bash
grep "tree" /etc/tree.txt 2> error_log.txt
```

- 4️⃣ Append Errors to a File
```bash
grep "tree" /etc/tree.txt 2>> error_log.txt
```

- 5️⃣ Redirect Both Standard Output and Errors to the Same File
```bash
grep "tree" /etc/tree.txt > output.txt 2>&1
```

- 6️⃣ Append Both Standard Output and Errors to the Same File
```bash
grep "tree" /etc/tree.txt >> output.txt 2>&1
```

- 7️⃣ Suppress Errors and Redirect Output to a File
```bash
grep "tree" /etc/tree.txt > output.txt 2>/dev/null
```

- 8️⃣ Redirect Both Output and Errors to `null` (Suppress All Output)
```bash
grep "tree" /etc/tree.txt > /dev/null 2>&1
```

- 9️⃣ Redirect Both Errors and Output to a Separate File (If You Need Both)
```bash
grep "tree" /etc/tree.txt 1> output.txt 2> error_log.txt
```

- 🔟 Redirect Only Errors to `null` (Suppress Errors)
```bash
grep "tree" /etc/tree.txt 2>/dev/null
```





## ✂️ `cut` Commands Cheat Sheet

- 1️⃣ Cut by delimiter: Extract the first column from a comma-separated file
```bash
cut -d ',' -f 1 /path/to/file.csv
```

- 2️⃣ Cut by delimiter and show multiple columns: Extract the first and second columns
```bash
cut -d ',' -f 1,2 /path/to/file.csv
```

- 3️⃣ Cut by character position: Extract the first 5 characters from each line
```bash
cut -c 1-5 /path/to/file.txt
```

- 4️⃣ Cut by byte position: Extract the first 5 bytes from each line
```bash
cut -b 1-5 /path/to/file.txt
```

- 5️⃣ Remove the first column: Skip the first column and print the rest (tab-delimited)
```bash
cut -f 2- /path/to/file.txt
```

- 6️⃣ Show specific columns by field delimiter: Extract the third and fourth columns from a pipe-separated file
```bash
cut -d '|' -f 3,4 /path/to/file.txt
```

- 7️⃣ Cut with a specific field delimiter and show the 2nd to 4th columns
```bash
cut -d ':' -f 2-4 /etc/passwd
```

- 8️⃣ Cut by character positions for the first 3 characters
```bash
cut -c 1-3 /path/to/file.txt
```

- 9️⃣ Cut by delimiter and show the last field (if no delimiter specified, the whole line is considered one field)
```bash
cut -d ':' -f 7 /etc/passwd
```

- 🔟 Cut with input from a pipeline: Extract the second column from the output of the ps command
```bash
ps aux | cut -d ' ' -f 2
```

- 1️⃣1️⃣ Cut by character range and input from pipeline: Extract the first 10 characters of each line in a file
```bash
cat /path/to/file.txt | cut -c 1-10
```

- 1️⃣2️⃣ Remove the last column: Use cut to skip the last column of a tab-separated file
```bash
cut -f 1- --complement /path/to/file.txt
```

## 📝 `sed` Commands Cheat Sheet

- 1️⃣ Basic Substitution: Replace "old" with "new" in a file
```bash
sed 's/old/new/' /path/to/file.txt
```

- 2️⃣ Global Substitution: Replace all occurrences of "old" with "new" in a file
```bash
sed 's/old/new/g' /path/to/file.txt
```

- 3️⃣ In-place Substitution: Replace "old" with "new" directly in the file (without creating a backup)
```bash
sed -i 's/old/new/g' /path/to/file.txt
```

- 4️⃣ Substitution with Backup: Replace "old" with "new" and create a backup of the original file
```bash
sed -i.bak 's/old/new/g' /path/to/file.txt
```

- 5️⃣ Delete Lines: Delete lines that match a pattern
```bash
sed '/pattern/d' /path/to/file.txt
```

- 6️⃣ Print Lines: Print only the lines that match a pattern
```bash
sed -n '/pattern/p' /path/to/file.txt
```

- 7️⃣ Replace Only on a Specific Line: Replace "old" with "new" only on line 3
```bash
sed '3s/old/new/' /path/to/file.txt
```

- 8️⃣ Delete a Range of Lines: Delete lines 3 to 5 from a file
```bash
sed '3,5d' /path/to/file.txt
```

- 9️⃣ Replace Multiple Lines: Replace lines from 3 to 5 with a new string
```bash
sed '3,5c\New content' /path/to/file.txt
```

- 🔟 Insert Text Before a Line: Insert "new line" before line 2
```bash
sed '2i\new line' /path/to/file.txt
```

- 1️⃣1️⃣ Append Text After a Line: Append "new line" after line 2
```bash
sed '2a\new line' /path/to/file.txt
```

## 🔍 `find` Commands Cheat Sheet

- 1️⃣ Basic Search: Find all files with the `.txt` extension in the current directory
```bash
find . -name "*.txt"
```

- 2️⃣ Search in a Specific Directory: Find all `.log` files in the `/var/log` directory
```bash
find /var/log -name "*.log"
```

- 3️⃣ Search for Files Modified in the Last N Days: Find files modified in the last 7 days
```bash
find . -type f -mtime -7
```

- 4️⃣ Search for Files Larger than N Bytes: Find files larger than 100MB
```bash
find . -type f -size +100M
```

- 5️⃣ Search for Empty Files: Find all empty files
```bash
find . -type f -empty
```

- 6️⃣ Find Files by Permissions: Find all files with 777 permissions
```bash
find . -type f -perm 0777
```

- 7️⃣ Find Files Owned by a Specific User: Find all files owned by user "john"
```bash
find . -type f -user john
```

- 8️⃣ Execute a Command on Found Files: Find all `.log` files and delete them
```bash
find . -name "*.log" -exec rm -f {} \;
```

- 9️⃣ Search for Directories Only: Find all directories in the current directory
```bash
find . -type d
```

- 🔟 Search for Files Modified in the Last N Minutes: Find files modified in the last 30 minutes
```bash
find . -type f -mmin -30
```

- 1️⃣1️⃣ Search for Files by Group: Find all files that belong to group "staff"
```bash
find . -type f -group staff
```

- 1️⃣2️⃣ Find Files by Name with Case Insensitivity: Find `.jpg` files, case-insensitive
```bash
find . -iname "*.jpg"
```

- 1️⃣3️⃣ Limit Search Depth: Find files only in the top level of directories (depth 1)
```bash
find . -maxdepth 1 -type f
```

- 1️⃣4️⃣ Search for Files Modified After a Specific Date: Find files modified after January 1, 2020
```bash
find . -type f -newermt "2020-01-01"
```
## 🦄 `uniq` Commands Cheat Sheet

- 1️⃣ Remove Duplicate Lines: Remove consecutive duplicate lines in a file
```bash
uniq /path/to/file.txt
```

- 2️⃣ Count Occurrences: Show the number of occurrences of each line in the file
```bash
uniq -c /path/to/file.txt
```

- 3️⃣ Display Only Duplicates: Show only the lines that are repeated (duplicates)
```bash
uniq -d /path/to/file.txt
```

- 4️⃣ Display Lines that Are Not Duplicated: Show lines that are not repeated in the file
```bash
uniq -u /path/to/file.txt
```

- 5️⃣ Skip N Fields: Skip the first field when checking for duplicates (useful for space-separated fields)
```bash
uniq -f 1 /path/to/file.txt
```

- 6️⃣ Ignore Case When Comparing: Remove duplicates, ignoring case
```bash
uniq -i /path/to/file.txt
```

- 7️⃣ Compare N Characters: Compare the first N characters of each line for duplicates
```bash
uniq -w 5 /path/to/file.txt
```

- 8️⃣ Use a Separator: Use a custom separator when displaying duplicates
```bash
uniq -s 2 /path/to/file.txt
```

- 9️⃣ Redirect Output to a New File: Remove duplicates and store the result in a new file
```bash
uniq /path/to/file.txt > /path/to/output.txt
```

- 🔟 Count Duplicates in Input: Pipe input to `uniq` and count occurrences
```bash
echo -e "apple\napple\nbanana" | uniq -c
```

- 1️⃣1️⃣ Remove Duplicates from Sorted Data: Sort data and then remove duplicates
```bash
sort /path/to/file.txt | uniq
```

- 1️⃣2️⃣ Use with Pipe: Count unique words in the output of a `cat` command
```bash
cat /path/to/file.txt | sort | uniq -c
```










































































































































