/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['page.tsx', 'page.ts'],
	transpilePackages: ['react-tilt'],
};

module.exports = nextConfig;
