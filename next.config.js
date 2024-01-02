/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sg360.sungod.co',
                port: '',
                pathname: '/**',

            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/**',

            },
        ]
    }
}

module.exports = nextConfig
