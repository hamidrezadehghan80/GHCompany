/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aaaaaaaaaaaaaaaaaaaaaaaa.storage.iran.liara.space",
      },
    ],
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA(nextConfig);
