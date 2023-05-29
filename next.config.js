/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        // pathname: "/exam/finalExam/**/*",
      },
    ],
    domains: ["omhucph.com", "images.unsplash.com", "storage.googleapis.com", "amorea.dk", "www.amorea.dk", "i.imgur.com"],
  },
};

module.exports = nextConfig;
