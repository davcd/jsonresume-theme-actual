const { src, dest, watch, series } = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')(require('sass'))

const bs = require('browser-sync').create()

const fs = require('fs')
const helper = require('./assets/helper.js')

function css () {
  return src('./assets/styles.scss')
    .pipe(sass())
    .pipe(dest('./assets'))
}

function html () {
  const resume = JSON.parse(fs.readFileSync('./resume.json', 'utf-8'))

  return src('./assets/template.pug')
    .pipe(pug({ data: { resume, helper } }))
    .pipe(dest('./public'))
}

function serve () {
  bs.init({
    server: {
      baseDir: './public',
      index: 'template.html'
    },
    ui: false,
    open: false
  })

  watch('./assets/**/*.scss', series(css, html))
  watch(['./assets/**/*.pug', './resume.json'], html)
  bs.watch('./public/*.html').on('change', bs.reload)
}

exports.css = css
exports.default = series(css, html, serve)
