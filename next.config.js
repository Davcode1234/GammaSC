/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  // images: {
  //   domains: ["images.ctfassets.net"],
  // },

  // Testing loader config for static deploy

  images: {
    loader: "custom",
    loaderFile: "./components/loader.js",
  },

  // i18n: {
  //   locales: ["pl", "en"],
  //   defaultLocale: "pl",
  // },
};

module.exports = nextConfig;
