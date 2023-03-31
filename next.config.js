/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
				pathname: '/images/**',
			},
		],
		// loader: 'default',
		// domains: ['assets-us-01.kc-usercontent.com'],**
		// deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		// formats: ['image/webp'],
	},
	// output: 'export',
	// distDir: 'dist',
}

module.exports = nextConfig
