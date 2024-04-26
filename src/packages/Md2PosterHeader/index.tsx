import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Md2PosterHeader = ({ children }: Props) => {
  return <div className="text-white py-2">{children}</div>
}

export default Md2PosterHeader
