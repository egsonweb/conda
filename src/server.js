import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import hpp from 'hpp'
import helmet from 'helmet'
import serve from 'serve-static'

import render from './middleware/render'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(compression())
app.use(hpp())
app.use(helmet())
app.use(serve('dist/public'))
app.use(render)

app.listen(port, (err) => {
  if (err) console.log(err)

  console.log(`=> Listening on http://localhost:${port}`)
})