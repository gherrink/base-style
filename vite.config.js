/* eslint-disable sort-keys */
import uidoc from '@ui-doc/vite'
import { glob } from 'glob'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'pages',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'pages/index.html'),
        ...(await glob(resolve(__dirname, 'pages/[a-z0-9-_][a-z0-9-_]*/index.html'))),
      },
      output: {
        dir: './dist',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    uidoc({
      settings: {
        generate: {
          logo: () => 'Vite',
        },
        texts: {
          title: 'Base Styles',
        },
      },
      source: ['src/*/css/**/*.css'],
    }),
  ],
})
