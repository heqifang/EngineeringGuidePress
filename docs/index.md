---
home: true
title: 前端实验课件
lang: 简体中文
heroImage: /assets/imgs/logo.png
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
navbar: true
editLink: true
sidebar: true
footer: MIT Licensed | Copyright © 2019-present Evan You
---

# {{ $frontmatter.title }}

# 课件介绍
该课件基于vitepress， (静态的markdown 文档在线生成器)
能和各种云笔记联动， 将markdown文件生成在线的前端网站
基于前端最新的vue3.0，提供的vite开发服务工具，启动速度非常快，但功能插件体系还不完善

与传统 的ppt加word对比
* 1.项目托管到github，学生可以直接通过git去下载，使用课件的同时就实践了git，以及npm和常用的ide编辑器
* 2.主体是markdown文件， 可提供生态支持的各种主题，和强大的插件功能
* 3.与教学大纲配合，能定制化灵活的目录，回到顶部，搜索功能
* 4.直接在浏览器环境下运行，能直接使用浏览器的各种调试工具和插件
* 5.支持各种主题的代码高亮，以及html，js甚至vue组件的直接展示和使用

git拉取代码
跟目录执行，即可运行打开
```
npm install
npm run docs:dev
```

## 总目录

[前端演进概论](./font.md)

[react框架基础](./guide01.md)

[react框架生态](./guide02.md)

[构建可持续，可扩展的react应用](./guide03.md)

[react常见场景最佳实践](./guide04.md)

[Vue 框架技术理论](./guide005.md)

[Vue 生态库](./guide06.md)

[Vue最佳实践](./guide07.md)

[打包工具](./guide08.md)

[公司实际项目综合实践](./guide09.md)
