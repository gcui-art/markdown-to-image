import { ReactNode } from 'react'
type ICardType = 'QuoteCard' | 'NewsDigest'
type IThemeType = 'blue' | 'pink' | 'purple' | 'green' | 'yellow' | 'gray' | 'red' | 'indigo' | 'SpringGradientWave'
type IAspectRatioType = 'auto' | '16/9' | '1/1' | '4/3'
type ISizeType = 'desktop' | 'mobile'
interface Md2PosterProps {
  children: string | ReactNode
  className?: string
  theme?: IThemeType
  template?: ICardType
  aspectRatio?: IAspectRatioType
  canCopy?: boolean
  size?: ISizeType
}
declare const Md2Poster: ({
  children,
  theme,
  template,
  className,
  canCopy,
  aspectRatio,
  size,
}: Md2PosterProps) => import('react/jsx-runtime').JSX.Element
export type { Md2PosterProps }
export default Md2Poster
