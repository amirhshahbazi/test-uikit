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
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'uikit',
            formats: ['es', 'umd'],
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
