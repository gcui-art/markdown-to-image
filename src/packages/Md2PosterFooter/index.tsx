import { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface Props {
  children: ReactNode
  className?: string
}

const Md2PosterFooter = ({ children, className }: Props) => {
  return <div className={cn('text-gray-600 py-2', className)}>{children}</div>
}

export default Md2PosterFooter
