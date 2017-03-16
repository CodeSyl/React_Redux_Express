import path from 'path';
import webpack from 'webpack';
import StatsPlugin from 'stats-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry: [
    path.join(__dirname, '../src/client.js')
  ],
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'js/client.min.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        /**
         * resolve-url-loader fix
         * @reference https://github.com/bholloway/resolve-url-loader/issues/33#issuecomment-249830601
         */
        context: path.join(__dirname, 'src'),
        output: {
          path: path.join(__dirname, 'dist')
        },
        /**
         * Legacy postCSS config
         * @reference https://github.com/azat-io/webpack2-css-modules-demo/blob/master/scripts/webpack.config.babel.js
         */
        postcss: [
          require('autoprefixer')({
            browsers: ['last 2 versions', 'IE > 10'],
            cascade: true,
            remove: true
          }),
          require('css-mqpacker')()
        ]
      }
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),

    new ExtractTextPlugin({ filename: 'css/styles.min.css', disable: false, allChunks: true }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),

    new StatsPlugin('js/webpack.stats.json', {
      source: false,
      modules: false
    })
  ]
};