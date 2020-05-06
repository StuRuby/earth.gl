'use strict';

const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = ({ config, mode }) => ({
	...config,
	externals: {
		...config.externals,
		cesium: 'Cesium',
	},
	module: {
		...config.module,
		rules: [
			...config.module.rules,
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
					options: {
						// Workaround of https://github.com/TypeStrong/ts-loader/issues/919
						reportFiles: ['../src/**/*.ts{,x}', '!../src/*.test.ts{,x}'],
					},
				},
			},
			{
				test: /(\.?stories|story)\.tsx?$/,
				use: {
					loader: '@storybook/source-loader',
					options: { parser: 'typescript' },
				},
				enforce: 'pre',
			},
			{
				test: /.(glb|pnts)$/,
				use: 'file-loader',
			},
		],
	},
	plugins: [
		...config.plugins,
		new webpack.DefinePlugin({
			CESIUM_BASE_URL: JSON.stringify('/cesium'),
		}),
		...(mode === 'PRODUCTION'
			? []
			: [
					new CopyPlugin([
						{
							from: 'node_modules/cesium/Build/Cesium',
							to: 'cesium',
						},
					]),
			  ]),
	],
	resolve: {
		...config.resolve,
		alias: {
			...config.alias,
			assets: path.resolve(__dirname, './assets'),
			'@earth': path.resolve(__dirname, '../src'),
		},
		extensions: [...config.resolve.extensions, '.ts', '.tsx'],
	},
});
