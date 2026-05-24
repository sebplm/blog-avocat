/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/contactez-meilleur-avocat-toulouse',
        destination: '/contactez-avocat-toulouse',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
