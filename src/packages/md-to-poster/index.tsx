import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

interface Props {
  md: string;
  className?: string;
}

const MdToPoster = ({ md, className }:Props) => {
  return <div className={className}><Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{md}</Markdown></div>
}

export default MdToPoster