module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }], // Essential for JSX
    "@babel/preset-typescript", // This handles the "text: string" syntax
  ],
};
