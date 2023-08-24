const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin({
  // identifiers: process.env.NODE_ENV === "production" ? "short" : "debug",
});

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: config => {
    config.optimization.splitChunks = false;

    return config;
  },
};

module.exports = withVanillaExtract(nextConfig);
