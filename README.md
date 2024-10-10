# Markdown To Poster

This React component renders Markdown as visually appealing social media images. The project also includes a built-in web editor that can be used as an online Markdown-to-poster editor with a simple one-click deployment.

![markdown-to-poster banner](https://github.com/gcui-art/markdown-to-poster/blob/main/public/banner.jpg)

- [English](./README.md) | [中文](./README_CN.md)
- [DEMO & Web Editor](https://readpo.com/en/poster)
- [Deploy Editor with Vercel](https://vercel.com/new/clone?repository-url=https://github.com/gcui-art/markdown-to-poster&root-directory=example&project-name=markdown-to-poster&repository-name=markdown-to-poster)
- [NPM:markdown-to-poster](https://www.npmjs.com/package/markdown-to-poster)

⭐ Click the Star and Watch buttons to stay updated on our latest developments.

## Features

- [x] Render Markdown as poster images optimized for social sharing
- [x] One built-in templates with support for custom templates
- [x] Customizable themes with 9 pre-built options
- [x] Copy output as an image
- [x] One-click deployment to platforms like Vercel
- [x] Integrated image CORS proxy for easy insertion of online images into posters
- [ ] Copy output as HTML code for pasting into emails and editors
- [ ] More built-in templates

## Getting Started

There are two ways to use markdown-to-poster:

1. Integration: markdown-to-poster is exported as a React component that can be seamlessly integrated into your projects.
2. Using Web Editor: The example path includes a web editor that can be deployed and used as an online editor.

### Integration

`markdown-to-poster` exports a component called Md2Poster and three subcomponents, which can be installed via npm or other package managers.

#### Installation

Install with npm:

```bash
npm i markdown-to-poster
```

Install with pnpm:

```bash
pnpm install markdown-to-poster
```

yarn add markdown-to-poster:

```bash
yarn add markdown-to-poster
```

#### Usage

Basic example:

```javascript
import 'markdown-to-poster/dist/style.css'
import { Md2Poster, Md2PosterContent, Md2PosterHeader, Md2PosterFooter } from 'markdown-to-poster'

// ...

const markdown = `
# AI Morning Updates
> On April 29th, what's the latest in the AI field that should be on your radar?
...
`

// ...

return (
  // ...
  <Md2Poster>
    <Md2PosterHeader>Poster Header</Md2PosterHeader>
    <Md2PosterContent>{markdown}</Md2PosterContent>
    <Md2PosterFooter>Powered by ReadPo.com</Md2PosterFooter>
  </Md2Poster>
  // ...
)
```

To explore additional component parameters, check out the documentation: [readpo.com/docs](https://readpo.com)

### Using the Web Editor

#### Official Web Editor

👉 Visit: [readpo.com](https://readpo.com/en/poster)

#### Deploying Your Own Web Editor

[Deploy Editor with Vercel](https://vercel.com/new/clone?repository-url=https://github.com/gcui-art/markdown-to-poster&root-directory=example&project-name=markdown-to-poster&repository-name=markdown-to-poster)

## Contributing

There are four ways you can support this project:

1. Fork and Submit Pull Requests: We welcome any PRs that enhance the component or editor.
2. Open Issues: We appreciate reasonable suggestions and bug reports.
3. Donate: If this project has helped you, consider buying us a coffee using the Sponsor button at the top of the project. Cheers! ☕
4. Spread the Word: Recommend this project to others, star the repo, or add a backlink after using the project.

## License

This project is licensed under the permissive Apache 2.0 open source license.

## Questions, Suggestions, Issues, or Bugs?

We use GitHub Issues to manage feedback. Feel free to open an issue, and we'll address it promptly.

## Related Links

- Our other open source projects: [Suno AI API](https://github.com/gcui-art/suno-api)
- Demo site: [https://readpo.com/poster](https://readpo.com/en/poster)
- NPM Package: [npm:markdown-to-poster](https://www.npmjs.com/package/@gcui/markdown-to-poster)

## FQA

1. When utilizing frameworks like Next.js for server-side rendering (SSR), you may encounter the error `ReferenceError: document is not defined`. To address this issue, you can employ dynamic components with `next/dynamic`.

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
