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
    <main>
      <Md2Poster theme="SpringGradientWave" canCopy size='mobile'>
        <Md2PosterHeader className='flex justify-between items-center px-4'>
          <span>
            @Nickname
          </span>
          <span>
            {new Date().toISOString().slice(0, 10)}
          </span>
        </Md2PosterHeader>
        <Md2PosterContent>{markdown}</Md2PosterContent>
        <Md2PosterFooter className='flex justify-center items-center gap-1'>
          <img src="/logo.png" alt="beeposter" className='w-4 h-4' />
          <span className='text-sm font-medium'>Powered by BeePoster.com</span>

        </Md2PosterFooter>
      </Md2Poster>
    </main>
  )
}

export default App
