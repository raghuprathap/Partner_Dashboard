var path = require('path');

module.exports = {
	devtool: 'cheap-eval-source-map',

	entry: {
    app: ['./client/src/js/main.jsx']
  },
  output: {
    path: path.join(__dirname, 'client', 'assets'),
    //publicPath: './client/assets/',
    filename: 'bundle.js'
  },

  module: {
    loaders : [{
     loader: 'babel',
     test : /\.jsx$/
   },
   ]
 },

 node: {
  fs: "empty",
  net:"empty"
},

devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.join(__dirname, 'client', 'assets'),
    hot: true,
    proxy: {
      '/api/*' : 'http://localhost:3000',
    }
  },

watch: true,

resolve: {
  extensions: ['','.js','.jsx','/index','/index.js','/index.jsx']
}

}