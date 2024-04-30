import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="border-t border-gray-300  flex w-full justify-center py-4 items-center
         text-gray-400 backdrop-blur-2xl font-mono text-sm px-4 lg:px-0
      "
    >
      <p
        className="px-6 py-3 rounded-full flex justify-center items-center gap-2
             hover:text-white duration-200
                "
      ></p>
      <p
        className="px-6 py-3 rounded-full flex justify-center items-center gap-2
             hover:text-white duration-200"
      >
        <span>© 2024</span>
        <Link href="https://github.com/gcui-art/suno-api/">gcui-art/markdown-to-poster</Link>
      </p>
    </footer>
  )
}
