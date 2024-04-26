import React, { ReactNode } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { cn } from '../../lib/utils'

interface Props {
  children: string | ReactNode
  className?: string
  markdownProps?: Record<string, any>
  articleClassName?: string
}
const Md2PosterContent = ({ children, className, markdownProps, articleClassName = 'prose prose-gray' }: Props) => {
  const wrapClassName = 'flex flex-col bg-white p-4 rounded-2xl border'
  if (typeof children === 'string') {
    return (
      <div className={cn(wrapClassName, className)}>
        <article className={articleClassName}>
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} {...markdownProps}>
            {children}
          </Markdown>
        </article>
      </div>
    )
  }
  return <div className={cn(wrapClassName, className)}>{children}</div>
}

export default Md2PosterContent
