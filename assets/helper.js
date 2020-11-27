const md = require('markdown-it')();

const mdToHtml = (string) => md.render(string)

const calcLocation = (location) => {
    if (location.countryCode) {
        if (location.region) {
            return `${location.region}, ${location.countryCode}`
        } else if (location.city) {
            return `${location.city}, ${location.countryCode}`
        }
        return location.countryCode
    } else if (location.region) {
        if (location.city) {
            return `${location.city}, ${location.region}`
        }
        return location.region
    } else if (location.city) {
        return location.city
    }
    return null
}

module.exports = {
    mdToHtml,
    calcLocation
}
