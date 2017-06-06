'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	entry: [
		'babel-polyfill',
		path.join(__dirname, 'app/main.jsx')
	],
	output: {
		path: path.join(__dirname, '/public/'),
		filename: '[name]-[hash].min.js',
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
		new ExtractTextPlugin('[name]-[hash].min.css'),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false,
				screw_ie8: true
			}
		}),
		new StatsPlugin('webpack.stats.json', {
			source: false,
			modules: false
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
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
					"presets": ["es2015", "stage-0", "react"]
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
