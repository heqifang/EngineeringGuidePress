module.exports = {
  title: '重庆工程学院',
  description: '软件研究所教学课件',
  themeConfig: {
    // 顶部导航栏内容
    nav: [
      {
        text: 'vue 官网',
        link: 'https://cn.vuejs.org/',
      },
      {
        text: 'react 官网',
        link: 'https://react.docschina.org/',
      },
      {
        text: '基础语法',
        items: [
          { text: 'typescript', link: 'https://typescript.bootcss.com/' },
          { text: 'ecmascript', link: 'https://es6.ruanyifeng.com/' },
        ]
      },
      {
        text: '文档生成',
        items: [
          { text: 'vuepress', link: 'https://v2.vuepress.vuejs.org/zh/guide/getting-started.html' },
          { text: 'vitepress', link: 'https://vitepress.vuejs.org/' },
          { text: 'markdown', link: 'https://markdown.com.cn/basic-syntax/' },
        ]
      },
      {
        text: 'vite',
        items: [
          { text: '第一课', link: '/vite/lesson1' },
          { text: '第二课', link: '/vite/lesson2' },
          { text: '第三课', link: '/vite/lesson3' },
          { text: '第四课', link: '/vite/lesson4' },
          { text: '第五课', link: '/vite/lesson5' },
        ]
      },
      {
        text: '工程化',
        items: [
          { text: '第一课', link: '/project/lesson1' },
          { text: '第二课', link: '/project/lesson2' },
          { text: '第三课', link: '/project/lesson3' },
          { text: '第四课', link: '/project/lesson4' },
          { text: '第五课', link: '/project/lesson5' },
          { text: '第六课', link: '/project/lesson6' },
        ]
      }
    ],
    // 侧边栏导航内容
    // sidebar: [
    //   {
    //     text: 'Guide',
    //     items: [
    //       { text: 'Introduction', link: '/introduction' },
    //       { text: 'Getting Started', link: '/getting-started' },
    //     ]
    //   }
    // ]
  },
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2019-present Evan You'
  }
};