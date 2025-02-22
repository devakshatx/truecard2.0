/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseURL: "http://store.your-domain.com", // This represents the base URL for running our frontend project.
    URL: "https://laravel.pixelstrap.net/multikart/api", // Change only the domain part, keeping "/api" intact
    storageURL: "https://laravel.pixelstrap.net/multikart/storage", // Change only the laravel primary domain
    API_PROD_URL: "https://laravel.pixelstrap.net/multikart/api",
    NEW_API_PROD_URL: "http://localhost:3000/api",

  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "laravel.pixelstrap.net",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
