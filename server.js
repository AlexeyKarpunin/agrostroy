const express = require('express')
const next = require('next')
const vhost = require('vhost')
const path = require('path');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  const defServer = express()

  server.use(express.static(path.join(__dirname, './public')));
  server.use(express.static(path.join(__dirname, './styles')));
  server.use('/_next', express.static(path.join(__dirname, './next')));

  defServer.get('/', (req, res) => app.render(req, res, '/', req.query))

  defServer.get('/*', (req, res) => app.render(req, res, '/', req.query))

  defServer.all('*', (req, res) => handle(req, res))

  server.use(vhost('lvh.me', defServer))
  server.use(vhost('www.lvh.me', defServer))
  server.use(vhost('moscow.lvh.me', defServer))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://lvh.me:${port}`)
  })
})
