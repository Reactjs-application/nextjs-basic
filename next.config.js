module.exports = () => {
  /** @type {import('next').NextConfig} */

  const nextConfig = {
    distDir: "build",
    reactStrictMode: true,
    env: {},
    swcMinify: true,
    pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
    publicRuntimeConfig: {
      staticFolder: "/static",
    },
    images: {
      deviceSizes: [350, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      formats: ["image/avif", "image/webp"],
      minimumCacheTTL: 60,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
    i18n: {
      locales: ["en-US", "en", "de"],
      defaultLocale: "en-US",
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
