const pug = require('pug')
const helper = require('./assets/helper')
const path = require('path')

const render = (resume) => pug.renderFile(path.join(__dirname, 'assets', 'template.pug'), {
  resume,
  helper
})

const pdfRenderOptions = {
  mediaType : 'print'
}

module.exports = {
  render,
  pdfRenderOptions
}
