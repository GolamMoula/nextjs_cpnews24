/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'capitalnews24.net',
          port: '',
          pathname: '/storage/uploads/**',
        },
      ],
    },
    typescript:{
      ignoreBuildErrors:true,
    },
  }
