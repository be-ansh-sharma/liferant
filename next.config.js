/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    additionalData: `@import "src/styles/mixins.scss";`,
  }
};

module.exports = nextConfig;
