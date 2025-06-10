import{_ as e,o as i,c as n,e as s}from"./app-4b62f06d.js";const d={},l=s(`<h2 id="_1、远程连接" tabindex="-1"><a class="header-anchor" href="#_1、远程连接" aria-hidden="true">#</a> 1、远程连接</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh root@&lt;ip&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2、远程连接" tabindex="-1"><a class="header-anchor" href="#_2、远程连接" aria-hidden="true">#</a> 2、远程连接</h2><ul><li><code>touch a.txt</code> --新建文件</li><li><code>mkdir &lt;name&gt;</code> --新建文件夹</li><li><code>pwd</code> --显示路径</li></ul><h2 id="_3、上传文件" tabindex="-1"><a class="header-anchor" href="#_3、上传文件" aria-hidden="true">#</a> 3、上传文件</h2><p>scp 用于 Linux 之间复制文件和目录</p><ul><li><p><code>1.基本语法</code> scp [options] source_file destination_file</p><p>source_file 表示原始文件的路径，可以是本地文件或远程文件；destination_file 表示目标文件的路径，可以是本地文件或远程文件.</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.地文件复制到远程服务器
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh脚本——upload.sh——【sh upload.sh】
#!/bin/bash

# 本地dist文件路径
LOCAL_DIST=&quot;dist&quot;

# 远程服务器信息
REMOTE_USER=&quot;root&quot;
REMOTE_HOST=&quot;10.255.23.xx&quot;
REMOTE_PASSWORD=&quot;P@ssw0rd2022&quot;
REMOTE_PATH=&quot;/data/html/xxx&quot;

# 获取当前时间
START_TIME=$(date +&quot;%Y-%m-%d %H:%M:%S&quot;)

# 使用SCP命令上传本地dist文件到远程服务器
scp -r &quot;$LOCAL_DIST&quot;/* &quot;$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH&quot;

# 检查SCP命令的退出状态码，如果为0则表示上传成功
if [ $? -eq 0 ]; then
  # 获取上传完成时间
  END_TIME=$(date +&quot;%Y-%m-%d %H:%M:%S&quot;)
  echo &quot;文件上传成功&quot;
  echo &quot;开始时间: $START_TIME&quot;
  echo &quot;结束时间: $END_TIME&quot;
else
  echo &quot;文件上传失败&quot;
fi

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[l];function u(r,a){return i(),n("div",null,t)}const v=e(d,[["render",u],["__file","linunx-order.html.vue"]]);export{v as default};
