/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://neural-lab.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  alternateRefs: [
    {
      href: 'https://neural-lab.vercel.app/pt',
      hreflang: 'pt-BR',
    },
    {
      href: 'https://neural-lab.vercel.app/en',
      hreflang: 'en-US',
    },
  ],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};