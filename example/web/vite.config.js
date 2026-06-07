import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react({
      include: /\.(jsx|js|tsx|ts)$/,
    }),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'multi-nation-input': path.resolve(
        __dirname,
        '../../src/index.js',
      ),
    },
    extensions: ['.web.js', '.web.jsx', '.js', '.jsx', '.json'],
  },
  optimizeDeps: {
    include: ['react-native-web'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
