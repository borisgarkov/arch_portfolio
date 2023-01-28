/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'source.unsplash.com',
				port: '',
				pathname: '/random/**',
			},
		],
	},
}

module.exports = nextConfig
//  https://source.unsplash.com/random/tree/