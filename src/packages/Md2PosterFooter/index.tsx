import { cn } from '../../lib/utils'

interface Md2PosterFooterProps {
  children?: any
  className?: string
}

const Md2PosterFooter = ({ children, className }: Md2PosterFooterProps) => {
  return <div className={cn('text-gray-50 py-4 text-center', className)}>{children}</div>
}

export type { Md2PosterFooterProps }

export default Md2PosterFooter
