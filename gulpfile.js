const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const rename = require('gulp-rename')
const connect = require('gulp-connect')

const fs = require('fs')
const helper = require('./assets/helper.js')

function css() {
    return gulp.src("./assets/styles.scss")
        .pipe(sass())
        .pipe(gulp.dest("./assets"))
}


function html() {
    const resume = JSON.parse(fs.readFileSync('./resume.json', 'utf-8'))

    return gulp.src('./assets/template.pug')
        .pipe(pug({data: {resume, helper}}))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./public'))
        .pipe(connect.reload())
}

exports.css = css
exports.default = () => {
    gulp.watch('./assets/**/*.scss', {ignoreInitial: false}, gulp.series(css, html))
    gulp.watch(['./assets/**/*.pug', './resume.json'], html)

    connect.server({
        root: './public',
        livereload: true
    })
}
