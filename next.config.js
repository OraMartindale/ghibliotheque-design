/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.amcnetworks.com',
      'miro.medium.com',
      'www.brightwalldarkroom.com',
      'm.media-amazon.com',
      'blogger.googleusercontent.com',
      'blog.erikgern.com',
      'static1.srcdn.com',
      'static1.moviewebimages.com',
      'encrypted-tbn0.gstatic.com',
      'platform.polygon.com'
    ],
  },
}

module.exports = nextConfig
