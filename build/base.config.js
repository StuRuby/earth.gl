const path = require('path');

const node_modules = path.resolve(__dirname, '../node_modules');

module.exports = {
	node: {
		fs: 'empty',
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)$/,
				use: {
					loader: 'babel-loader',
				},
				include: [path.resolve(__dirname, '../src')],
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				test: /\.css$/,
				exclude: [node_modules],
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(gif|jpe?g|png|xml|woff|svg|eot|ttf)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
						},
					},
				],
			},
		],
	},
	resolve: {
		modules: [path.resolve(__dirname, '../src'), 'node_modules'],
		extensions: ['.ts', '.js', '.json'],
		alias: {
			'@earth': path.resolve(__dirname, '../src/'),
		},
	},
	plugins: [],
};
