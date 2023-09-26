/** @type {import('next').NextConfig} */
const nextConfig = {
   async headers() {
      return [
         {
            source: '/:path*',
            headers: [
               { key: 'referrer-policy', value: 'no-referrer'}
            ]
         }
      ]
   }
}

module.exports = nextConfig
