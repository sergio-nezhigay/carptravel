require('dotenv').config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  ignoreDuringBuilds: true,
};

module.exports = nextConfig;
