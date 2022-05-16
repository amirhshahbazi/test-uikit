import { defineConfig } from 'vite'
import reactPlugin from '@vitejs/plugin-react'
import * as path from 'path'
import dtsPlugin from "vite-plugin-dts"

export default defineConfig({
    plugins: [
        reactPlugin(),
        dtsPlugin({
            insertTypesEntry: true
        })
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/components/index.ts'),
            name: 'uikit',
            formats: ['es'],
            fileName: (extension) => `uikit.${extension}.js`
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
})
