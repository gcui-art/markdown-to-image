import { MdToPoster } from './packages'
import './App.css'

function App() {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  `

  return (
    <div>
     <MdToPoster md={markdown}/>
    </div>
  )
}

export default App
