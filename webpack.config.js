const path = require("path");

module.exports = {
  entry: "./src/index.ts",

  devtool: "inline-source-map",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  mode: "production",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
