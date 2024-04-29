import { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface Props {
  children: ReactNode
  className?: string
}

const Md2PosterHeader = ({ children, className }: Props) => {
  return <div className={cn('text-white py-4 text-center', className)}>{children}</div>
}

export default Md2PosterHeader
