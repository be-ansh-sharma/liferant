/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    additionalData: `@import "src/styles/mixins.scss";`,
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA(nextConfig);
