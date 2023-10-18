import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            stream: 'stream-browserify',
            // '~': path.resolve(__dirname, 'src'),
        },
    },

    server: {
        open: true,
    },
});