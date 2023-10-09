/** @type {import('next').NextConfig} */
const nextConfig = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  flexsearch: {
    codebloks: true,
  },
  defaultShowCopyCode: true,
});

module.exports = nextConfig();
