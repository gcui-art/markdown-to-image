import { Md2Poster, Md2PosterContent, Md2PosterHeader, Md2PosterFooter } from './packages'
import './App.css'

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

  # 微信公众号排版工具
  >微信公众号排版工具。问题或建议，请公众号留言。**[程序员翻身](#jump_8)**

  建议使用 **Chrome** 浏览器，体验最佳效果。
  
  使用微信公众号编辑器有一个十分头疼的问题：粘贴出来的代码，格式错乱，空间小还带行号，而且特别丑。Markdown.com.cn编辑器能够解决这个问题。
  
  Markdown是一种轻量级的「标记语言」。
  
  请阅读下方文本熟悉工具使用方法，本文可直接拷贝到微信中预览。
  
  
  ## 1 Markdown.com.cn 简介
  
  - 支持自定义样式的 Markdown 编辑器
  - 支持微信公众号、知乎和稀土掘金
  - 点击右上方对应图标，一键复制到各平台
  
  ## 2 Markdown语法教程
  
  ### 2.1 标题
  
  不同数量的\`#\`可以完成不同的标题，如下：
  
  # 一级标题
  
  ## 二级标题
  
  ### 三级标题
  
  ### 2.2 字体
  
  粗体、斜体、粗体和斜体，删除线，需要在文字前后加不同的标记符号。如下：
  
  **这个是粗体**
  
  *这个是斜体*
  
  ***这个是粗体加斜体***
  
  ~这里想用删除线~
  
  注：如果想给字体换颜色、字体或者居中显示，需要使用内嵌HTML来实现。
  
  ### 2.3 无序列表
  
  无序列表的使用，在符号\`-\`后加空格使用。如下：
  
  - 无序列表 1
  - 无序列表 2
  - 无序列表 3
  
  如果要控制列表的层级，则需要在符号\`-\`前使用空格。如下：
  
  - 无序列表 1
  - 无序列表 2
    - 无序列表 2.1
    - 无序列表 2.2
  
  **由于微信原因，最多支持到二级列表**。
  
  ### 2.4 有序列表
  
  有序列表的使用，在数字及符号\`.\`后加空格后输入内容，如下：
  
  1. 有序列表 1
  2. 有序列表 2
  3. 有序列表 3
  
  ### 2.5 引用
  
  引用的格式是在符号\`> \`后面书写文字。如下：
  
  > 读一本好书，就是在和高尚的人谈话。 ——歌德
  
  > 雇用制度对工人不利，但工人根本无力摆脱这个制度。 ——阮一峰
  
  ### 2.6 代码
  ~~~js
  console.log('It works!')
  ~~~
  ### 2.7 链接
  
  微信公众号仅支持公众号文章链接，即域名为\`https://mp.weixin.qq.com/\`的合法链接。使用方法如下所示：
  
  对于该论述，欢迎读者查阅之前发过的文章，[你是《未来世界的幸存者》么？](https://mp.weixin.qq.com/s/s5IhxV2ooX3JN_X416nidA)
  <a id="jump_8"></a >
  ### 2.8 图片
  
  插入图片，格式如下：
  
  ![这里写图片描述](https://www.nginx.cn/wp-content/uploads/2020/03/qrcode_for_gh_82cf87d482f0_258.jpg)
  
  支持 jpg、png、gif、svg 等图片格式，**其中 svg 文件仅可在微信公众平台中使用**，svg 文件示例如下：
  
  ![](https://markdown.com.cn/images/i-am-svg.svg)
  
  支持图片**拖拽和截图粘贴**到编辑器中。
  
  注：支持图片 ***拖拽和截图粘贴*** 到编辑器中，仅支持 https 的图片，图片粘贴到微信时会自动上传微信服务器。
  `

  return (
    <div className="flex max-w-5xl mx-auto flex-col py-2 min-h-screen">
      <main className="flex max-w-2xl sm:max-w-xl w-full flex-col mx-auto">
        <Md2Poster theme="pink" canCopy>
          <Md2PosterHeader>test header</Md2PosterHeader>
          <Md2PosterContent>{markdown}</Md2PosterContent>
          <Md2PosterFooter>test footer</Md2PosterFooter>
        </Md2Poster>
      </main>
    </div>
  )
}

export default App
