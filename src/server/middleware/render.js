import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ServerRouter, createServerRenderContext } from 'react-router';
import Html from '../../shared/Html';

// Server-side render
const render = async(ctx, next) => {
    const renderContext = createServerRenderContext()

    function renderComponent() {
        return (
          <ServerRouter location={ctx.url} context={renderContext}>
            <Html />
          </ServerRouter>
        );
    }

    let markup = renderComponent();
    const result = renderContext.getResult();

    // Handle redirects
    if (result.redirect) {
        ctx.status = 301;
        ctx.redirect(result.redirect.pathname);
        ctx.body = '<!DOCTYPE html>redirecting';
        return await next();
    }

    // 404 Route not found !
    if (result.missed) {
        markup = renderComponent();
        ctx.status = 404;
    }

    ctx.body = '<!DOCTYPE html>\n' + renderToStaticMarkup(markup);
}

export default render;
