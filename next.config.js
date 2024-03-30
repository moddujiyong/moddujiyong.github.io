/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://mddu.yonsei.ac.kr/"
      : "",
};