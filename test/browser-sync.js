const bs = require('browser-sync').create();
const fs = require('fs')
const index = require('../index');

const buildHtml = (cb) => {
    const resume = JSON.parse(fs.readFileSync('./resume.json', 'utf-8'))
    let output = index.render(resume)
    fs.writeFileSync('./public/index.html', output, {flag: 'w'})
    cb()
}

bs.watch(["./assets/**", "./resume.json"]).on('change', () => buildHtml(() => bs.reload()))

buildHtml(() =>
    bs.init({
        server: './public',
        open: 'local',
        ui: false,
    })
)



