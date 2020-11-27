const md = require('markdown-it')();
const iso = require('iso-3166-1');

const mdToHtml = (string) => md.render(string)

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
        array.push(country && array.length<2 ? country.country : location.countryCode)
    }

    return array.length > 0 ? array.join(', ') : null
}

module.exports = {
    mdToHtml,
    calcLocation
}
