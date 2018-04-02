# gitbook-plugin-ppmessage

Apply PPMESSAGE in GitBook.

Readers chat with you online.

让读者可以与您在线联系。


## Installation (安装)

### Add gitbooks plugin (添加 Gitbook 插件)

Edit book.json, add ppmessage into plugins

来到正在创作的书的目录，例子请参考 (PPMESSAGE 中文手册)[https://github.com/PPMESSAGE/chinese-manual]，下面有个 book.json，打开这个文件，在 plugins 中添加 ppmessage。 

```
"plugins": ['ppmessage']

```

### Config (插件的配置)

Edit book.json

继续编辑 book.json ，这里面的 pluginsConfig 中添加如下所示:

```
"pluginsConfig": {
  "ppmessage": {
    "app_uuid": "a600998e-efff-11e5-9d9f-02287b8c0ebf",
    "ppmessage_url": "https://ppmessage.cn/ppcom/assets/pp-library.min.js"
  }
}
```

app_uuid is your team uuid, after signup into PPMESSAGE, you will get one.

ppmessage_url is ppmessage library url, if you signup into https://ppmessage.cn, it is 'https://ppmessage.cn/ppcom/assets/pp-library.min.js', else signup into https://ppmessage.com, it is 'https://ppmessage.com/ppcom/assets/pp-library.min.js'.


其中 app uuid 是你的团队 uuid，这个uuid在你注册 PPMESSAGE 账号后，就会分配你一个。

ppmessage url 是指ppmessage 库的地址，因为 PPMESSAGE 提供了两个服务，全球和中国服务，对于全球用 ppmessage.com，对于中国用 ppmessage.cn，原因你懂的。

### Command (执行命令)

```
gitbook install
gitbook serve

```

这是安装插件，执行gitbook服务的命令，这都是 gitbook 基本的命令。install 能够把 ppmessage 插件下载安装到本地。serve 能够启动一个 web server，监听在4000 端口，可以打开浏览器马上进行浏览，如果你要是更改了书籍内容，它还会在线刷新。



