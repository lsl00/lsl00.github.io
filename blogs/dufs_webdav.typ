#import "common.typ" : *
#show : configPage
#show link : underline
== Background

最近开始使用#link("https://obsidian.md")[Obsidian]来记笔记，该软件有手机端和电脑端，为了能够把写的笔记在多端进行方便的同步，可以使用第三方插件#link("https://github.com/sboesen/remotely-sync")[Remotely Sync]。只要有一个WebDav服务器就可以方便的进行多端同步。

如果在国外，可以方便的使用DropBox之类的网盘来使用WebDav功能，国内的话，据我所知只有坚果云的WebDav支持比较好，但有流量限制，阿里云盘的WebDav要额外收费，比较坑。

如果有一台可以公网访问的服务器，可以方便的自己搭建一个WebDav。最简单的办法就是使用#link("https://github.com/sigoden/dufs")[dufs]，这是使用Rust写的一个能默认支持WebDav的http(s)服务器，可以去github仓库的#link("https://github.com/sigoden/dufs/releases")[Release]里下载或者如果安装过Rust工具链的话，在服务器上直接
```shell-unix-generic
cargo install dufs
```
然后可以
```shell-unix-generic
mv ~/.cargo/bin/dufs /usr/bin
```
创建一个文件夹`mkdir /dav`后进入`cd /dav`，运行
```shell-unix-generic
dufs -p [port] -A -a [username]:[password]@/:rw >/dev/null 2>/dev/null &
disown
```
就可以在后台运行webdav服务器，根据服务器的ip(如果需要不经过nginx等代理服务器还需要加上`-b 0.0.0.0`参数)和上面选定的端口，就可以愉快的使用WebDav进行同步了。

=== 设置开机启动
最简单的办法运行
```shell-unix-generic
crontab -e
```
在弹出的文本编辑器中添加一行
```
@reboot /usr/bin/dufs /dav -p [port] -A -a [username]:[password]@/:rw >/dev/null 2>/dev/null &
```
即可。

=== 设置HTTPS

需要一个域名，将域名解析到服务器IP后，最简单的办法是使用nginx + certbot。

在Ubuntu上安装nginx和certbox:
```shell-unix-generic
sudo apt install nginx certbot python3-certbot-nginx
```

编辑nginx配置文件：在http里添加
```conf
 server {
  listen 80;
  server_name your_domain_name;
  location / {
    proxy_pass http://localhost:[port];
  }
 }
```
其中`your_domain_name`是你的域名，形如`dav.example.com`，`[port]`是dufs运行的端口。然后运行
```shell-unix-generic
certbot --nginx
```
按照提示就可以搞定tsl证书，之后使用webdav就可以使用`https://dav.example.com`来指向该WevDav服务了。