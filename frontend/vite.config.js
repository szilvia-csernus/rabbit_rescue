import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
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
				cookieDomainRewrite: 'localhost',
			},
		},
	},
	build: {
		outDir: 'dist',
	},
	plugins: [react(), svgr()],
});
