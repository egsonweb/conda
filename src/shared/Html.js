import React from 'react';
import Helmet from 'react-helmet';
import App from './App';

class Html extends React.Component {
  render() {
    const head = Helmet.rewind();
    const devServerURL = !process.env.DEV ? '' : 'http://localhost:3001/build';

    return (
      <html>
        <head>
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

          {/* Favicons */}
          {/* <link rel="icon" href="/favicon.ico"/> */}

          {/* Bundled CSS */}
          { !process.env.DEV ? <link href={devServerURL + '/bundle.css'} rel="stylesheet" /> : null }
        </head>
        <body>
          {/* Our content rendered here */}
          <div id="wrapper">
            <App>
              {this.props.children}
            </App>
          </div>

          {/* Bundled JS */}
          <script src={devServerURL + '/bundle.js'}></script>
        </body>
      </html>
    );
  }
}

export default Html;
