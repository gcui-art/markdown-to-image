import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import dts from 'vite-plugin-dts'

const resolvePath = (str: string) => path.resolve(__dirname, str)

export default defineConfig({
  plugins: [react(), dts({ include: ['src/packages'] })],
  esbuild: {
    pure: ['console.log'],
    drop: ['debugger'],
  },
  build: {
    lib: {
      entry: resolvePath('src/packages/index.tsx'),
      formats: ['es'],
      // name: 'markdown-to-poster',
      // fileName: (format) => `markdown-to-poster.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  server: {
    host: 'localhost',
    port: 5173,
  },
})
