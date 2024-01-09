/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: true,
    productionBrowserSourceMaps: true,
    compress: true,
    cleanDistDir: true,
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mynewfoliobucket.s3.ap-south-1.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
}

module.exports = nextConfig
