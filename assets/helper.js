const md = require('markdown-it')();
const iso = require('iso-3166-1');
const moment = require('moment');


const mdToHtml = (string) => string ? md.render(string) : ''

const calcLocation = (location) => {
    let array = []

    if (location.city) {
        array.push(location.city)
    }

    if (location.region) {
        array.push(location.region)
    }

    if (location.countryCode) {
        const country = iso.whereAlpha2(location.countryCode)
        array.push(country && array.length < 2 ? country.country : location.countryCode)
    }

    return array.length > 0 ? array.join(', ') : null
}

const calcDateRange = (start, end) => {
    let array = []

    if (start) {
        array.push(beautifyDate(start))
    }

    array.push(end ? beautifyDate(end) : 'Present')

    return array.join(' - ')
}

const beautifyDate = (date) => moment(date, 'YYYY-MM-DD').format('MMM YYYY')

const beautifyArray = (separator, array) => array.filter(x => x).join(separator)

const beautifyLink = (string) => {
    let s = string.trim().replace(/^(?:https?:\/\/)?(?:www\.)?/i, '')
    s = s.endsWith('/') ? s.slice(0, -1) : s
    s = s.split('/')
    s[0] = `<strong>${s[0]}</strong>`
    return s.join('/')
}


const validArray = (array) => array !== undefined && array.length > 0


module.exports = {
    mdToHtml,
    calcLocation,
    calcDateRange,
    beautifyDate,
    beautifyArray,
    beautifyLink,
    validArray
}
