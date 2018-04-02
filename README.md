# gitbook-plugin-ppmessage

Apply PPMESSAGE in GitBook.

Readers can chat with you online.

如果你使用 Gitbook 创作，那么 PPMESSAGE 插件可以让读者可以与您在线取得联系。


## Installation (安装)


### Install Gitbook (安装 Gitbook) 

```
npm install gitbook-cli -g
```

> Install gitbook command lines.

> 这里假设你还没有安装 Gitbook，这个命令能够让你在命令行下安装 Gitbook 所需的基本命令。如果 gitbook install，gitbook serve，gitbook build 等等。


### Add gitbooks plugin (添加 Gitbook 插件)

Edit book.json, add ppmessage into plugins

来到正在创作的书的目录，例子请参考 (PPMESSAGE 中文手册)[https://github.com/PPMESSAGE/chinese-manual]，下面有个 book.json，打开这个文件，在 plugins 中添加 ppmessage。 

```
{
  "plugins": ['ppmessage']
}

```

### Config (插件的配置)

Edit book.json

继续编辑 book.json ，这里面的 pluginsConfig 中添加如下所示:

```
{

  "pluginsConfig": {
    "ppmessage": {
      "app_uuid": "a600998e-efff-11e5-9d9f-02287b8c0ebf",
      "ppmessage_url": "https://ppmessage.cn/ppcom/assets/pp-library.min.js"
    }
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

> gitbook build 能够把你的 markdown 文件转成 html 放到 _book 目录下面；git serve 的命令会自动执行 build。如果你想得到 pdf 文件，你需要安装 calibre，因为 Gitbook 用了它里面的 convert 的命令，安装 calibre，可以用 brew 去安装或者直接下载 （这里面假设你用 macOS 了，非常抱歉，别的也没试过），然后你就可以用 gitbook pdf 去生成 pdf 文件。

这是安装插件，执行gitbook服务的命令，这都是 gitbook 基本的命令。install 能够把 ppmessage 插件下载安装到本地。serve 能够启动一个 web server，监听在4000 端口，可以打开浏览器马上进行浏览，如果你要是更改了书籍内容，它还会在线刷新。



