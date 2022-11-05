import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/app.scss";', // 添加公共样式
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 4500,
    // rollupOptions: {
    //   external: ['react-transition-group'],
    // },
  },
});
