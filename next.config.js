/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      // Nausicaa page images
      'images.amcnetworks.com',
      'miro.medium.com',
      'www.brightwalldarkroom.com',
      'm.media-amazon.com',
      'blogger.googleusercontent.com',
      'blog.erikgern.com',
      'static1.srcdn.com',
      'static1.moviewebimages.com',
      'platform.polygon.com',
      'encrypted-tbn0.gstatic.com',
      
      // Totoro page images
      'www.bluedogposters.com.au',
      'amherstwire.com',
      'soranews24.com',
    ],
  },
}

module.exports = nextConfig
