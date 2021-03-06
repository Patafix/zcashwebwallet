'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	devtool: "source-map",
	devServer: {inline: true, hot: true, clientLogLevel: "info"},
	entry: [
		'babel-polyfill',
		'react-hot-loader/patch',
		path.join(__dirname, 'app/main.jsx'),
	],
	output: {
		path: path.join(__dirname, '/public/'),
		filename: 'app.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.less', '.css']
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'app/index.tpl.html'),
			inject: 'body',
			filename: 'index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
		new ExtractTextPlugin("styles.css"),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
        new webpack.NamedModulesPlugin(),
        new CopyWebpackPlugin([
        	{ from: path.join(__dirname, 'app/static/media/favicon.ico'), to: 'favicon.ico'}
		])
    ],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					"presets": ["latest", "stage-0", "react"]
				}
			},
			{
				test: /\.json?$/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.less/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'less-loader']
				})
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=public/fonts/[name].[ext]'
			},
			{
				test: /\.(jpe?g|png|gif|svg|ico)$/i,
				loaders: [
					'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack-loader'
				],
				include: /static/
			}
		]
	}
};
