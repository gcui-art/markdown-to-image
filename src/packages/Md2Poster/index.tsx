import { ReactNode, useRef, useState, useCallback, forwardRef, useImperativeHandle } from 'react'
import { cn } from '../../lib/utils'
import { domToBlob } from 'modern-screenshot'
type ICardType = 'QuoteCard' | 'NewsDigest'
type IThemeType =
  //gradient
  | 'blue'
  | 'pink'
  | 'purple'
  | 'green'
  | 'yellow'
  | 'gray'
  | 'red'
  | 'indigo'
  //image bg
  | 'SpringGradientWave'
type IAspectRatioType = 'auto' | '16/9' | '1/1' | '4/3'
type ISizeType = 'desktop' | 'mobile'

interface Md2PosterProps {
  children?: any
  className?: string
  theme?: IThemeType
  template?: ICardType
  aspectRatio?: IAspectRatioType
  canCopy?: boolean
  size?: ISizeType
  copySuccessCallback?: () => void
  copyFailedCallback?: () => void
}

interface Md2PosterRef {
  handleCopy: () => Promise<unknown>
}

const themeMapClassName = {
  //gradient
  blue: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-500',
  pink: 'bg-gradient-to-br from-pink-600/80  via-red-400/80 to-pink-600/60',
  purple: 'bg-gradient-to-r from-purple-600 to-purple-700',
  green: 'bg-gradient-to-br from-green-600/80 to-green-800/80',
  yellow: 'bg-gradient-to-br from-yellow-500 via-orange-300 to-yellow-500',
  gray: 'bg-gradient-to-br from-black/90  via-gray-700  to-black/90',
  red: 'bg-gradient-to-r from-red-500 to-orange-500',
  indigo: 'bg-gradient-to-br from-indigo-700 via-blue-600/80 to-indigo-700',
  //image bg
  SpringGradientWave: 'bg-spring-gradient-wave bg-cover',
}

const aspectRatioMapClassName = {
  auto: 'aspect-auto',
  '16/9': 'aspect-video',
  '1/1': 'aspect-square',
  '4/3': 'aspect-[4/3]',
}

async function sleep(millisecond: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond)
  })
}

const Button = ({
  loading,
  onClick,
  children,
}: {
  loading?: boolean
  onClick?: () => void
  children?: string | ReactNode
}) => {
  return (
    <button
      className={`flex items-center bg-indigo-50 text-indigo-600 hover:bg-indigo-100 active:bg-indigo-200  
      font-bold py-2 px-4 rounded focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          fill="currentColor"
          viewBox="0 0 512 512"
          className="mr-2 h-4 w-4 animate-spin"
        >
          <path d="M 288 32 Q 288 18 279 9 L 279 9 L 279 9 Q 270 0 256 0 Q 242 0 233 9 Q 224 18 224 32 Q 224 46 233 55 Q 242 64 256 64 Q 270 64 279 55 Q 288 46 288 32 L 288 32 Z M 288 480 Q 288 466 279 457 L 279 457 L 279 457 Q 270 448 256 448 Q 242 448 233 457 Q 224 466 224 480 Q 224 494 233 503 Q 242 512 256 512 Q 270 512 279 503 Q 288 494 288 480 L 288 480 Z M 448 256 Q 448 270 457 279 L 457 279 L 457 279 Q 466 288 480 288 Q 494 288 503 279 Q 512 270 512 256 Q 512 242 503 233 Q 494 224 480 224 Q 466 224 457 233 Q 448 242 448 256 L 448 256 Z M 32 288 Q 46 288 55 279 L 55 279 L 55 279 Q 64 270 64 256 Q 64 242 55 233 Q 46 224 32 224 Q 18 224 9 233 Q 0 242 0 256 Q 0 270 9 279 Q 18 288 32 288 L 32 288 Z M 75 437 Q 85 446 98 446 L 98 446 L 98 446 Q 110 446 120 437 Q 130 427 130 414 Q 130 402 120 392 Q 110 382 98 382 Q 85 382 75 392 Q 66 402 66 414 Q 66 427 75 437 L 75 437 Z M 392 437 Q 405 450 423 447 Q 441 441 447 423 Q 450 405 437 392 Q 424 378 406 382 Q 387 387 382 406 Q 378 424 392 437 L 392 437 Z M 75 75 Q 66 85 66 98 L 66 98 L 66 98 Q 66 110 75 120 Q 85 130 98 130 Q 110 130 120 120 Q 130 110 130 98 Q 130 85 120 75 Q 110 66 98 66 Q 85 66 75 75 L 75 75 Z" />
        </svg>
      )}
      {children}
    </button>
  )
}

const Md2Poster = forwardRef<Md2PosterRef, Md2PosterProps>(
  (
    {
      children,
      theme = 'blue',
      className,
      canCopy,
      aspectRatio = 'auto',
      size = 'mobile',
      copySuccessCallback,
      copyFailedCallback,
    }: Md2PosterProps,
    ref
  ) => {
    const aspectRatioClassName = aspectRatioMapClassName[aspectRatio]
    const themeClassName = themeMapClassName[theme]
    const mdRef = useRef<HTMLDivElement>(null)
    const [loading, setLoading] = useState(false)
    const sizeClassName = size === 'mobile' ? 'max-w-lg p-6' : 'max-w-4xl p-16'


    const handleCopy = useCallback(async () => {
      return new Promise(async (resolve, reject) => {
        const element = mdRef.current
        if (element === null) {
          return
        }
        setLoading(true)
        await sleep(100)
        try {
          const blob = (await domToBlob(element)) as Blob
          await navigator.clipboard.write([
            new ClipboardItem({
              'image/png': blob,
            }),
          ])
          // alert('Image copied to clipboard successfully~')
          copySuccessCallback?.()
          resolve(blob)
          console.log('Image copied to clipboard:', blob)
        } catch (error) {
          copyFailedCallback?.()
          reject(error)
          console.error('Failed to copy image to clipboard:', error)
        } finally {
          setLoading(false)
        }
      })
    }, [mdRef])

    useImperativeHandle(ref, () => ({
      handleCopy,
    }))

    const renderCopy = () => {
      return (
        canCopy && (
          <span className="py-2 inline-block">
            <Button onClick={handleCopy} loading={loading}>
              copy
            </Button>
          </span>
        )
      )
    }

    return (
      <>
        <div
          ref={mdRef}
          className={cn('w-full relative', themeClassName, aspectRatioClassName, className, sizeClassName)}
        >
          {children}
        </div>
        {renderCopy()}
      </>
    )
  }
)

export type { Md2PosterProps }

export default Md2Poster
