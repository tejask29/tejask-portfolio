/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: true,
    productionBrowserSourceMaps: true,
    compress: true,
    cleanDistDir: true,
    output: 'export'
}

module.exports = nextConfig
