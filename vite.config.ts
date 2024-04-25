import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

const resolvePath = (str: string) => path.resolve(__dirname, str)

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolvePath('src/packages/index.tsx'),
      name: 'markdown-to-poster',
      fileName: (format) => `markdown-to-poster.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
  },
})
