'use client'
import dynamic from 'next/dynamic';
import React, { useState, ChangeEvent, TextareaHTMLAttributes } from 'react'

const Md2Poster = dynamic(() => import('./MdClient'), {
  ssr: false
});


const Textarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ onChange, ...rest }) => {
  return (
    <textarea
      className="border rounded-md p-2 w-full bg-gray-100 min-h-40 resize-none h-full"
      {...rest}
      onChange={(e) => onChange?.(e)}
    />
  )
}

const defaultMd = `
# AI Morning News - April 29th
![image](https://imageio.forbes.com/specials-images/imageserve/64b5825a5b9b4d3225e9bd15/artificial-intelligence--ai/960x0.jpg?format=jpg&width=1440)
1. **MetaElephant Company Releases Multi-Modal Large Model XVERSE-V**: Supports image input of any aspect ratio, performs well in multiple authoritative evaluations, and has been open-sourced.
2. **Tongyi Qianwen Team Open-Sources Billion-Parameter Model Qwen1.5-110B**: Uses Transformer decoder architecture, supports multiple languages, and has an efficient attention mechanism.
3. **Shengshu Technology and Tsinghua University Release Video Large Model Vidu**: Adopts a fusion architecture of Diffusion and Transformer, generates high-definition videos with one click, leading internationally.
4. **Mutable AI Launches Auto Wiki v2**: Automatically converts code into Wikipedia-style articles, solving the problem of code documentation.
5. **Google Builds New Data Center in the U.S.**: Plans to invest $3 billion to build a data center campus in Indiana, expand facilities in Virginia, and launch an artificial intelligence opportunity fund.
6. **China Academy of Information and Communications Technology Releases Automobile Large Model Standard**: Aims to standardize and promote the intelligent development of the automotive industry.
7. Kimi Chat Mobile App Update: Version 1.2.1 completely revamps the user interface, introduces a new light mode, and provides a comfortable and intuitive experience.
  `

export default function Editor() {
  const [mdString, setMdString] = useState(defaultMd)
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMdString(e.target.value)
  }

  return (
    <div className="flex flex-row py-4 md:space-x-4">
        <div className="w-1/2">
          {/* Edit */}
          <Textarea placeholder="markdown" onChange={handleChange} defaultValue={mdString} />
        </div>
        <div className="w-1/2 mx-auto flex justify-center">
          {/* Preview */}
          <div className='flex flex-col w-fit'>
            <Md2Poster str={mdString} />
          </div>
        </div>
      </div>
  )
}
