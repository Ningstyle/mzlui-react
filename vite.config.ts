import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';
import { resolve } from 'path';

const resolvePath = (str: string) => resolve(__dirname, str);
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "./src/styles/index.scss";@import "./src/styles/variable.scss";@import "./src/styles/custom.scss";@import "./src/styles/theme.scss";', // 添加公共样式
      },
    },
  },
  build: {
    lib: {
      entry: resolvePath('packages/index.ts'),
      name: 'mzl-ui-rt',
      fileName: (format) => `mzl-ui-rt.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
      plugins: [
        typescript({
          tslib: resolve('typescript'),
          // exclude:['packages/**/*index.ts'],
          outDir: resolvePath('dist'),
        }),
      ],
    },
  },
});
