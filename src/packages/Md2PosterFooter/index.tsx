import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Md2PosterFooter = ({ children }: Props) => {
  return <div className="text-gray-600 py-2">{children}</div>
}

export default Md2PosterFooter
