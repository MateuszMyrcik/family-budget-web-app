const { i18n } = require('./next-i18next.config')

const nextConfig = {
  experimental: {
    appDir: false,
  },
  i18n,
  transpilePackages: ['@mui/x-charts'],
  
};

module.exports = nextConfig;
