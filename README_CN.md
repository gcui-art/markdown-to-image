# Markdown To Poster

这个 React 组件用于将 Markdown 渲染为漂亮的社交媒体图片。此外，该项目还包括一个内置的 WEB Editor，一键部署后，可以当做 Markdown 转海报图片在线编辑器使用。

![markdown-to-poster banner](https://github.com/gcui-art/markdown-to-poster/blob/main/public/banner.jpg)

- [English](./README.md) | [中文](./README_CN.md)
- [DEMO & WEB Editor](https://readpo.com/zh/poster)
- [Deploy Editor with Vercel](https://vercel.com/new/clone?repository-url=https://github.com/gcui-art/markdown-to-poster&root-directory=example&project-name=markdown-to-poster&repository-name=markdown-to-poster)
- [NPM:markdown-to-poster](https://www.npmjs.com/package/markdown-to-poster)

⭐ 点击 Star 和 Watch 按钮，跟踪我们的最新进展。

## 功能

- [x] 将 Markdown 渲染为适合社交分享的海报图片
- [x] 内置一个模板，支持模板扩展
- [x] 支持自定义主题，并且已内置9个主题
- [x] 支持复制为图像
- [x] 支持一键部署到 Vercel 等
- [x] 已集成图片跨域代理，可以方便的插入在线图片生成图文海报
- [ ] 支持复制为HTML 代码，可粘贴到电子邮件和一些编辑器中
- [ ] 更多内置模板

## 如何使用

有两种使用 markdown-to-poster 的方式：

- 在项目中集成：markdown-to-poster 已导出为一个 React 组件，可以直接集成到您自己的项目中。
- 使用WEB UI：example路径中自带了一个 WEB Editor，部署后，可以当做在线编辑器使用。

### 在你的项目中集成

`markdown-to-poster`导出了一个叫 Md2Poster 的组件以及其他三个子组件，你可以通过 npm 等安装使用。

#### 安装

用 npm 安装：

```bash
npm i markdown-to-poster
```

用 pnpm 安装：

```bash
pnpm install markdown-to-poster
```

用 yarn 安装：

```bash
yarn install markdown-to-poster
```

#### 使用

简单开始：

```javascript
import 'markdown-to-poster/dist/style.css'
import { Md2Poster, Md2PosterContent, Md2PosterHeader, Md2PosterFooter } from 'markdown-to-poster'

...

const markdown = `
# AI Morning Updates
> On April 29th, what's the latest in the AI field that should be on your radar?
...
`

...

return (

...

<Md2Poster>
  <Md2PosterHeader>Poster Header</Md2PosterHeader>
  <Md2PosterContent>{markdown}</Md2PosterContent>
  <Md2PosterFooter>Powered by ReadPo.com</Md2PosterFooter>
</Md2Poster>

...

)
```

更多组件参数请阅读文档：[ReadPo.com/docs](https://ReadPo.com)

### 使用在线编辑器

#### 使用官方部署的在线编辑器

👉 访问：[ReadPo.com](https://readpo.com/zh/poster)

#### 部署自己的在线编辑器

这里使用Vercel进行部署，点击后一键部署：[部署 Editor 到 Vercel](https://vercel.com/new/clone?repository-url=https://github.com/gcui-art/markdown-to-poster&root-directory=example&project-name=markdown-to-poster&repository-name=markdown-to-poster)

## 贡献指南

您有四种方式支持本项目：

1. **Fork 项目并提交 PR**：我们欢迎任何让这个组件和Editor变的更好的PR。
2. **提交Issue**：我们欢迎任何合理的建议、bug反馈。
3. **捐赠**：在项目的顶部我们放置了 Sponsor 按钮，如果这个项目帮助到了您，你可以请我们喝一杯，干杯☕。
4. **推荐**：向其他人推荐本项目；点击Star；使用本项目后放置外链。

## 许可证

使用非常宽松的 Apache 2.0开源协议。

## 你有一个问题/建议/困难/Bug？

我们使用Github的Issue来管理这些反馈，你可以提交一个。我们会经常来处理。

## 相关链接

- 我们的其他开源项目: [Suno AI API](https://github.com/gcui-art/suno-api)
- 演示站点: [https://readpo.com](https://readpo.com/zh/poster)
- NPM Package：[npm:markdown-to-poster](https://www.npmjs.com/package/markdown-to-poster)

## 常见问题

1. 在Nextjs这样的SSR框架中使用的时候，可能会遇到`ReferenceError: document is not defined`报错，你可以使用`next/dynamic`动态组件解决这个问题。

```javascript
// page.ts
import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('@/components/Editor'), {
  ssr: false,
})
```

```javascript
// Editor.tsx
import React from 'react'
import { Md2Poster, Md2PosterContent, Md2PosterHeader, Md2PosterFooter } from 'markdown-to-poster'

function Editor() {
  const markdown = `
# AI Morning Updates
> On April 29th, what's the latest in the AI field that should be on your radar?

![image](https://imageio.forbes.com/specials-images/imageserve/64b5825a5b9b4d3225e9bd15/artificial-intelligence--ai/960x0.jpg?format=jpg&width=1440)
1. **Tech hiccups in AI car race: NTU team misses final** : Collaboration with UAE tech group faces technical challenges in international AI car race.
2. **AI complicates kids' online safety: Parents take charge** : Rapid AI evolution poses challenges, prompting parents to take active measures for children's safety.
3. **AI boom's secret winners: Companies fueling growth** : Investors find unique opportunities in stock market's AI boom, with certain companies driving progress.
4. **AI redefining automation in competitive market** : AI is no longer just a buzzword, as companies across industries deploy it for competitive edge.
5. **London private school introduces AI classes for children** : Leading school in London introduces AI lessons to help children adapt to evolving technology landscape.
6. **China utilizes supercomputer for AI training amid chip constraints** : Progress in leveraging supercomputers and domestic AI chips for training large language models in China.
7. **AI-Driven Age of New Media: Opportunities and Challenges** : CGTN panel discusses opportunities and challenges in the AI-driven age of new media.
8. **Apple rumored to resume OpenAI discussions for generative AI features** : Speculations suggest Apple may collaborate with OpenAI for generative AI features on upcoming iPhones.
9. **Tech tycoon's family office invests in AI for $10 billion fund** : Premji Invest to inject more funds into AI initiatives, supporting a $10 billion fund managed by Azim Premji.
10. **Banks embrace Cloud and AI for innovation and partnerships** : Banking industry shifts towards innovation, collaboration, and customer-centricity through adoption of Cloud and AI technologies.
  `

  return (
    <Md2Poster theme="SpringGradientWave" size="mobile">
      <Md2PosterHeader className="flex justify-between items-center px-4">
        <span>@Nickname</span>
        <span>{new Date().toISOString().slice(0, 10)}</span>
      </Md2PosterHeader>
      <Md2PosterContent>{markdown}</Md2PosterContent>
      <Md2PosterFooter className="flex justify-center items-center gap-1">any children</Md2PosterFooter>
    </Md2Poster>
  )
}

export default Editor
```
