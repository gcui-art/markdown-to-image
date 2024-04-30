'use client'
import 'markdown-to-poster/dist/style.css'
import { Md2PosterContent, Md2Poster, Md2PosterHeader, Md2PosterFooter } from 'markdown-to-poster'

export default function MdClient({ str }: { str: string }) {
  return (
    <Md2Poster theme="SpringGradientWave" canCopy className=''>
      <Md2PosterHeader className="flex justify-between items-center px-4">
        <span>@LingGame</span>
        <span>{new Date().toISOString().slice(0, 10)}</span>
      </Md2PosterHeader>
      <Md2PosterContent className='' markdownProps={null}>{str}</Md2PosterContent>
      <Md2PosterFooter className={'inline'}>Powered by BeePoster.com</Md2PosterFooter>
    </Md2Poster>
  )
}
