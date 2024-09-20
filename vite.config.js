/* eslint-disable sort-keys */
import uidoc from '@ui-doc/vite'
import { glob } from 'glob'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(async ({ command }) => {
  return {
    root: 'pages',

    build: {
      rollupOptions: {
        input: {
          style: 'style.css',
          app: 'app.ts',
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
        output: {
          baseUri: command === 'serve' ? undefined : '.',
        },
        source: ['src/*/css/**/*.css'],
        settings: {
          generate: {
            logo: () => 'Vite',
          },
          texts: {
            title: 'Base Styles',
          },
        },
        assets: {
          static: './assets',
          example: [
            {
              name: 'style',
              fromInput: true,
            },
            {
              name: 'app',
              fromInput: true,
              attrs: {
                type: 'module',
              },
            },
          ],
        },
      }),
    ],
  }
})
