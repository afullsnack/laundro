module.exports = {
  extends: ["next", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/no-unescaped-entities": ["error", { forbid: [">", '"', "}"] }],
  },
};
