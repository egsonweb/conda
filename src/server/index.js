import Koa from 'koa'
import bodyParser from 'koa-better-body'
import serve from 'koa-static'
import compress from 'koa-compress'
import convert from 'koa-convert'
import { Z_SYNC_FLUSH } from 'zlib'

// Add more middleware as you go
import render from './middleware/render'

const app = new Koa()

// Middleware
app.use(convert(bodyParser({
  formLimit: '200kb',
  jsonLimit: '200kb',
  bufferLimit: '4mb'
})))

// Compression middleware
app.use(convert(compress({
  threshold: 2048,
  flush: Z_SYNC_FLUSH
})))

// Serve static files (Change it to public on prod)
app.use(convert(serve('build/public')))

// Apply render middleware
app.use(render)
app.listen(3000, function () {
  console.log('Listening on port 3000')
})
