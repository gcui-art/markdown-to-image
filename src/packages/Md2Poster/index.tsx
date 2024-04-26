import { ReactNode } from 'react'
import { cn } from '../../lib/utils'

type ICardType = 'QuoteCard' | 'NewsDigest'
type IThemeType = 'blue' | 'pink'

interface Props {
  children: string | ReactNode
  className?: string
  theme?: IThemeType
  template?: ICardType
  aspectRatio?: string
}

const themeMapClassName = {
  blue: 'bg-gradient-to-r from-cyan-500 to-blue-500',
  pink: 'bg-gradient-to-r from-purple-500 to-pink-500',
}

const Md2Poster = ({ children, theme = 'blue', template = 'QuoteCard', className }: Props) => {
  const themeClassName = themeMapClassName[theme]
  if (template === 'QuoteCard') {
    return <div className={cn('w-full mt-8 p-6 md:p-10', themeClassName, className)}>{children}</div>
  } else {
    return <div className={cn(className)}>{children}</div>
  }
}

export default Md2Poster
