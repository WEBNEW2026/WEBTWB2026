import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    base: '/',

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [react()],

    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },

    // ============================================
    // BUILD OPTIMIZATION (Production Performance)
    // ============================================
    build: {
      // Target modern browsers for smaller bundles
      target: 'es2020',

      // Use terser for more aggressive minification
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,      // Remove console.log in production
          drop_debugger: true,     // Remove debugger statements
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
        },
        mangle: {
          safari10: true,          // Fix Safari 10 loop iterator bug
        },
        format: {
          comments: false,         // Remove all comments
        },
      },

      // Chunk splitting strategy for optimal caching
      rollupOptions: {
        // Exclude server-side packages — tidak boleh masuk browser bundle
        external: ['express', 'path', 'fs', 'url', 'http', 'https', 'stream', 'crypto', 'buffer'],

        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-vendor': ['framer-motion', 'lucide-react'],
            'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
            'carousel': ['embla-carousel-react'],
            'datepicker': ['react-datepicker', 'date-fns'],
            'utils': ['dompurify'],
          },
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },

      // Increase chunk size warning limit (after splitting)
      chunkSizeWarningLimit: 500,

      // Enable source maps for production debugging (optional)
      sourcemap: false,

      // CSS code split: false = satu file CSS statis (Fix 2 Pa Rizki)
      cssCodeSplit: false,

      // Asset inlining threshold (4kb)
      assetsInlineLimit: 4096,
    },

    // ============================================
    // DEPENDENCY PRE-BUNDLING
    // ============================================
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'framer-motion',
        'lucide-react',
        'i18next',
        'react-i18next',
      ],
      // Exclude server-side packages (tidak perlu di browser)
      exclude: ['react-datepicker', 'express'],
    },

    // ============================================
    // CSS OPTIMIZATION
    // ============================================
    css: {
      devSourcemap: true,
      postcss: './postcss.config.js',
    },

    // ============================================
    // PREVIEW SERVER (for testing production build)
    // ============================================
    preview: {
      port: 3001,
      host: '0.0.0.0',
    },
  };
});
