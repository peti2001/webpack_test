module.exports = {
  entry: './src/entry.js',
  output: {
    path: './js', // This is where images AND js will go
    publicPath: 'http://localhost:5000/js/', // This is used to generate URLs to e.g. images
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.(png|jpeg|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
};