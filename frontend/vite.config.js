import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

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
			},
		},
	},
	build: {
		outDir: 'dist',
	},
	plugins: [
		react(),
		svgr(),
		VitePWA({
			strategies: 'generateSW',
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true,
			},
			workbox: {
				globPatterns: ['**/*.{js,jsx,css,html,png,svg,jpg,jpeg,webp,json}'],
				skipWaiting: true,
				clientsClaim: true,
				navigateFallbackDenylist: [/^\/admin/],
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/res.cloudinary*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'rabbit-images',
							expiration: {
								maxEntries: 20,
								maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
							},
							cacheableResponse: {
								statuses: [0, 200],
							},
						},
					},
					{
						urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'google-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
							},
							cacheableResponse: {
								statuses: [0, 200],
							},
						},
					},
					{
						urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'gstatic-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
							},
							cacheableResponse: {
								statuses: [0, 200],
							},
						},
					},
					{
						urlPattern: ({ url }) => url.pathname.startsWith('/api/rabbits/'),
						handler: 'StaleWhileRevalidate',
						options: {
							cacheName: 'rabbits-data',
							expiration: {
								maxEntries: 20,
								maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
							},
							cacheableResponse: {
								statuses: [0, 200],
							},
						},
					},
				],
			},
			manifest: {
				id: 'rabbit-rescue',
				short_name: 'Rabbit Rescue',
				name: 'Hopper Farm Rabbit Rescue',
				description:
					'Hopper Farm Rabbit Rescue is a fictional animal-rescue charity.',
				lang: 'en-US',
				theme_color: '#11644d',
				icons: [
					{
						src: '/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable',
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any',
					},
				],
				screenshots: [
					{
						src: '/screenshot-1.jpeg',
						sizes: '377x668',
						type: 'image/png',
						form_factor: 'narrow',
					},
					{
						src: '/screenshot-2.jpeg',
						sizes: '377x668',
						type: 'image/png',
						form_factor: 'narrow',
					},
					{
						src: '/screenshot-3.jpeg',
						sizes: '600x630',
						type: 'image/png',
						form_factor: 'wide',
					},
					{
						src: '/screenshot-4.jpeg',
						sizes: '600x630',
						type: 'image/png',
						form_factor: 'wide',
					},
				],
				start_url: '/',
				scope: '/',
				display: 'standalone',
				orientation: 'any',
				background_color: '#11644d',
				categories: ['animals', 'charity', 'rabbits'],
				launch_handler: {
					client_mode: ['navigate-existing', 'auto'],
				},
			},
		}),
	],
});
