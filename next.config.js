/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  // ADD THIS REWRITES CONFIGURATION
  async rewrites() {
    return [
      {
        source: '/portfolio', // The URL path you want to expose (what the user types)
        destination: '/static-portfolio/index.html', // The actual path to your static index.html in public
      },
      {
        source: '/portfolio/:path*', // For all assets within the static site
        destination: '//:path*', // Map them to the correct static asset location
      },
      {
        source: '/cv/en',
        destination: '/static-portfolio/assets/CV/Hakam_Koubaa_CV_EN.pdf',
      },
      {
        source: '/cv/fr',
        destination: '/static-portfolio/assets/CV/Hakam_Koubaa_CV_FR.pdf',
      },

    ];
  },
};

module.exports = nextConfig;