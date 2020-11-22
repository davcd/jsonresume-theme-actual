const pug = require("pug");
const sass = require('node-sass');
const moment = require('moment');

const render = (resume) => pug.renderFile('./assets/template.pug', {
    resume,
    styles: renderStyles(),
    moment
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
