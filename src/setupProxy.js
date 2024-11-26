require('dotenv').config();
const { createProxyMiddleware } = require('http-proxy-middleware');

const target = process.env.PROXY_TARGET;

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
  app.use(
    '/login',
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
};
