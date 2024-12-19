import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { cn } from '../../lib/utils'


interface Md2PosterContentProps {
  children?: any
  className?: string
  markdownProps?: Record<string, any>
  articleClassName?: string
}


const Md2PosterContent = ({
  children, className, markdownProps,
  articleClassName = 'prose prose-gray prose-img:rounded-lg prose-img:border prose-img:opacity-100'
}: Md2PosterContentProps) => {
  const wrapClassName = 'flex flex-col bg-white px-4 sm:px-8 py-8 rounded-2xl border shadow-2xl shadow-gray-950/50'
  if (typeof children === 'string' && typeof window !== 'undefined') {
    return (
      <div className={cn(wrapClassName, className)}>
        <article className={articleClassName}>
          <Markdown
            components={{
              img: ({ node, src, ...rest }: {
                node?: any;
                src?: string;
                [key: string]: any;
              }) => {
                const ORIGIN_HOST = 'https://api.allorigins.win/raw'
                const newSrc = src ? `${ORIGIN_HOST}?url=${encodeURIComponent(src)}` : src
                return <img {...rest} src={newSrc} />
              },
            }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            {...markdownProps}
          >
            {children}
          </Markdown>
        </article>
      </div>
    )
  }
  return <div className={cn(wrapClassName, className)}>{children}</div>
}

export type { Md2PosterContentProps }

export default Md2PosterContent
