/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
  // i18n: {
  //   locales: ["pl", "en"],
  //   defaultLocale: "pl",
  // },
};

module.exports = nextConfig;
