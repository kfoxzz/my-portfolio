/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FORWARDEMAIL_USERNAME: process.env.FORWARDEMAIL_USERNAME,
    FORWARDEMAIL_PASSWORD: process.env.FORWARDEMAIL_PASSWORD,
  },
};

module.exports = nextConfig;
