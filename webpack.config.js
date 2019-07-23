const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: './src/main.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			"vue$": "vue/dist/vue.esm.js"
		}
	},
	devServer:{
		open: true,
		port: 8090,
		contentBase: 'src',
		hot: true
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
			filename: 'index.html'
		}),
		new VueLoaderPlugin()
	],
	module:{
		rules:[
			{
				test: /\.css$/,
				use: [
					'style-loader', 
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						} 
					}
				]
			},
			{
				test: /\.(jpg|jpeg|gif|png|bmp)$/, 
				use: {
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: '[name][hash:8].[ext]'
						}
					}
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader'
			}
		]	
	}
}