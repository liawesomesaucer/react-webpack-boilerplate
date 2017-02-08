require('babel-register');
require('dotenv').config();
var path = require('path');
var express = require('express');
var session = require('express-session');
var compression = require('compression');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/containers/Application').routes;
var isDevelopment = process.env.NODE_ENV === 'development';
var debug = require('debug')('app:log');
const match = Router.match;
const fs = require('fs');
var apiRoutes = require('./routes');
var app = express();
var port = process.env.PORT || 8888;
var staticPath = isDevelopment ? path.join(__dirname, '/app') : path.join(__dirname, '/dist');
const S_IN_YR = 31536000;
app.use(express.static(staticPath, { maxAge: S_IN_YR }));
app.use(compression());

app.set('trust proxy', true);

apiRoutes(app);
app.all('*', send404);
var indexFile = process.env.NODE_ENV === 'development' ? path.join(__dirname, '/app/index.dev.html') : path.join(__dirname, '/dist/index.html');

function send404 (req, res) {
  res.status(404).sendFile(indexFile);
}

function getHandleRender() {
  return function handleRender(req, res) {
    debug(`req.session.id is ${req.session.id}`);
    match({ routes, location: req.url }, function(error, redirectLocation, renderProps) {
      if (error) {
        debug("[match]: error", error);
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        debug("[match]: redirectLocation", redirectLocation);
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        if (typeof renderProps.routes[1] !== 'undefined' && renderProps.routes[1].status == 404) {
          res.status(404).sendFile(indexFile);
        } else {
          res.sendFile(indexFile);
        }
      } else {
        debug("[match]: Not found");
        res.status(404).sendFile(indexFile);
      }
    });
  }
}

app.listen(port, function() {
    console.info(`🌎  Listening on port ${port} in ${process.env.NODE_ENV} mode on Node ${process.version}.`);
})
