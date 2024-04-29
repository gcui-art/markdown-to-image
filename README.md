# Markdown To Poster
This React component renders Markdown as visually appealing social media images. The project also includes a built-in web editor that can be used as an online Markdown-to-poster editor with a simple one-click deployment.

![markdown-to-poster banner](https://github.com/gcui-art/markdown-to-poster/blob/main/public/banner.jpg)

- [English](./README.md) | [中文](./README_CN.md)
- [DEMO & Web Editor](https://beeposter.com)
- [Deploy Editor with Vercel](https://vercel.com/new/clone?repository-url=https://github.com/gcui-art/markdown-to-poster&root-directory=example&project-name=markdown-to-poster&repository-name=markdown-to-poster)

⭐ Click the Star and Watch buttons to stay updated on our latest developments.

## Features

- [x] Render Markdown as poster images optimized for social sharing
- [x] Two built-in templates with support for custom templates
- [x] Customizable themes with 9 pre-built options
- [x] Copy output as an image
- [x] One-click deployment to platforms like Vercel
- [ ] Copy output as HTML code for pasting into emails and editors

## Getting Started

There are two ways to use markdown-to-poster:

1. Integration: markdown-to-poster is exported as a React component that can be seamlessly integrated into your projects.
2. Using Web Editor: The example path includes a web editor that can be deployed and used as an online editor.

### Integration

`markdown-to-poster` exports a component called Md2Poster and three subcomponents, which can be installed via npm or other package managers.

#### Installation

Install with npm:
```
npm install markdown-to-poster
```

Install with pnpm:
```
pnpm install markdown-to-poster
```

yarn add markdown-to-poster:
```
yarn add markdown-to-poster
```

#### Usage

Basic example:
```javascript
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
    <Md2PosterFooter>Powered by BeePoster.com</Md2PosterFooter>
  </Md2Poster>
  // ...
)
```
To explore additional component parameters, check out the documentation: [beeposter.com/docs](https://beeposter.com/docs)

### Using the Web Editor

#### Official Web Editor
👉 Visit: [beeposter.com](https://beeposter.com)

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
- Demo site: [beeposter.com](https://beeposter.com)
- NPM Package: [npm:markdown-to-poster](https://www.npmjs.com/package/@gcui/markdown-to-poster)
