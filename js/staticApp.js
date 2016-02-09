/**
 * Created by @krelix on 03/02/2016
 * Carbon copy of app.js except it creates a static rendering of pages
 */
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Root from './components/Root'

// Require the Stylus file so it can be processed by webpack when building.
require('../css/stylus/main.styl')

export default render = (locals, callback) => {
    var reactComp = ReactDOMServer.renderToStaticMarkup(
        <Root />
    );
    callback(null, '<!DOCTYPE html>' + reactComp);
}