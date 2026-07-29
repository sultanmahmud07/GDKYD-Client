const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["145.223.21.187", "147.79.117.103", "gdkyd.com", "api.gdkyd.com", "res.cloudinary.com"], 
      },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()'
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' blob: data: https://145.223.21.187 https://147.79.117.103 https://gdkyd.com https://api.gdkyd.com https://res.cloudinary.com https://www.googletagmanager.com https://www.google-analytics.com https://upload.wikimedia.org https://via.placeholder.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://api.gdkyd.com https://www.googletagmanager.com https://www.google-analytics.com; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com https://www.googletagmanager.com; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;"
                    }
                ]
            }
        ];
    }
};
 
module.exports = withNextIntl(nextConfig);
