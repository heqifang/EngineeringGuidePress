# 01 | vscode配置使用教程

工欲善其事，必先利其器。想要优雅且高效的编写代码，必须熟练使用一款前端开发工具。但前端开发工具数不胜数，像HBuilder、Sublime Text、WebStorm、Visual Studio Code......等等,其中VSCode以其轻量且强大的代码编辑功能和丰富的插件生态系统，独受前端工师的青睐。网上有很多vscode的配置以及使用博客，但都没有本篇那么详细且全面。

## 软件下载

直接在官网进行下载

[Visual Studio Code - Code Editing. Redefined​code.visualstudio.com/![](https://pic4.zhimg.com/v2-beaba009c542a9f6fe1d2034a7ed568b_180x120.jpg)](https://link.zhihu.com/?target=https%3A//code.visualstudio.com/)

最近很多人留言说官网下载被限速，如果大家存在这种情况，可以在“前端码头”后台发送vscode获取软件包。

首页

![](https://pic1.zhimg.com/v2-0f049e5f50eb1175eea793f15fa95b08_b.jpg)

![](https://pic1.zhimg.com/80/v2-0f049e5f50eb1175eea793f15fa95b08_1440w.jpg)

## vscode设置成中文

vscode默认的语言是英文，对于英文不好的小伙伴可能不太友好。简单几步教大家如何将vscode设置成中文。

1.  按快捷键“Ctrl+Shift+P”。
2.  在“vscode”顶部会出现一个搜索框。
3.  输入“configure language”，然后回车。
4.  “vscode”里面就会打开一个语言配置文件。
5.  将“en-us”修改成“zh-cn”。
6.  按“Ctrl+S”保存设置。
7.  关闭“vscode”，再次打开就可以看到中文界面了。

当然如果你不愿意设置，也可以直接安装它的中文插件，还是很人性化的。

![](https://pic4.zhimg.com/v2-ddbfa1f88bf57ffe6a2cee34a973243f_b.jpg)

![](https://pic4.zhimg.com/80/v2-ddbfa1f88bf57ffe6a2cee34a973243f_1440w.jpg)

## VScode用户设置

1\. 打开设置

文件--首选项--设置，打开用户设置。VScode支持选择配置，也支持编辑setting.json文件修改默认配置。个人更倾向于编写json的方式进行配置，下面会附上我个人的配置代码

这里解析几个常用配置项：

（1）editor.fontsize用来设置字体大小，可以设置editor.fontsize : 14;

（2）files.autoSave这个属性是表示文件是否进行自动保存，推荐设置为onFocusChange——文件焦点变化时自动保存。

（3）editor.tabCompletion用来在出现推荐值时，按下Tab键是否自动填入最佳推荐值，推荐设置为on;

（4）editor.codeActionsOnSave中的source.organizeImports属性，这个属性能够在保存时，自动调整 import 语句相关顺序，能够让你的 import 语句按照字母顺序进行排列，推荐设置为true,即"editor.codeActionsOnSave": { "source.organizeImports": true }；

（5）editor.lineNumbers设置代码行号,即editor.lineNumbers ：true；

我的个人配置，供参考：

```json
{
  "files.associations": {
  "*.vue": "vue",
  "*.wpy": "vue",
  "*.wxml": "html",
  "*.wxss": "css"
  },
  "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "emmet.triggerExpansionOnTab": true,
  "emmet.showAbbreviationSuggestions": true,
  "emmet.showExpandedAbbreviation": "always",
  "emmet.includeLanguages": {
  "vue-html": "html",
  "vue": "html",
  "wpy": "html"
  },
  //主题颜色
  //"workbench.colorTheme": "Monokai",
  "git.confirmSync": false,
  "explorer.confirmDelete": false,
  "editor.fontSize": 14,
  "window.zoomLevel": 1,
  "editor.wordWrap": "on",
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  //失去焦点后自动保存
  "files.autoSave": "onFocusChange",
  // #值设置为true时，每次保存的时候自动格式化；
  "editor.formatOnSave": false,
   //每120行就显示一条线
  "editor.rulers": [
  ],
  // 在使用搜索功能时，将这些文件夹/文件排除在外
  "search.exclude": {
      "**/node_modules": true,
      "**/bower_components": true,
      "**/target": true,
      "**/logs": true,
  },
  // 这些文件将不会显示在工作空间中
  "files.exclude": {
      "**/.git": true,
      "**/.svn": true,
      "**/.hg": true,
      "**/CVS": true,
      "**/.DS_Store": true,
      "**/*.js": {
          "when": "$(basename).ts" //ts编译后生成的js文件将不会显示在工作空中
      },
      "**/node_modules": true
  },
  // #让vue中的js按"prettier"格式进行格式化
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatterOptions": {
      "js-beautify-html": {
          // #vue组件中html代码格式化样式
          "wrap_attributes": "force-aligned", //也可以设置为“auto”，效果会不一样
          "wrap_line_length": 200,
          "end_with_newline": false,
          "semi": false,
          "singleQuote": true
      },
      "prettier": {
          "semi": false,
          "singleQuote": true
      }
  }
}
```

**最近经常有人微信问我，这个配置代码写在哪里？**

新版的vscode设置默认为UI的设置，而非之前的json设置。如果你想复制我上面这段代码进行配置，可以进行下面的修改

文件>首选项>设置 > 搜索workbench.settings.editor，选中json即可改成json设置；

**禁用自动更新**

文件 > 首选项 > 设置（macOS：代码 > 首选项 > 设置，搜索update mode并将设置更改为none。

**开启代码提示设置**

第一步：点击左下角点击设置图标，找到并点击“setting”

![](https://pic3.zhimg.com/v2-ee37d59c1d7c4da0725fefb38b58abde_b.jpg)

![](https://pic3.zhimg.com/80/v2-ee37d59c1d7c4da0725fefb38b58abde_1440w.jpg)

第二步：到搜索框里搜索“prevent”--->并取消此项的勾选

![](https://pic3.zhimg.com/v2-a9f44938ee7d576eac69b3ada0c4a94e_b.jpg)

![](https://pic3.zhimg.com/80/v2-a9f44938ee7d576eac69b3ada0c4a94e_1440w.jpg)

## 常用的快捷键

高效的使用vscode,记住一些常用的快捷键是必不可少的，我给大家罗列了一些日常工作过程中用的多的快捷键。

以下以Windows为主，windows的 Ctrl，mac下换成Command就行了

对于 **行** 的操作：

+   重开一行：光标在行尾的话，回车即可；不在行尾，ctrl `+ enter` 向下重开一行；ctrl+`shift + enter` 则是在上一行重开一行
+   删除一行：光标没有选择内容时，ctrl `+ x` 剪切一行；ctrl +`shift + k` 直接删除一行
+   移动一行：`alt + ↑` 向上移动一行；`alt + ↓` 向下移动一行
+   复制一行：`shift + alt + ↓` 向下复制一行；`shift + alt + ↑` 向上复制一行
+   ctrl + z 回退

对于 **词** 的操作：

+   选中一个词：ctrl `+ d`

搜索或者替换：

+   ctrl `+ f` ：搜索
+   ctrl `+ alt + f`： 替换
+   ctrl `+ shift + f`：在项目内搜索

通过**Ctrl + \`** 可以打开或关闭终端

Ctrl+P 快速打开最近打开的文件

Ctrl+Shift+N 打开新的编辑器窗口

Ctrl+Shift+W 关闭编辑器

Home 光标跳转到行头

End 光标跳转到行尾

Ctrl + Home 跳转到页头

Ctrl + End 跳转到页尾

Ctrl + Shift + \[ 折叠区域代码

Ctrl + Shift + \] 展开区域代码

Ctrl + / 添加关闭行注释

Shift + Alt +A 块区域注释

## 插件安装

在输入框中输入想要安装的插件名称，点击安装即可。安装后没有效果，可以重启vscode

![](https://pic1.zhimg.com/v2-4e57c8d10598038ba80642446e7ea698_b.jpg)

![](https://pic1.zhimg.com/80/v2-4e57c8d10598038ba80642446e7ea698_1440w.jpg)

## **必备插件**

### **1、open in browser**

在浏览器里预览网页必备。运行html文件

![](https://pic1.zhimg.com/v2-c127f198fb5b22461b630052926e115c_b.jpg)

![](https://pic1.zhimg.com/80/v2-c127f198fb5b22461b630052926e115c_1440w.jpg)

View In Browser 已被弃用，可以使用open in browser 直接运行html文件

### 2、vscode-icons

改变编辑器里面的文件图标

![](https://pic3.zhimg.com/v2-3953c19ca75f422a8749071a16bf4046_b.jpg)

![](https://pic3.zhimg.com/80/v2-3953c19ca75f422a8749071a16bf4046_1440w.jpg)

### 3、Auto Rename Tag

自动修改匹配的 HTML 标签。

![](https://pic1.zhimg.com/v2-304d2802620974eeb369a6302f50cfc0_b.gif)

![动图封面](https://pic1.zhimg.com/v2-304d2802620974eeb369a6302f50cfc0_b.jpg)

### 4、Path Intellisense

**智能路径提示**，可以在你输入文件路径时智能提示。

![](https://pic1.zhimg.com/v2-304d2802620974eeb369a6302f50cfc0_b.gif)

![动图封面](https://pic1.zhimg.com/v2-304d2802620974eeb369a6302f50cfc0_b.jpg)

### 5、Markdown Preview

实时预览 markdown。

![](https://pic2.zhimg.com/v2-276c5382bf520ed8ab6425b241a5c591_b.jpg)

![](https://pic2.zhimg.com/80/v2-276c5382bf520ed8ab6425b241a5c591_1440w.jpg)

### 6、stylelint

CSS / SCSS / Less 语法检查

### 7、Import Cost

引入包大小计算,对于项目打包后体积掌握很有帮助

![](https://pic3.zhimg.com/v2-2db7c8e03f575e26584b54a5c2ccace6_b.gif)

![动图封面](https://pic3.zhimg.com/v2-2db7c8e03f575e26584b54a5c2ccace6_b.jpg)

### 8、Prettier

比Beautify更好用的代码格式化插件

可以配置.prettierc.js文件,配合eslint、git hooks 一起使用，提升项目代码的规范性

```text
module.exports = {
    // 一行最多 100 字符
    printWidth: 100,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 使用 4 个空格缩进
    tabWidth: 4,
    tabSize: 4,
    // 行尾需要有分号
    semi: true,
    // 使用单引号
    singleQuote: true,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: false,
    // 末尾不需要逗号 'es5'  none
    trailingComma: 'es5',
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数，只有一个参数的时候，也需要括号
    arrowParens: 'always',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用 lf 结尾是 \n \r \n\r auto
    endOfLine: 'lf',
};
```

## 9、code runner

直接运行.js等文件，在控制台输出结果

![](https://pic2.zhimg.com/v2-2e6dd6adcea4f2615d23f4b7e8a92f4d_b.jpg)

![](https://pic2.zhimg.com/80/v2-2e6dd6adcea4f2615d23f4b7e8a92f4d_1440w.jpg)

点击右上角的运行按钮

![](https://pic1.zhimg.com/v2-56dc3c58c00122b153f89287105e7258_b.jpg)

![](https://pic1.zhimg.com/80/v2-56dc3c58c00122b153f89287105e7258_1440w.jpg)

## Vue插件

### vetur

语法高亮、智能感知、Emmet等

![](https://pic3.zhimg.com/v2-8abdcb8f10bcd6009ffcad29ebdfe576_b.jpg)

![](https://pic3.zhimg.com/80/v2-8abdcb8f10bcd6009ffcad29ebdfe576_1440w.jpg)

### VueHelper

snippet代码片段

![](https://pic2.zhimg.com/v2-e7396a249f4ad2b6c68e94a37cb49ff5_b.gif)

![动图封面](https://pic2.zhimg.com/v2-e7396a249f4ad2b6c68e94a37cb49ff5_b.jpg)

### volar

开发vue2的时候使用vetur 帮我们提供良好的代码智能提示，但使用vue3的时候 vetur 并不能给我们提供良好的代码提示，所以volar顺应而生。与vetur相同，volar是一个针对vue的vscode插件，不过与vetur不同的是，volar提供了更为强大的功能（使用的时候需要把vetur 设置为禁用状态，或者直接卸载）

![](https://pic1.zhimg.com/v2-9ff05d1a9efe143dba1b94750977a494_b.jpg)

![](https://pic1.zhimg.com/80/v2-9ff05d1a9efe143dba1b94750977a494_1440w.jpg)

还可以配合TypeScript Vue Plugin (Volar)一起使用

![](https://pic2.zhimg.com/v2-3d0b704e2fdd906b4173cfc0f3a2d7cd_b.jpg)

![](https://pic2.zhimg.com/80/v2-3d0b704e2fdd906b4173cfc0f3a2d7cd_1440w.jpg)

提供了编辑器快捷分割和vite预览功能

点击右上方三角代码将切成两块script style是一块template是一块

![](https://pic4.zhimg.com/v2-727635731b21c50d60694bfcee2c9abb_b.jpg)

![](https://pic4.zhimg.com/80/v2-727635731b21c50d60694bfcee2c9abb_1440w.jpg)

点击vite 图标还支持快速预览功能

![](https://pic4.zhimg.com/v2-82d68c6406c411d7cc60442307e9f62b_b.jpg)

![](https://pic4.zhimg.com/80/v2-82d68c6406c411d7cc60442307e9f62b_1440w.jpg)

## 其它插件

**1、CSScomb**

CSS 书写顺序规则，这里我推荐腾讯 AollyTeam 团队的规范：

[http://alloyteam.github.io/CodeGuide/#css-declaration-order​alloyteam.github.io/CodeGuide/#css-declaration-order](https://link.zhihu.com/?target=http%3A//alloyteam.github.io/CodeGuide/%23css-declaration-order)

简单说下这个插件怎么用：

在项目的根目录下创建一个名为csscomb.json的文件，然后添加一些配置项。也可以将配置项写入项目的 package.json 文件中的 csscombConfig 字段。

至于添加的配置项，CSScomb 提供了示例配置文件：

[https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json​github.com/csscomb/csscomb.js/blob/master/config/csscomb.json](https://link.zhihu.com/?target=https%3A//github.com/csscomb/csscomb.js/blob/master/config/csscomb.json)

其中的 sort-order 就是 CSS 属性书写顺序，可以按照自己遵循的规范设置，所以我直接替换成了腾讯的。

这个配置文件里面各个字段的作用可以戳这里查看：

[csscomb/csscomb.js​github.com/csscomb/csscomb.js/blob/master/doc/options.md](https://link.zhihu.com/?target=https%3A//github.com/csscomb/csscomb.js/blob/master/doc/options.md)

**2、Turbo Console Log**

快捷添加 console.log，一键 注释 / 启用 / 删除 所有 console.log。这也是我最常用的一个插件

![](https://pic4.zhimg.com/v2-b14aec7821adc57a3f41ac746a5689a7_b.gif)

![动图封面](https://pic4.zhimg.com/v2-b14aec7821adc57a3f41ac746a5689a7_b.jpg)

简单说下这个插件要用到的快捷键:

```text
ctrl + alt + l 选中变量之后，使用这个快捷键生成 console.log
alt + shift + c 注释所有 console.log
alt + shift + u 启用所有 console.log
alt + shift + d 删除所有 console.log
```

**3、GitLens**

详细的 Git 提交日志。

Git 重度使用者必备，尤其是多人协作时：哪一行代码，何时、何人提交都有记录。

妈妈再也不用担心我背锅了！

![](https://pic3.zhimg.com/v2-5e020466c135639aa33ba9a26e8ed2fa_b.png)

![](https://pic3.zhimg.com/80/v2-5e020466c135639aa33ba9a26e8ed2fa_1440w.png)

### 4、css-auto-prefix

**自动添加 CSS 私有前缀**。

![](https://pic1.zhimg.com/v2-01d42a4fb0039acb17ff5a7b708d1030_b.gif)

![动图封面](https://pic1.zhimg.com/v2-01d42a4fb0039acb17ff5a7b708d1030_b.jpg)

### 5、change-case

**转换命名风格**。

![](https://pic3.zhimg.com/v2-1085adfd3dc66da8ed6b40c5961a786e_b.gif)

![动图封面](https://pic3.zhimg.com/v2-1085adfd3dc66da8ed6b40c5961a786e_b.jpg)

**6、CSS Peek**

**定位 CSS 类名**。

![](https://pic2.zhimg.com/v2-247271ae745aaffee6497624e335b7b9_b.gif)

![动图封面](https://pic2.zhimg.com/v2-247271ae745aaffee6497624e335b7b9_b.jpg)

**7、vscode-json**

处理 JSON 文件，用法看图：

![](https://pic2.zhimg.com/v2-5a6867c294dafe411cc58a43de69875d_b.gif)

![动图封面](https://pic2.zhimg.com/v2-5a6867c294dafe411cc58a43de69875d_b.jpg)

### 8、Regex Previewer

**实时预览正则表达式的效果**。

![](https://pic3.zhimg.com/v2-ff1f00be77163d4e24b146211c618212_b.gif)

![动图封面](https://pic3.zhimg.com/v2-ff1f00be77163d4e24b146211c618212_b.jpg)

### 9、韭菜盒子

大家如果平时也买买基金和股票，上班又不好一直看手机，推荐安装个韭菜盒子，一边写代码一边看股票

![](https://pic2.zhimg.com/v2-94690a9baf1ea7cd53be05056296d95d_b.jpg)

安装之后，你的vscode左侧会多出一个图标，点击它添加自己关注的基金和股票

![](https://pic2.zhimg.com/v2-84c89d40b1dc4bb225e92f3154eb4055_b.jpg)


## 设置同步

花了一天终于把vscode配置成自己满意的样子，如果每换一次电脑就要重新来一次，大家一定会手撕了我。放心，早就帮大家准备好了。Settings Sync，在不同电脑间同步你的插件。

首先要想在不同的设备间同步你的插件, 需要用到 Token 和Gist id

Token 就是你把插件上传到 github 上时, 让你保存的那段字符，Gist id 在你上传插件的那台电脑上保存着。

先给大家来三个快捷键，后面会用到

```text
1、CTRL+SHIFT+P 我也不知道叫什么，暂且就叫它功能搜索功能吧
2、ALT+SHIFT+D 下载配置
3、ALT+SHIFT+U 上传配置
```

现在手把手教大家配置：

1、安装Settings Sync
2、登陆Github>settings>Developer settings>personal access tokens>generate new token，输入名称，勾选Gist，提交

![](https://pic3.zhimg.com/v2-9898e9d1d90e227fdb6da88a829b01d2_b.jpg)

3、保存Github Access Token
4、打开vscode，Ctrl+Shift+P打开命令框-->输入sync-->选择高级设置-->编辑本地扩展设置-->编辑token

5、Ctrl+Shift+P打开命令框-->输入sync-->找到update/upload settings，上传成功后会返回Gist ID，保存此Gist ID.

![](https://pic2.zhimg.com/v2-76ae0fd6b07c5c7949fc3a6e02dff2c1_b.gif)

![动图封面](https://pic2.zhimg.com/v2-76ae0fd6b07c5c7949fc3a6e02dff2c1_b.jpg)

6、在 VSCode 里，依次打开: 文件 -> 首选项 -> 设置，然后输入 Sync 进行搜索:能找到你gist id

![](https://pic3.zhimg.com/v2-86515bfd4e5aada27c7f998dcdaf1dfa_b.jpg)

7、若需在其他机器上DownLoad插件的话，同样，Ctrl+Shift+P打开命令框，输入sync，找到Download settings，会跳转到Github的Token编辑界面，点Edit，regenerate token，保存新生成的token，在vscode命令框中输入此Token，回车，再输入之前的Gist ID，即可同步插件和设置

## 开启一个本地服务

**第一种方式**

1.安装Debugger for Chrome插件

![](https://pic1.zhimg.com/v2-80a0108d05009387f257d9b70226c3c4_b.jpg)

2.使用ctrl+\`快捷键打开终端，然后输入npm install -g live-server

3.在命令行里输入 live-server即可

**第二种方式**

在写前端页面中，经常会在浏览器运行HTML页面，从本地文件夹中直接打开的一般都是file协议，当代码中存在http或https的链接时，HTML页面就无法正常打开，为了解决这种情况，需要在在本地开启一个本地的服务器。 本文是利用node.js中的http-server，开启本地服务，步骤如下：

*1.安装http-server*

在终端输入： $ npm install http-server -g

*2.开启 http-server服务*

终端进入目标文件夹，然后在终端输入：

```text
$ http-server -c-1   （⚠️只输入http-server的话，更新了代码后，页面不会同步更新）
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.8.196:8080
Hit CTRL-C to stop the server
```

*3.关闭 http-server服务*

按快捷键CTRL-C 终端显示^Chttp-server stopped.即关闭服务成功。



***
***


# 02 | npm 安装机制及企业级部署私服原理


前端工程化离不开 npm（node package manager） 或者 Yarn 这些管理工具。npm 或 Yarn 在工程项目中，除了负责依赖的安装和维护以外，还能通过 npm scripts 串联起各个职能部分，让独立的环节自动运转起来。

无论是 npm 还是 Yarn，它们的体系都非常庞大，在使用过程中你很可能产生如下疑问：

+   项目依赖出现问题时，删除大法好，即删除 node\_modules 和 lockfiles，再重新 install，这样操作是否存在风险？

+   把所有依赖都安装到 dependencies 中，不区分 devDependencies 会有问题吗？

+   我们的应用依赖了公共库 A 和公共库 B，同时公共库 A 也依赖了公共库 B，那么公共库 B 会被多次安装或重复打包吗？

+   一个项目中，既有人用 npm，也有人用 Yarn，这会引发什么问题？

+   我们是否应该提交 lockfiles 文件到项目仓库呢？


接下来的 01 ~ 03 讲我们就进一步聊一聊这些问题！

### npm 内部机制和核心原理

我们先来看看 npm 的核心目标：

> Bring the best of open source to you, your team and your company.
> 给你和你的团队、你的公司带来最好的开源库和依赖。

通过这句话，我们可以知道 npm 最重要的一环是安装和维护依赖。在平时开发中，“**删除 node\_modules，重新 npm install**”是一个百试不爽的解决 npm 安装类问题的方法。但是其中的作用原理是什么？这样的操作是否规范呢？

这一讲，我们就先从 npm 内部机制出发来剖析此类问题。了解完安装机制和原理，我相信你对于工程中依赖的问题，将有一个更加体系化的认知。

#### npm 的安装机制和背后思想

npm 的安装机制非常值得探究。Ruby 的 Gem、Python 的 pip 都是全局安装，但是 npm 的安装机制秉承了不同的设计哲学。

它会优先安装依赖包到当前项目目录，使得不同应用项目的依赖各成体系，同时还减轻了包作者的 API 兼容性压力，**但这样做的缺陷也很明显**：如果我们的项目 A 和项目 B，都依赖了相同的公共库 C，那么公共库 C 一般都会在项目 A 和项目 B 中，各被安装一次。这就说明，**同一个依赖包可能在我们的电脑上进行多次安装**。

当然，对于一些工具模块比如 supervisor 和 gulp，你仍然可以使用全局安装模式，这样方便注册 path 环境变量，我们可以在任何地方直接使用 supervisor、 gulp 这些命令。（不过，一般还是建议不同项目维护自己局部的 gulp 开发工具以适配不同项目需求。）

下面，言归正传，我们通过流程图来分析 npm install 的安装机制。

![068739612.png](https://s0.lgstatic.com/i/image2/M01/02/A9/Cip5yF_axkqAclTFAAJmlxGYSmI551.png)

npm install 安装流程图

npm install 执行之后，首先，检查并获取 npm 配置，**这里的优先级为：项目级的 .npmrc 文件 > 用户级的 .npmrc 文件> 全局级的 .npmrc 文件 > npm 内置的 .npmrc 文件**。

然后检查项目中是否有 package-lock.json 文件。

如果有，则检查 package-lock.json 和 package.json 中声明的依赖是否一致：

+   一致，直接使用 package-lock.json 中的信息，从缓存或网络资源中加载依赖；

+   不一致，按照 npm 版本进行处理（不同 npm 版本处理会有不同，具体处理方式如图所示）。


如果没有，则根据 package.json 递归构建依赖树。然后按照构建好的依赖树下载完整的依赖资源，在下载时就会检查是否存在相关资源缓存：

+   存在，则将缓存内容解压到 node\_modules 中；

+   否则就先从 npm 远程仓库下载包，校验包的完整性，并添加到缓存，同时解压到 node\_modules。


最后生成 package-lock.json。

构建依赖树时，当前依赖项目不管其是直接依赖还是子依赖的依赖，都应该按照扁平化原则，优先将其放置在 node\_modules 根目录（最新版本 npm 规范）。在这个过程中，遇到相同模块就判断已放置在依赖树中的模块版本是否符合新模块的版本范围，如果符合则跳过；不符合则在当前模块的 node\_modules 下放置该模块（最新版本 npm 规范）。

我给出的流程图中有标注更细节的内容，这里就不再赘述了。**你要格外注意图中标明的 npm 不同版本的不同处理情况，并学会从这种“历史问题”中总结 npm 使用的团队最佳实践：同一个项目团队，应该保证 npm 版本的一致**。

前端工程中，依赖嵌套依赖，一个中型项目中 node\_moduels 安装包可能就已经是海量的了。如果安装包每次都通过网络下载获取，无疑会增加安装时间成本。对于这个问题，**缓存**始终是一个好的解决思路，我们接下来看看 npm 自己的缓存机制。

#### npm 缓存机制

**对于一个依赖包的同一版本进行本地化缓存，是当代依赖包管理工具的一个常见设计**。使用时要先执行以下命令：

复制代码

```auto
npm config get cache
```

得到配置缓存的根目录在 /Users/cehou/.npm（ Mac OS 中，npm 默认的缓存位置） 当中。我们 cd 进入 /Users/cehou/.npm 中可以发现`_cacache`文件。事实上，在 npm v5 版本之后，缓存数据均放在根目录中的`_cacache`文件夹中。

![Drawing 1.png](https://s0.lgstatic.com/i/image/M00/84/9D/CgqCHl_TbUSAZ8CsAAF3O01IL9Q887.png)

（`_cacache`文件）

我们可以使用以下命令清除 /Users/cehou/.npm/\_cacache 中的文件：

复制代码

```auto
 npm cache clean --force
```

> 你可以点击[这里](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)看看其中对应的 npm 源码。

接下来打开`_cacache`文件，看看 npm 缓存了哪些东西，一共有 3 个目录：

+   content-v2

+   index-v5

+   tmp


其中 content-v2 里面基本都是一些二进制文件。为了使这些二进制文件可读，我们把二进制文件的扩展名改为 .tgz，然后进行解压，得到的结果其实就是我们的 npm 包资源。

而 index-v5 文件中，我们采用跟刚刚一样的操作就可以获得一些描述性的文件，事实上这些内容就是 content-v2 里文件的索引。

这些缓存如何被储存并被利用的呢？

这就和 npm install 机制联系在了一起。当 npm install 执行时，通过[pacote](https://www.npmjs.com/package/pacote)把相应的包解压在对应的 node\_modules 下面。npm 在下载依赖时，先下载到缓存当中，再解压到项目 node\_modules 下。pacote 依赖[npm-registry-fetch](https://github.com/npm/npm-registry-fetch#npm-registry-fetch)来下载包，npm-registry-fetch 可以通过设置 cache 属性，在给定的路径下根据[IETF RFC 7234](https://datatracker.ietf.org/doc/rfc7234/)生成缓存数据。

接着，在每次安装资源时，根据 package-lock.json 中存储的 integrity、version、name 信息生成一个唯一的 key，这个 key 能够对应到 index-v5 目录下的缓存记录。如果发现有缓存资源，就会找到 tar 包的 hash，根据 hash 再去找缓存的 tar 包，并再次通过[pacote](https://www.npmjs.com/package/pacote)把对应的二进制文件解压到相应的项目 node\_modules 下面，省去了网络下载资源的开销。

**注意，这里提到的缓存策略是从 npm v5 版本开始的。在 npm v5 版本之前，每个缓存的模块在 ~/.npm 文件夹中以模块名的形式直接存储，储存结构是：{cache}/{name}/{version}**。

了解这些相对底层的内容可以直接帮助开发者排查 npm 相关问题，这也是区别一般程序员和架构师的细节之一。能不能在理论内容上多走一步，也决定了我们的技术能力能不能更上一层楼。这里我们进行了初步学习，我希望这也可以成为你探究底层的开始。

### npm 不完全指南

接下来，我想介绍几个实用的 npm 小技巧，这些技巧并不包括“npm 快捷键”等常见内容，主要是从工程开发角度，聚焦更广泛的内容。这里我不会花大量篇幅讲解 npm 命令内容，这些知识你可以直接通过 [npm cli 官方文档](https://docs.npmjs.com/cli-documentation/)获得。

下面，我将从 npm 使用技巧以及一些常见使用误区来展开。

#### 自定义 npm init

npm 支持我们自定义 npm init，快速创建一个符合自己需求的自定义项目。想象一下，**npm init 命令本身并不复杂，它其实就是调用 shell 脚本输出一个初始化的 package.json 文件**。那么相应地，我们要自定义 npm init 命令，就是写一个 node 脚本而已，它的 module.exports 即为 package.json 配置内容。

为了实现更加灵活的自定义功能，我们可以使用 prompt() 方法，获取用户输入并动态产生的内容：

复制代码

```auto
const desc = prompt('请输入项目描述', '项目描述...')
module.exports = {
  key: 'value',
  name: prompt('name?', process.cwd().split('/').pop()),
  version: prompt('version?', '0.0.1'),
  description: desc,
  main: 'index.js',
  repository: prompt('github repository url', '', function (url) {
    if (url) {
      run('touch README.md');
      run('git init');
      run('git add README.md');
      run('git commit -m "first commit"');
      run(`git remote add origin ${url}`);
      run('git push -u origin master');
    }
    return url;
  })
}
```

假设该脚本名为 .npm-init.js，我们执行下述命令来确保 npm init 所对应的脚本指向正确的文件：

复制代码

```auto
npm config set init-module ~\.npm-init.js
```

> 更多信息可见：[npm-init](https://docs.npmjs.com/cli/init)。

我们也可以通过配置 npm init 默认字段来自定义 npm init 的内容：

复制代码

```auto
npm config set init.author.name "Lucas"
npm config set init.author.email "lucasXXXXXX@gmail.com"
npm config set init.author.url "lucasXXXXX.com"
npm config set init.license "MIT"
```

> 更多信息见：[npm-config](https://docs.npmjs.com/cli-commands/config.html)。

#### 利用 npm link，高效率在本地调试以验证包的可用性

当我们开发一个公共包时，总会有这样的困扰：假如我开发一个组件库，某个组件开发完成之后，如何验证该组件能在我的业务项目中正常运行呢？

除了写一个完备的测试以外，常见的思路就是**在组件库开发中，设计 examples 目录或者一个 playground，启动一个开发服务，以验证组件的运行情况**。

然而真实应用场景是多种多样的，如果能在某个项目中率先尝试就太好了。但我们又不能发布一个不安全的包版本供业务项目使用。另一个“笨”方法是，手动复制粘贴组件并打包产出到业务项目的 node\_modules 中进行验证，但是这种做法既不安全也会使得项目混乱，变得难以维护，同时过于依赖手工执行，这种操作非常原始。

那么如何**高效率在本地调试以验证包的可用性**呢？这个时候，我们就可以**使用 npm link**。简单来说，它可以**将模块链接到对应的业务项目中运行**。

我们来看一个具体场景，假设你正在开发项目 project 1，其中有个包 package 1，对应 npm 模块包名称是 npm-package-1，我们在 package 1 项目中加入了新功能 feature A，现在要验证在 project 1 项目中能否正常使用 package 1 的 feature A，你应该怎么做？

我们先在 package 1 目录中，执行 npm link，这样 npm link 通过链接目录和可执行文件，实现 npm 包命令的全局可执行。

然后在 project 1 中创建链接，执行 npm link npm-package-1 命令时，它就会去 /usr/local/lib/node\_modules/ 这个路径下寻找是否有这个包，如果有就建立软链接。

这样一来，我们就可以在 project 1 的 node\_module 中会看到链接过来的模块包 npm-package-1，此时的 npm-package-1 就带有最新开发的 feature A，这样一来就可以在 project 1 中正常开发调试 npm-package-1。当然别忘了，调试结束后可以执行 npm unlink 以取消关联。

从工作原理上总结，npm link 的本质就是软链接，它主要做了两件事：

+   为目标 npm 模块（npm-package-1）创建软链接，将其链接到全局 node 模块安装路径 /usr/local/lib/node\_modules/ 中；

+   为目标 npm 模块（npm-package-1）的可执行 bin 文件创建软链接，将其链接到全局 node 命令安装路径 /usr/local/bin/ 中。


通过刚才的场景，你可以看到：**npm link 能够在工程上解决依赖包在任何一个真实项目中进行调试的问题，并且操作起来更加方便快捷**。

#### npx 的作用

npx 由 npm v5.2 版本引入，解决了 npm 的一些使用快速开发、调试，以及项目内使用全局模块的痛点。

**在传统 npm 模式下**，如果我们需要使用代码检测工具 [ESLint](https://eslint.bootcss.com/)，就要先通过 npm install 安装：

复制代码

```auto
npm install eslint --save-dev
```

然后在项目根目录下执行：

复制代码

```auto
./node_modules/.bin/eslint --init
./node_modules/.bin/eslint yourfile.js
```

或者通过项目脚本和 package.json 的 npm scripts 字段调用 ESLint。

而使用 npx 就简单多了，你只需要下面 2 个操作步骤：

复制代码

```auto
npx eslint --init
npx eslint yourfile.js
```

为什么 npx 操作起来如此便捷呢？

这是因为它可以直接执行 node\_modules/.bin 文件夹下的文件。在运行命令时，npx 可以自动去 node\_modules/.bin 路径和环境变量 $PATH 里面检查命令是否存在，而不需要再在 package.json 中定义相关的 script。

**npx 另一个更实用的好处是：npx 执行模块时会优先安装依赖，但是在安装执行后便删除此依赖，这就避免了全局安装模块带来的问题**。

运行如下命令后，npx 会将 create-react-app 下载到一个临时目录，使用以后再删除：

复制代码

```auto
npx create-react-app cra-project
```

更多关于 npx 的介绍你可以去[官网](https://www.npmjs.com/package/npx)进一步查看。

现在，你已经对 npm 有了一个初步了解，我们接下来一同看看 npm 实操部分：多源镜像和企业级部署私服原理。

### npm 多源镜像和企业级部署私服原理

**npm 中的源（registry），其实就是一个查询服务**。以 npmjs.org 为例，它的查询服务网址是 https://registry.npmjs.org/。这个网址后面跟上模块名，就会得到一个 JSON 对象，里面是该模块所有版本的信息。比如，访问 https://registry.npmjs.org/react，就会看到 react 模块所有版本的信息。

我们可以通过`npm config set`命令来设置安装源或者某个 scope 对应的安装源，很多企业也会搭建自己的 npm 源。我们常常会碰到需要使用多个安装源的项目，这时就可以通过 npm-preinstall 的钩子，通过 npm 脚本，在安装公共依赖前自动进行源切换：

复制代码

```auto
"scripts": {
    "preinstall": "node ./bin/preinstall.js"
}
```

其中 preinstall.js 脚本内容，具体逻辑为通过 node.js 执行`npm config set`命令，代码如下：

复制代码

```auto
require(' child_process').exec('npm config get registry', function(error, stdout, stderr) {
  if (!stdout.toString().match(/registry\.x\.com/)) {
    exec('npm config set @xscope:registry https://xxx.com/npm/')
  }
})
```

国内很多开发者使用的 [nrm](https://www.npmjs.com/package/nrm)（npm registry manager）是 npm 的镜像源管理工具，使用它可以快速地在 npm 源间切换，这当然也是一种选择。

你的公司是否也正在部署一个私有 npm 镜像呢？你有没有想过公司为什么要这样做呢？

虽然 npm 并没有被屏蔽，但是下载第三方依赖包的速度依然较缓慢，这严重影响 CI/CD 流程或本地开发效率。部署镜像后，一般可以**确保高速、稳定的 npm 服务**，而且**使发布私有模块更加安全**。除此之外，审核机制也可以**保障私服上的 npm 模块质量和安全**。

那么，如何部署一个私有 npm 镜像呢？

现在社区上主要有 3 种工具来搭建 npm 私服：nexus、verdaccio 以及 cnpm。

它们的工作原理相同，我们可以通过 nexus 的架构示例简单了解一下：

![Drawing 2.png](https://s0.lgstatic.com/i/image/M00/84/9D/CgqCHl_Tba6AcJj0AAGPl9HW2qg745.png)

nexus 架构示例图

nexus 工作在 client 和外部 npm 之间，并通过 group repository 合并 npm 仓库以及私有仓库，这样就起到了代理转发的作用。

了解了 npm 私服的原理，我们就不畏惧任何“雷区”。这部分我也总结了两个社区上常见的问题。

**npm 配置作用优先级**

npm 可以通过默认配置帮助我们预设好 npm 对项目的影响动作，但是 npm 的配置优先级需要开发者确认了解。

如下图所示，优先级从左到右依次降低。我们在使用 npm 时需要了解 npm 的设置作用域，排除干扰范围，以免一顿骚操作之后，并没有找到相应的起作用配置。

![Drawing 3.png](https://s0.lgstatic.com/i/image/M00/84/9D/CgqCHl_TbZCAanocAADUyWa5fV4429.png)

优先级排序示意图

**npm 镜像和安装问题**

另外一个常见的问题就是 npm 镜像和依赖安装，关于 npm 镜像和依赖安装问题，归根到底还是网络环境导致的，建议有条件的情况下还是**从网络层面解决问题**。

如果没有条件，也不要紧，办法总比困难多，可以通过设置安装源镜像来解决，这就需要紧跟社区方案，刨根究底了。这里推荐一篇文章：[聊聊 npm 镜像那些险象环生的坑](https://mp.weixin.qq.com/s/2ntKGIkR3Uiy9cQfITg2NQ)，文章中有更详细的内容，你可以看看。

### npm总结

关于 npm 的核心理念及安装机制，我们暂且分析到这里。实际上我们在使用npm时会发现诸多不方便的地方，由于其管理的代码库十分巨大，同时在国内由于防火墙的关系，网络延迟较大，常常导致一些核心的依赖安装失败。

npm有设置源的配置
`
npm config set registry https://registry.npm.taobao.org
`

但npm在无数次使用中证明了它确实不好用，于是脸书与node的开发公司合作，开发了yarn

国内的开发者也在npm的基础上定制开发了 cnpm，pnmp等工具，他们有很多好用的特性，能帮助我们节省大量的时间
