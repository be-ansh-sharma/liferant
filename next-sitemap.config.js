/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.liferant.org/',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
