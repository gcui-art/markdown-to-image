import React, { useRef } from 'react'
import { Md2Poster, Md2PosterContent, Md2PosterHeader, Md2PosterFooter } from './packages'
// import './App.css'

function App() {
  const markdownRef = useRef<any>(null);
 
  const handleCopyFromChild = () => {
    markdownRef?.current?.handleCopy();
  };
  const copySuccessCallback = () => {
    alert('Copy Success');
  }
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
      <Md2Poster theme="SpringGradientWave" size='mobile' ref={markdownRef} copySuccessCallback={copySuccessCallback}>
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
           <button onClick={handleCopyFromChild}>Copy Image</button>
        </Md2PosterFooter>
      </Md2Poster>
    </main>
  )
}

export default App
