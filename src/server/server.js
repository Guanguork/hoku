const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/assets/',
    stats: {
      colors: true
    },
    historyApiFallback: true
  })
);

app.use(
  webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 10
  })
);
app.use(express.static(path.resolve(__dirname, '../../www')));
/* app.get('/', function(req, res) {
  res.send(`
  <head>
  <style>
  body {
    background: coral;
  }
  </style>
  </head>
  <body>
  <script src='assets/bundle.js'></script>
  </body>`);
}); */

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log(host, port);
});
