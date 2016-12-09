var path = require('path');
//require("file?name=html-[hash:6].html!./src/index.html");
//var HtmlWebpackPlugin = require('html-webpack-plugin');
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

		/*{
        test: /\.html$/,
        loader: 'file'
      },*/]
	},

	/*plugins: [
    new HtmlWebpackPlugin({
      title: 'React Dev Setup',
      filename: 'index.html',
      appMountId: 'content'
    })
  ],*/

  node: {
  fs: "empty",
  net:"empty"
},

	watch: true,

	resolve: {
    extensions: ['','.js','.jsx','/index','/index.js','/index.jsx']
  }

}