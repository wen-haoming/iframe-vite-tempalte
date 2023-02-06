import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir:'/',
    outDir:'./src/dist',
    rollupOptions: {
      output:{
        entryFileNames:'index.js'
      },
      input: {
        main: resolve(__dirname, './index2.html'),
      },
      // 确保外部化处理那些你不想打包进库的依赖
      // external: ['react'],
      // output: {
      //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //   globals: {
      //     react: 'React',
      //   },
      // }
    },
  },
})



