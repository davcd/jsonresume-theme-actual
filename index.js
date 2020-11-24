const pug = require("pug");
const sass = require('node-sass');
const helper = require('./assets/helper');

const render = (resume) => pug.renderFile('./assets/template.pug', {
    resume,
    styles: renderStyles(),
    helper
})

const renderStyles = () => sass.renderSync({
    file: './assets/styles.scss',
    outputStyle: 'compressed',
}).css.toString()

const pdfRenderOptions = {}

module.exports = {
    render,
    renderStyles,
    pdfRenderOptions
};
