import { cn } from '../../lib/utils'

interface Md2PosterHeaderProps {
  children?: any
  className?: string
}

const Md2PosterHeader = ({ children, className }: Md2PosterHeaderProps) => {
  return <div className={cn('text-white py-4 text-center', className)}>{children}</div>
}

export type { Md2PosterHeaderProps }


export default Md2PosterHeader
