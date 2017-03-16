import express from 'express';
import compression from 'compression';
import webpack from 'webpack';
import config from './webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
app.use(compression());

console.log(process.env.PORT);
console.log(process.env.NODE_ENV);

const port = (process.env.PORT || 6464);
const compiler = webpack(config);
const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.listen(port, (error) => {
    if (error) {
        console.error(err);
    } else {
        console.info('==> 🚧  Webpack development server listening on port %s', port);
    }
});