'use client'
import { useState, useRef } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Md2PosterContent, Md2Poster, Md2PosterHeader, Md2PosterFooter, Md2PosterProps } from 'markdown-to-poster'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import MDEditor from '@uiw/react-md-editor';


export function SwitchCopy({
  onChange,
  defaultChecked,
}: {
  onChange: (value: boolean) => void
  defaultChecked: boolean
}) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="canCopy" onCheckedChange={(checked) => onChange?.(checked)} defaultChecked={defaultChecked} />
      {/* <Label htmlFor="canCopy">canCopy</Label> */}
    </div>
  )
}

function RadioGroupAspectRatio({ onChange, defaultValue }: { onChange: (value) => void; defaultValue: string }) {
  const list = ['auto', '16/9', '1/1', '4/3']
  return (
    <RadioGroup
      defaultValue={defaultValue}
      onValueChange={(v) => {
        onChange?.(v)
      }}
    >
      {list.map((item) => {
        return (
          <div className="flex items-center space-x-2" key={item}>
            <RadioGroupItem value={item} id={item} />
            <Label htmlFor="r1">{item}</Label>
          </div>
        )
      })}
    </RadioGroup>
  )
}

function RadioGroupSize({ onChange, defaultValue }: { onChange: (value) => void; defaultValue: string }) {
  return (
    <RadioGroup
      className="flex"
      defaultValue={defaultValue}
      onValueChange={(v) => {
        onChange?.(v)
      }}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="mobile" id="mobile" />
        <Label htmlFor="r1">mobile</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="desktop" id="desktop" />
        <Label htmlFor="r2">desktop</Label>
      </div>
    </RadioGroup>
  )
}

function SelectTheme({ onChange, defaultValue }: { onChange: (value) => void; defaultValue: string }) {
  const list = ['blue', 'pink', 'purple', 'green', 'yellow', 'gray', 'red', 'indigo', 'SpringGradientWave']
  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={(value) => {
        onChange?.(value)
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {list.map((item) => {
          return (
            <SelectItem value={item} key={item}>
              {item}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

export default function EditProps() {
  const markdownRef = useRef<any>(null)
  const textareaRef = useRef(null)
  const [mdString, setMdString] = useState(`# AI Morning News - April 29th
  ![image](https://imageio.forbes.com/specials-images/imageserve/64b5825a5b9b4d3225e9bd15/artificial-intelligence--ai/960x0.jpg?format=jpg&width=1440)
  1. **MetaElephant Company Releases Multi-Modal Large Model XVERSE-V**: Supports image input of any aspect ratio, performs well in multiple authoritative evaluations, and has been open-sourced.
  2. **Tongyi Qianwen Team Open-Sources Billion-Parameter Model Qwen1.5-110B**: Uses Transformer decoder architecture, supports multiple languages, and has an efficient attention mechanism.
  3. **Shengshu Technology and Tsinghua University Release Video Large Model Vidu**: Adopts a fusion architecture of Diffusion and Transformer, generates high-definition videos with one click, leading internationally.
  4. **Mutable AI Launches Auto Wiki v2**: Automatically converts code into Wikipedia-style articles, solving the problem of code documentation.
  5. **Google Builds New Data Center in the U.S.**: Plans to invest $3 billion to build a data center campus in Indiana, expand facilities in Virginia, and launch an artificial intelligence opportunity fund.
  6. **China Academy of Information and Communications Technology Releases Automobile Large Model Standard**: Aims to standardize and promote the intelligent development of the automotive industry.
  7. Kimi Chat Mobile App Update: Version 1.2.1 completely revamps the user interface, introduces a new light mode, and provides a comfortable and intuitive experience.
    `)
  const [theme, setTheme] = useState<any>('SpringGradientWave')
  const [size, setSize] = useState<any>('mobile')
  const [radio, setRadio] = useState<any>('auto')
  const [canCopy, setCanCopy] = useState<boolean>(false)

  const copySuccessCallback = () => {
    console.log('copySuccessCallback')
    alert('copySuccessCallback')
  }

  return (
    <div className="mt-10">
      {/* <Card className="mb-10">
        <CardHeader>
          <CardTitle>
            <h2>API</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <article className="prose lg:prose-xl mb-6">1111</article>
        </CardContent>
      </Card> */}
      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>Real-time editing of properties for the markdown-to-poster component.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <div className="w-1/2 space-y-4 pr-4">
              <div className="flex items-center space-x-2">
                <div className="text-gray-400">theme:</div>
                <SelectTheme defaultValue={theme} onChange={(v) => setTheme(v)} />
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-gray-400">size:</div>
                <RadioGroupSize defaultValue={size} onChange={(v) => setSize(v)} />
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-gray-400">canCopy:</div>
                <SwitchCopy defaultChecked={canCopy} onChange={(v) => setCanCopy(v)} />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-gray-400">Md2PosterContent:</div>
                <MDEditor
                  height={800}
                  preview='edit'
                  value={mdString}
                  onChange={(value?: string) => setMdString(value||"")}
                />
                {/* <Textarea
                  ref={textareaRef}
                  className="min-h-96"
                  placeholder="Type your markdown here."
                  value={mdString}
                  onChange={(e) => {
                    setMdString(e.target.value)
                  }}
                /> */}
              </div>
              {/* <div className='flex items-center space-x-2'>
          <div className='text-gray-400'>aspectRatio:</div>
          <RadioGroupAspectRatio defaultValue={radio} onChange={(v) => setRadio(v)} />
        </div> */}
            </div>
            <div className="w-full flex justify-end">
              <Md2Poster
                theme={theme}
                copySuccessCallback={copySuccessCallback}
                ref={markdownRef}
                size={size}
                aspectRatio={radio}
                canCopy={canCopy}
              >
                <Md2PosterHeader className="flex justify-center items-center px-4 font-medium text-lg">
                  <span>{new Date().toISOString().slice(0, 10)}</span>
                </Md2PosterHeader>
                <Md2PosterContent>{mdString}</Md2PosterContent>
                <Md2PosterFooter className="text-center">
                  <img src="/logo.png" alt="logo" className="inline-block mr-2 w-5" />
                  Powered by BeePoster.com
                </Md2PosterFooter>
              </Md2Poster>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
