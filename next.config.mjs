/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['encrypted-tbn0.gstatic.com'],
    },
    experimental: {
        serverActions: true
    }
};

export default nextConfig;
