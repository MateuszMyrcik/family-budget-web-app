/** @type {import('next-i18next').UserConfig} */
const path = require('path')
module.exports = {
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    reloadOnPrerender: true,
    localePath: path.resolve("./public/locales"),

  },
}