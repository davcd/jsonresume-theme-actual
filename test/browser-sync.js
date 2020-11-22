const bs = require('browser-sync').create();
const fs = require('fs')
const index = require('../index');
const resume = require('../resume.json');

const buildHtml = (cb) => {
    let output = index.render(resume)
    fs.writeFileSync('./public/index.html', output, {flag: 'w'})
    cb()
}

bs.watch("./assets/**").on('change', () => buildHtml(() => bs.reload()))

buildHtml(() =>
    bs.init({
        server: './public',
        open: 'local',
        ui: false,
    })
)



