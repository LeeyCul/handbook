---
title: linux 常用指令
date: 2024/06/21
---

## 1、远程连接

```
ssh root@<ip>
```

## 2、远程连接

- `touch a.txt` --新建文件
- `mkdir <name>` --新建文件夹
- `pwd` --显示路径

## 3、上传文件

scp 用于 Linux 之间复制文件和目录

- `1.基本语法`
  scp [options] source_file destination_file

  source_file 表示原始文件的路径，可以是本地文件或远程文件；destination_file 表示目标文件的路径，可以是本地文件或远程文件.

```
1.地文件复制到远程服务器
  scp local_file user@remote_host:remote_folder
  例如，将本地文件/home/user/test.txt复制到远程服务器192.168.1.100的/home/user目录下，可以使用以下命令：
  scp /home/user/test.txt user@192.168.1.100:/home/user/
2. 从远程服务器复制文件
  例如，将远程服务器192.168.1.100的/home/user/test.txt文件复制到本地系统的/home/user目录下，可以使用以下命令：
  scp user@192.168.1.100:/home/user/test.txt /home/user/
3.复制整个目录
  scp -r /home/user/test user@192.168.1.100:/home/user/
4.显示进度条
  SCP命令默认不显示传输进度，但是可以使用-v选项显示详细输出，包括传输进度。例如，将本地文件复制到远程服务器并显示传输进度，可以使用以下命令：
  scp -v /home/user/test.txt user@192.168.1.100:/home/user/
5. 使用通配符
  SCP命令还支持使用通配符进行复制。例如，将本地目录下所有以.test结尾的文件复制到远程服务器的/home/user目录下，可以使用以下命令：
  scp /home/user/*.test user@192.168.1.100:/home/user/
```

```
sh脚本——upload.sh——【sh upload.sh】
#!/bin/bash

# 本地dist文件路径
LOCAL_DIST="dist"

# 远程服务器信息
REMOTE_USER="root"
REMOTE_HOST="10.255.23.xx"
REMOTE_PASSWORD="P@ssw0rd2022"
REMOTE_PATH="/data/html/xxx"

# 获取当前时间
START_TIME=$(date +"%Y-%m-%d %H:%M:%S")

# 使用SCP命令上传本地dist文件到远程服务器
scp -r "$LOCAL_DIST"/* "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH"

# 检查SCP命令的退出状态码，如果为0则表示上传成功
if [ $? -eq 0 ]; then
  # 获取上传完成时间
  END_TIME=$(date +"%Y-%m-%d %H:%M:%S")
  echo "文件上传成功"
  echo "开始时间: $START_TIME"
  echo "结束时间: $END_TIME"
else
  echo "文件上传失败"
fi

```
