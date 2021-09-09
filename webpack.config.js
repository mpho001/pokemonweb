const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    publicPath: "/",
    contentBase: "./src",
    hot: true,
    historyApiFallback: true
},
  entry: './src/index.tsx',
  mode: "development",
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: ["babel-loader"] 
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|ico)$/,
        use: ["file-loader"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "./public", "index.html"),
        filename: './index.html',
        favicon: './public/favicon.ico',
        manifest: "./public/manifest.json"
    }),
],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};