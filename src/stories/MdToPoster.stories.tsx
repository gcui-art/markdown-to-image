import type { Meta, StoryObj } from '@storybook/react'
import { Md2Poster, Md2PosterContent, Md2PosterHeader, Md2PosterFooter } from '../packages/index'

const DemoComponent = () => {
  const markdown = `
  # h1 test
  ## h2 666
  A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * todo
  * done
  `
  return (
    <div>
      <Md2Poster theme="pink" canCopy>
        <Md2PosterHeader>test header</Md2PosterHeader>
        <Md2PosterContent>{markdown}</Md2PosterContent>
        <Md2PosterFooter>test footer</Md2PosterFooter>
      </Md2Poster>
    </div>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/MdToPoster',
  component: DemoComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      control: false,
      description: 'children',
    },
    theme: {
      control: 'text',
      default: 'blue',
      description: 'QuoteCard background color, `blue` | `pink` ',
    },
    canCopy: {
      default: false,
      description: 'show copy button',
    },
    className: {
      control: false,
      description: 'className',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Md2Poster>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
}

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
