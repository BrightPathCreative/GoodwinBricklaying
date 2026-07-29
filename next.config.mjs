/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      // Service slugs shortened so the Google Ads display path fits the
      // 15-character limit. The old URLs were indexed, so these must stay
      // permanently.
      {
        source: "/services/heritage-restoration",
        destination: "/services/heritage",
        permanent: true,
      },
      {
        source: "/services/chimneys-fireplaces",
        destination: "/services/chimneys",
        permanent: true,
      },
      {
        source: "/services/architectural-masonry",
        destination: "/services/architectural",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
