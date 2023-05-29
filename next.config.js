/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "amorea.dk",

        path: "/exam/finalExam/**/*",
      },
    ],
    domains: ["omhucph.com", "images.unsplash.com", "storage.googleapis.com", "amorea.dk", "www.amorea.dk"],
  },
};

module.exports = nextConfig;
