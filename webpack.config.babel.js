import webpack from 'webpack';
import path from 'path';

export default {
  entry: [
    path.resolve(__dirname, 'src/app.js'),
  ],
  output: {
    path: path.resolve(__dirname, "www/bundle"),
    publicPath: "/www/bundle/",
    filename: 'app.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    root: [
      path.resolve(__dirname, 'src')
    ],
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
        ],
        loader: 'babel-loader',
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/
      },
    ]
  },
  devTool: '#inline-source-map',
  devServer: {
    inline: true,
    hot: true,
    progress: true,
    host: "0.0.0.0",
    port: "8080"
  }
}
