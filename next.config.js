module.exports = () => {
  /** @type {import('next').NextConfig} */

  const nextConfig = {
    distDir: "build",
    reactStrictMode: true,
    env: {},
    basePath: "",
    swcMinify: true,
    pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
    publicRuntimeConfig: {
      staticFolder: "/static",
    },
    webpack: (config, { isServer }) => {
      const cfg = {
        ...config,
        resolve: {
          ...config.resolve,
        },
      };

      if (!isServer) {
        cfg.optimization.splitChunks = {
          chunks: "all",
          minSize: 20480,
          cacheGroups: {
            default: {
              reuseExistingChunk: true,
              priority: -40,
              minChunks: 2,
            },
          },
        };
      }

      return cfg;
    },
  };

  return nextConfig;
};
