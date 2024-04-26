import { Md2Poster, Md2PosterContent, Md2PosterHeader, Md2PosterFooter } from './packages'
import './App.css'

const Footer = () => {
  return (
    <div className="border-t pt-[12px]">
      <div className="flex justify-between w-full">
        <div className="flex items-center justify-center">
          <blockquote className="text-sm border-l-4 pl-2 border-slate-00 text-slate-400">
            Power by <br />
            <span className="text-source">BeePoster</span>
          </blockquote>
        </div>
        {/* <div className="text-sm pr-2">
        <a href={threadUrl} target="_blank">
          <QRCode size={48} fgColor="#94a3b8" value={threadUrl} />
        </a>
      </div> */}
      </div>
    </div>
  )
}

function App() {
  const MdDom = () => {
    return (
      <article className="prose lg:prose-xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with
          the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for
          Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up
          around the country.
        </p>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </article>
    )
  }
  const markdown = `
  # h1 test
  ## h2 
  A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * todo
  * done
  `

  return (
    <div className="flex max-w-5xl mx-auto flex-col py-2 min-h-screen">
      <main className="flex max-w-2xl sm:max-w-xl w-full flex-col mx-auto">
        <Md2Poster theme="pink">
          <Md2PosterHeader>test header</Md2PosterHeader>
          <Md2PosterContent>{markdown}</Md2PosterContent>
          <Md2PosterFooter>test footer</Md2PosterFooter>
        </Md2Poster>
      </main>
    </div>
  )
}

export default App
