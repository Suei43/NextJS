/** @type {import('next').NextConfig} */
const nextConfig = {}
const path = require("path");

module.exports = {
  // Tell Next.js to use the "src" directory as the root directory
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./src"));
    return config;
  },
};