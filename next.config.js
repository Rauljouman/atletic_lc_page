/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    legacyBrowsers: false, 
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // --- AÑADE ESTO ---
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'atletic-lc-page.vercel.app', // Tu URL de Vercel
          },
        ],
        destination: 'https://www.atletic-les-corts.com/:path*',
        permanent: true, // Esto envía un código 301 a Google
      },
    ]
  },
};