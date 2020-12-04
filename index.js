const pug = require("pug");
const helper = require('./assets/helper');

const render = (resume) => pug.renderFile('./assets/template.pug', {
    resume,
    helper
})

const pdfRenderOptions = {}

module.exports = {
    render,
    pdfRenderOptions
};
