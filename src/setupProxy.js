// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
  const apiProxyConfig = {
    pathRewrite: (path) => path.replace('/api', ''),
    target:
      'https://api.mockfly.dev/mocks/c9842c6c-cf70-4df4-b471-b645ea9048c1/',
    secure: true,
    changeOrigin: true,
  }

  app.use(createProxyMiddleware('/api', apiProxyConfig))
}
