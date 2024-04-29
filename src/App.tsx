import { Md2Poster, Md2PosterContent, Md2PosterHeader, Md2PosterFooter } from './packages'
// import './App.css'

// const Footer = () => {
//   return (
//     <div className="border-t pt-[12px]">
//       <div className="flex justify-between w-full">
//         <div className="flex items-center justify-center">
//           <blockquote className="text-sm border-l-4 pl-2 border-slate-00 text-slate-400">
//             Power by <br />
//             <span className="text-source">BeePoster</span>
//           </blockquote>
//         </div>
//         {/* <div className="text-sm pr-2">
//         <a href={threadUrl} target="_blank">
//           <QRCode size={48} fgColor="#94a3b8" value={threadUrl} />
//         </a>
//       </div> */}
//       </div>
//     </div>
//   )
// }

function App() {
  // const MdDom = () => {
  //   return (
  //     <article className="prose lg:prose-xl">
  //       <h1>Garlic bread with cheese: What the science tells us</h1>
  //       <p>
  //         For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with
  //         the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for
  //         Halloween.
  //       </p>
  //       <p>
  //         But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up
  //         around the country.
  //       </p>
  //       <ul>
  //         <li>1</li>
  //         <li>2</li>
  //       </ul>
  //     </article>
  //   )
  // }


  const markdown = `
# AI早报 - 4月29日
![image](https://imageio.forbes.com/specials-images/imageserve/64b5825a5b9b4d3225e9bd15/artificial-intelligence--ai/960x0.jpg?format=jpg&width=1440)
1. **元象公司发布多模态大型模型XVERSE-V**: 支持任意宽高比的图像输入，在多个权威评测中表现优异，并已开源。
2. **通义千问团队开源千亿参数模型Qwen1.5-110B**: 采用Transformer解码器架构，支持多语言，具有高效注意力机制。
3. **生数科技与清华大学发布视频大模型Vidu**: 采用Diffusion与Transformer融合架构，一键生成高清视频，国际领先。
4. **Mutable Al推出Auto Wiki v2**: 自动将代码转化为维基百科风格的文章:解决代码文档化难题。
5. **谷歌在美国新建数据中心**: 计划投资30亿美元在印第安纳州建设数据中心园区，扩建弗吉尼亚州设施，推出人工智能机会基金。
6. **中国信息通信研究院发布汽车大模型标准**: 旨在规范和推动汽车行业智能化发展.
7. Kimi chat移动端应用更新:版本1.2.1全面重构用户界面，引入新的浅色模式，提供舒适直观的体验。
  `

  return (
    <main>
      <Md2Poster theme="SpringGradientWave" canCopy size='mobile'>
        <Md2PosterHeader className='flex justify-between items-center px-4'>
          <span>
            @LingGame
          </span>
          <span>
            {new Date().toISOString().slice(0, 10)}
          </span>
        </Md2PosterHeader>
        <Md2PosterContent>{markdown}</Md2PosterContent>
        <Md2PosterFooter>Powered by BeePoster.com</Md2PosterFooter>
      </Md2Poster>
    </main>
  )
}

export default App
