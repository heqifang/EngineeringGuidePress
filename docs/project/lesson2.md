# 导读 | 前端技术发展回顾和架构升级之路


这一讲我将从整体上梳理前端开发的演进历史，并从渲染方案架构升级的案例出发，带你了解现代化开发的方向。这部分内容并不涉及具体技术细节，更多的是作为本专栏的导读，带你体会现代化前端架构和基建的背景以及目前前端开发的大环境。

### 前端技术发展轨迹

过去十多年，前端技术发展日新月异，互联网风口也从 PC 时代过渡到移动时代甚至智能时代。其间，前端岗位从无到有，再到如今扮演了至关重要的角色。相应地，前端基建和架构也慢慢浮出水面，呈现百花齐放的场景，技术环节自然也愈发复杂。

我们先从前端的技术发展轨迹说起，如下图所示：

![图片1.png](https://s0.lgstatic.com/i/image2/M01/00/66/Cip5yF_W_2uASczcAADjzoYuwcY422.png)

前端技术的发展轨迹图

在静态网页 + 后端 MVC 技术架构时期，严格来说，并没有专职前端工程师的职位。Web 工程师主要集中在后端方向，通过 Model 模型层进行数据的存储和读取、Controller 控制层对数据进行处理并实现业务逻辑需求，最终在 View 视图层展示数据。这时候，**每次请求都对应了一个静态页面的生成过程，我们把这种技术时代称为 Web1.0**。

接着，随着**2005 年 Ajax 技术的出现，标志了 Web1.0 到 Web2.0 的重要演进**。此时，出现了真正意义上的前后端分离概念，这也使得前端工程师开始占据开发岗位的一席之地。前端通过 Ajax 技术获取数据，进行页面的展现和交互，而后端往往通过 Restful 接口，和前端进行协作。这个时期，前端需要大量地处理数据，因此前端 MVC 框架得到了发展。

比如，早期极具代表性的 Backbone.js 框架，架构风格非常明显，我们可以看一下如下代码：

复制代码

```auto
var M = Backbone.Model.extend({
　　defaults: {name: "lucas"} ,
　　initialize : function(){
　　　　this.on("change", function(){
　　　　　　console.log("change")
　　　　})
　　}
})

var model = new M()
```

**这里的**`Backbone.Model`实际上不仅包含了数据`{name: "lucas"}`，其实也包含了数据变更时的监听事件。对应 View 层代码：

复制代码

```auto
var V = Backbone.View.extend({
　　initialize: function() {
　　　　this.listenTo(this.model, "change", this.show)
　　},
　　show: funtion(model) {
　　　　$("#id").append(this.model.name)
　　}
})
var m= new M()
var v = new V({model: m})
m.set("name", "hi")
```

Backbone.js 的出现是革命性的。但是以上述代码为例，**如果业务足够复杂的话，上述状态机一般的代码就会成为负担，代码量也变得非常臃肿，难以维护**。

随着前端处理数据理念的革新，一种更新潮的 MVVM（View + ViewModel + Model）模式框架就出现了，MVVM 和 MVC 最大的区别在于：MVVM 采用双向绑定（Data Binding）或自动渲染更新。

也就是说，View 层的变动，可以自动反映在 ViewModel 层。Angular 和 Vue 都采用这种模式。虽然 React 官方声称自己只是一个 View 层类库，但是 React 搭配数据状态管理生态，也符合 MVVM 模式。当然 React 并不是双向绑定风格的解决方案，自动渲染更新也代表了一种潮流和方向。

整体看来，架构层面 MVC 风格向 MVVM 风格的演进，不仅简化了数据与视图的依赖，还解决了数据频繁更新的问题。再加上虚拟 DOM 理念，为开发者屏蔽了 DOM 操作，业界框架方案逐渐稳定，这种低耦合模式也代表了现代化的设计理念。

这个时期，前后端分离技术发展到了顶峰，前端框架也互相学习借鉴，直到如今的**Vue/React/Angular 三足鼎立**的局面。

这个时代的稳定性一直持续到 Node.js 的崛起，随着 Node.js 的出现，稳固的技术体系瞬间被打破。通过 Node.js，除了前端工具链、工程化得以发展，前端也实现 BFF（Backend For Frontend）层，这样的架构设计好处显而易见：

+   前端工程师可以**自行编写后端服务，实现数据的适配**，应用场景包括接口的整合编排、字段裁剪；

+   前端工程师可以实现**SSR（服务端渲染直出）技术**，达到提升首屏性能以及 SEO 友好的目的；

+   前端工程师可以实现各种**后端领域服务**。


为了“紧跟技术潮流”的发展，Vue 和 React 等当红框架依靠虚拟 DOM 技术，推出同构方案。SSR 架构模式横空出世，成了前端技术演进的新方向。

但是 Node.js 技术不是银弹，SSR 架构也不是毫无成本。前端工程师落地 Node.js 技术，就要关心服务器的运维、部署、发布、监控。有没有一种“just work”的技术，使得我们能够更轻松地专注前端业务代码的开发，直接上手 Node.js 呢？

为了解决上述问题，**Serverless 理念**应运而生。简单来说，我们可以将服务器的运维功能都交给 Serverless 平台进行管理，研发人员只需要专注于实现云函数即可完成功能开发。

你看，短短十多年，前端技术发展和演进史已经非常精彩。其实这段演进当中，也有诸多值得关注的里程碑和代表技术理念，比如以下几点。

![前端发展和演进史.png](https://s0.lgstatic.com/i/image/M00/8A/CE/Ciqc1F_ayhyANkK4AADjomKGK_s552.png)

**1\. 以 GraphQL 技术为代表的数据源聚合和字段裁剪方案**
**2\. 以组件化架构为代表的 UI 搭建技术**，在 UI 搭建技术里面，我们也可以总结出一个微观技术方向：

+   以原子组件为基准的组件化方案（Ant Design、Element）

+   以模板库为代表（Ant Design Pro）的一体化组件化方案

+   以 No code/Low code 为代表的配置化解决方案

+   以机器学习智能化为代表的搭建方案（设计图 → 代码直出）


**3\. 以微前端为代表的、前端应用聚合为单体应用的工程方案**
**4\. 以 PWA、小程序、快应用等为代表的平台化方案**
**5\. 以 PhoneGap → Ionic → React Native → Flutter 等演进方向为代表的移动端跨端方案**

总之，前端技术发展从没有一刻停歇，而在技术架构演进的过程中，需要前端开发者不断保持进步和学习。其中，对于基础建设和架构设计的学习，将会是最核心、最重要的学习方向和目标。

下面，我们简单了解一下现代技术架构。

### 现代化的前端技术架构解读

**一方面，前端领域的现代技术架构，永远无法脱离应用终端和宿主**。这其中：前端不再局限于 PC 和移动智能手机端，智能手表、眼镜会是新的平台方向，同时文件系统、相机、PWA 和硬件传感器等新型 API 都已经应用在 Web 前端当中。

**第二方面，现代 JavaScript 也发展成为一种真正成熟的语言，并且还将会持续引入新的特性和功能**。同时**TypeScript，甚至 Elm、PureScript 和 ReasonML 将会得到更多关注**。因此，一套现代化的前端方案，必然要处理语言的发展和宿主的碎片化、滞后性这一矛盾，也必然会有一个更厚重的编译。

第三方面，网络基础设施永远都在变得更快、更稳定，流媒体和视频点播成为日常，**前端的用户体验和富媒体技术愈发成为应用的关键**。

基于上述背景，现代化前端技术架构的特点呼之欲出：

+   组件化是基本 UI 架构；

+   依托于 SSR 同构技术以及心智负担的最小化，框架层面提供的虚拟 DOM 会成为生态标配；

+   数据状态管理方案将会以职责单一、minimal necessary 为目标，以组合性、函数式为理念，而不以双向数据流和单向数据流的区分为重点；

+   前端向传统后端领域进军是必然，一个 CSR/SSR 可切换的协作方案可以把前端优势特点放大到最大。


总之，基础建设和工程化建设、代码设计和架构之道，也将围绕以上几个特点给出答案。我们的课程也会围绕这些方向展开。

### 从 CSR → SSR → NSR → ESR 渲染方案演进看前端架构演进方向

上面我们从宏观的角度阐述了前端技术架构方向。这一部分，我会以前端渲染架构为例，从真实的技术环节、更立体地说明架构演进。我将以 CSR → SSR → NSR → ESR 方案来进行讲解。

**CSR：Client Side Rendering**，浏览器端渲染也许是大家最为熟悉的渲染架构。这种渲染架构很好理解，如下图所示：

![Drawing 1.png](https://s0.lgstatic.com/i/image/M00/84/91/Ciqc1F_TbNGAE7ADAAMPSImvmcM224.png)

CSR 渲染架构图（图片来源：[https://developers.google.com/web/updates/2019/02/rendering-on-the-web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)）

CSR 渲染架构的特点非常明显：

+   实现了前后端架构分离，实现了前后端职责分离；

+   TTFB 时间最小，但由于客户端和服务端会有多次交互（获取静态资源、获取数据）才能进行渲染，实际首屏效果以及 FCP/FMP 时间不够理想。


![Drawing 2.png](https://s0.lgstatic.com/i/image/M00/84/9C/CgqCHl_TbNeABkBtAABufch6K5o021.png)

CSR 渲染时序图（图片来源：[https://developers.google.com/web/updates/2019/02/rendering-on-the-web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)）

我们可以通过代码分离等技术弥补实际内容渲染的滞后，但从渲染架构上讲，CSR 却有着基因上的弊端。

**SSR：Server Side Rendering**，在服务端完成页面模板、数据预取、填充，并且在服务端就可以将完整的 HTML 内容返回给浏览器。如下图：

![Drawing 3.png](https://s0.lgstatic.com/i/image/M00/84/91/Ciqc1F_TbN6AbhWeAAMt7v_XiOk193.png)

SSR 渲染架构图（图片来源：[https://developers.google.com/web/updates/2019/02/rendering-on-the-web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)）

![Drawing 4.png](https://s0.lgstatic.com/i/image/M00/84/9C/CgqCHl_TbOSANVS_AABr6t8iQEQ369.png)

SSR 渲染时序图（图片来源：[https://developers.google.com/web/updates/2019/02/rendering-on-the-web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)）

实际上，SSR 还涉及更多内容：我们在服务端预取了数据，并返回了数据和 HTML 内容。理想情况下，不需要在客户端再次请求数据，而是直接消费数据即可。因此我们**可以将 SSR 和 CSR 相结合，即实现一个基于 hydration（注水） 的 SSR 和 CSR 结合方案**。

先来解释一下 hydration，这个概念和同构应用中数据的获取和消费有关。在服务器端渲染时，首先服务端请求接口拿到数据，处理并准备好数据状态（如果使用 Redux，就进行 store 的更新）。

为了减少客户端的请求，我们需要保留住这个状态。一般做法是在服务器端返回 HTML 字符串的时候，将数据 JSON.stringify 一并返回，这个过程，叫作脱水（dehydrate）；在客户端，就不再需要进行数据的请求了，可以直接使用服务端下发下来的数据，这个过程叫注水（hydrate）。

用代码来表示，我们将数据放到 window 变量上：

复制代码

```auto
ctx.body = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
        <script>
        window.context = {
          initialState: ${JSON.stringify(store.getState())}
        }
      </script>
      <div id="app">
          // ...
      </div>
    </body>
  </html>
`
```

对应客户端：

复制代码

```auto
export const getClientStore = () => {
  const defaultState = JSON.parse(window.context.state)
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}
ReactDOM.hydrate(<App date={getClientStore().getState()} />, document.getElementById('root'))
```

而基于 hydration 的 SSR 方案，如下图代码：

![图片2.png](https://s0.lgstatic.com/i/image/M00/88/88/Ciqc1F_W__SALwrUAAYHEKkIYNQ282.png)

我们可以将上述渲染架构方案用下面这张图来总结：

![Drawing 6.png](https://s0.lgstatic.com/i/image/M00/84/91/Ciqc1F_TbPWAd6HsAABr6t8iQEQ624.png)

SSR 渲染架构方案图（图片来源：[https://developers.google.com/web/updates/2019/02/rendering-on-the-web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)）

其实，如果将性能优化做到极致，SSR 还可以发展为：Streaming server rendering（流式 SSR 渲染）或 Progressive Rehydration（渐进式 SSR 渲染）。

+   流式 SSR 渲染，允许服务端通过 stream 的方式向浏览器发送 HTML 内容。在 React 中，我们可以使用`renderToNodeStream()`方法来完成流式 SSR 渲染。

+   渐进式 SSR 渲染可以允许在 hydrating 没有完全结束前，部分已经渲染并注水完成的页面内容，可以优先完成交互响应。React 专门将[Partial Hydration](https://github.com/facebook/react/pull/14717)开了一个 PR 来讨论。


在 SSR 技术下，还有类似 Bigpipe 的 Partial Rehydration 技术以及借助 Service Worker 完成的 Trisomorphic Rendering 技术，这里我们不再一一讨论。

说完 SSR，我们再来看一些更新潮的渲染技术：NSR 和 ESR 渲染方案最近几年也正在逐渐落地实施。

**NSR：Native Side Rendering**，这是一种在 hybrid 中特有的渲染技术。简单说就是**通过 Native 渲染生成 HTML 数据，并且缓存在客户端**。这样一来，对于一个 hybrid WebView 的用户访问，会优先从离线包中加载离线页面模板，再通过前端 Ajax/或客户端能力请求数据，最终完成页面完整的展示。

这样做的好处显而易见：我们将服务器的渲染工作放在了一个个独立的移动设备中，并借助离线存储技术，实现了页面的预加载，同时又不会增加额外的服务器压力。

**ESR：Edge Side Rendering**，边缘渲染则更加激进。ESR 其实借助了最近几年较火的“边缘计算”能力。

> 边缘计算，是指在靠近物或数据源头的一侧，采用网络、计算、存储、应用核心能力为一体的开放平台，就近提供最近端服务。其应用程序在边缘侧发起，产生更快的网络服务响应，满足行业在实时业务、应用智能、安全与隐私保护等方面的基本需求。边缘计算处于物理实体和工业连接之间，或处于物理实体的顶端。而云端计算，仍然可以访问边缘计算的历史数据。

ESR 渲染利用了 CDN 能力。ESR**会在 CDN 上缓存页面的静态部分，这样在用户访问页面时，可以快速返回给用户静态内容，同时在 CDN 节点上也发起动态部分内容请求，在动态内容获取之后，利用流的方式，继续返回给用户**。该项技术在阿里中已经有了试水，但真正更广泛地落地和实施，有待后续验证和观察。总之借助边缘计算能力，前端渲染架构的想象空间会被无限放大。

### 总结

这一讲我们纵览了近十多年的前端技术发展以及相关技术方案的演进过程，并以渲染架构为例，重点剖析了从传统 CSR 到 SSR、NSR 再到 ESR 的思路。这一系列发展过程有的以基础设施（比如网络发展）为红利，有的以语言或框架演进为背书。

![导读.png](https://s0.lgstatic.com/i/image2/M01/00/67/Cip5yF_XAB6AM-sFAAZim-NM1GE633.png)

无论技术发展的脚步多快，无论什么样的技术架构，都离不开基础建设和架构设计。就让我们以当前“最先进”的理念，进入最核心的基础建设和架构设计的学习吧！

* * *

[![大前端引流.png](https://s0.lgstatic.com/i/image2/M01/00/66/CgpVE1_W_x2AaW0rAAdqMM6w3z0145.png)](https://shenceyun.lagou.com/t/mka)

对标阿里P7技术需求 + 每月大厂内推，6 个月助你斩获名企高薪 Offer。[点此链接，快来领取！](https://shenceyun.lagou.com/t/mka)