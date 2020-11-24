const md = require('markdown-it')();

const mdToHtml = (string) =>{
    return md.render(string)
}

module.exports = {
    mdToHtml
}
