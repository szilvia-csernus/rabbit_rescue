import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default {
    server: {
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8000',
				changeOrigin: true,
			},
			'/static/': {
				target: 'http://127.0.0.1:8000',
				changeOrigin: true,
			},
			'/admin/': {
				target: 'http://127.0.0.1:8000',
				changeOrigin: true,
			},
		},
	},
    build: {
        outDir: 'dist',
    },
    plugins: [react(), svgr()],
};
