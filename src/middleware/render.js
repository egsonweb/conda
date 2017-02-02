import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../shared/App'

function renderHtml(html) {
  const devServerUrl = !process.env.DEV ? '' : 'http://localhost:3001/dist'
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
      ${!devServerUrl ? '<link rel="stylesheet" href="/bundle.css" />' : ''}
    </head>
    <body>
      <div id="wrapper">${html}</div>
      <script src="${devServerUrl + '/bundle.js'}"></script>
    </body>
    </html>
  `;
}

const render = (req, res, next) => {
  const context = {}
  const markup = renderToStaticMarkup(
    <StaticRouter location={req.originalUrl} context={context}>
      <App />
    </StaticRouter>
  )

  if (context.url) {
    res.redirect(301, req.originalUrl)
  } else {
    const html = new Buffer(renderHtml(markup))
    res.set('content-type', 'text/html')
    res.send(html)
  }

  next()
}

export default render