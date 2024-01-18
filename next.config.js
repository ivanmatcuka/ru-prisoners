/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
    ],
  },
  env: {
    GOOGLE_APPS_SCRIPT:
      "https://script.google.com/macros/s/AKfycbysV3IICH5jx0_uTRF1Uq2vdOtXQBiEHkG6Hqklj0DuCulUeCq3Y0G17uEloatLykdr/exec",
    GOOGLE_MAPS_URL:
      "https://www.google.com/maps/place/Alfred+Schnittke+Akademie+International/@53.5485088,9.9364534,17z/data=!3m1!4b1!4m6!3m5!1s0x47b1858713b7ec71:0xe2057c9e75a1dd73!8m2!3d53.5485088!4d9.9364534!16s%2Fg%2F1tfpnrnf?hl=de-de&entry=ttu",
  },
};

module.exports = nextConfig;
