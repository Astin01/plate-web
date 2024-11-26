const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://ec2-3-34-82-232.ap-northeast-2.compute.amazonaws.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/login',
    createProxyMiddleware({
      target: 'http://ec2-3-34-82-232.ap-northeast-2.compute.amazonaws.com',
      changeOrigin: true,
    })
  );

  // app.use(
  //   '/api',
  //   createProxyMiddleware({
  //     target: 'http://localhost:8080',
  //     changeOrigin: true,
  //   })
  // );
  // app.use(
  //   '/login',
  //   createProxyMiddleware({
  //     target: 'http://localhost:8080',
  //     changeOrigin: true,
  //   })
  // );
};
