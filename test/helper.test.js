const helper = require('../assets/helper')

describe('mdToHtml function', () => {
  test('given null then return empty string', () => {
    expect(helper.mdToHtml(null)).toBe('')
  })

  test('given undefined then return empty string', () => {
    expect(helper.mdToHtml(undefined)).toBe('')
  })

  test('given empty string then return empty string', () => {
    expect(helper.mdToHtml('')).toBe('')
  })

  test('given any string then return html string', () => {
    expect(helper.mdToHtml('test')).toBe('<p>test</p>\n')
  })

  test('given markdown string then return html string', () => {
    expect(helper.mdToHtml('# Test')).toBe('<h1>Test</h1>\n')
  })
})

describe('calcLocation function', () => {
  test('given undefined then return null', () => {
    expect(helper.calcLocation(undefined)).toBe(null)
  })

  test('given empty object then return null', () => {
    expect(helper.calcLocation({})).toBe(null)
  })

  test('given valid countryCode then return country', () => {
    const location = {
      countryCode: 'ES'
    }
    expect(helper.calcLocation(location)).toBe('Spain')
  })

  test('given invalid countryCode then return countryCode', () => {
    const location = {
      countryCode: 'TEST'
    }
    expect(helper.calcLocation(location)).toBe('TEST')
  })

  test('given city then return city', () => {
    const location = {
      city: 'Santander'
    }
    expect(helper.calcLocation(location)).toBe('Santander')
  })

  test('given region then return region', () => {
    const location = {
      region: 'Cantabria'
    }
    expect(helper.calcLocation(location)).toBe('Cantabria')
  })

  test('given city and countryCode then return city, country', () => {
    const location = {
      city: 'Santander',
      countryCode: 'ES'
    }
    expect(helper.calcLocation(location)).toBe('Santander, Spain')
  })

  test('given region and countryCode then return region, country', () => {
    const location = {
      region: 'Cantabria',
      countryCode: 'ES'
    }
    expect(helper.calcLocation(location)).toBe('Cantabria, Spain')
  })

  test('given city and region then return city, region', () => {
    const location = {
      city: 'Santander',
      region: 'Cantabria'
    }
    expect(helper.calcLocation(location)).toBe('Santander, Cantabria')
  })

  test('given city, region and countryCode then return city, region, countryCode', () => {
    const location = {
      city: 'Santander',
      countryCode: 'ES',
      region: 'Cantabria'
    }
    expect(helper.calcLocation(location)).toBe('Santander, Cantabria, ES')
  })
})

describe('calcDate function', () => {
  test('given undefined then return null', () => {
    expect(helper.calcDate(undefined)).toBe(null)
  })

  test('given null then return null', () => {
    expect(helper.calcDate(null)).toBe(null)
  })

  test('given invalid date then return Invalid date', () => {
    expect(helper.calcDate('2009-20-222')).toBe('Invalid date')
  })

  test('given valid date then return date', () => {
    expect(helper.calcDate('2019-01-20')).toBe('Jan 2019')
  })
})

describe('calcDateRange function', () => {
  test('given null and mull then return null', () => {
    expect(helper.calcDateRange(null, null)).toBe(null)
  })

  test('given undefined and undefined then return null', () => {
    expect(helper.calcDateRange(undefined, undefined)).toBe(null)
  })

  test('given startDate and null then return startDate - Present', () => {
    expect(helper.calcDateRange('2019-01-20', null)).toBe('Jan 2019 - Present')
  })

  test('given startDate and undefined then return startDate - Present', () => {
    expect(helper.calcDateRange('2019-01-20', undefined)).toBe('Jan 2019 - Present')
  })

  test('given null and endDate then return endDate', () => {
    expect(helper.calcDateRange(null, '2020-01-20')).toBe('Jan 2020')
  })

  test('given undefined and endDate then return endDate', () => {
    expect(helper.calcDateRange(undefined, '2020-01-20')).toBe('Jan 2020')
  })

  test('given startDate and endDate then return startDate - endDate', () => {
    expect(helper.calcDateRange('2019-01-20', '2020-01-20')).toBe('Jan 2019 - Jan 2020')
  })

  test('given invalid date and invalid date then return Invalid date - Invalid date', () => {
    expect(helper.calcDateRange('2009-20-222', '20020-14-50')).toBe('Invalid date - Invalid date')
  })
})

describe('beautifyDate function', () => {
  test('given valid date then return beautified date', () => {
    expect(helper.beautifyDate('2020-01-20')).toBe('Jan 2020')
  })

  test('given invalid date then return null', () => {
    expect(helper.beautifyDate('')).toBe('Invalid date')
  })

  test('given undefined date then return null', () => {
    expect(helper.beautifyDate(undefined)).toBe('Invalid date')
  })
})

describe('beautifyArray function', () => {
  test('given empty array then return empty string', () => {
    expect(helper.beautifyArray(', ', [])).toBe('')
  })

  test('given single element array then return element', () => {
    expect(helper.beautifyArray(' - ', ['test'])).toBe('test')
  })

  test('given two element array then beautified list', () => {
    expect(helper.beautifyArray(';', ['test1', 'test2'])).toBe('test1;test2')
  })

  test('given two element array being one undefined then return valid element', () => {
    expect(helper.beautifyArray('*', [undefined, 'test2'])).toBe('test2')
  })
})

describe('arrayToPhrase function', () => {
  test('given empty array then return empty string', () => {
    expect(helper.arrayToPhrase([])).toBe('')
  })

  test('given single element array then return element', () => {
    expect(helper.arrayToPhrase(['test'])).toBe('Test')
  })

  test('given two element array then return phrase', () => {
    expect(helper.arrayToPhrase(['TEST1', 'TEST2'])).toBe('TEST1 and TEST2')
  })

  test('given three element array then return phrase', () => {
    expect(helper.arrayToPhrase(['test1', 'test2', 'test3'])).toBe('Test1, test2 and test3')
  })

  test('given four element array being one undefined then return phrase', () => {
    expect(helper.arrayToPhrase(['test1', undefined, 'test2', 'test3'])).toBe('Test1, test2 and test3')
  })
})

describe('beautifyLink function', () => {
  test('given domain then return strong domain', () => {
    expect(helper.beautifyLink('yourwebsite.dev/')).toBe('<strong>yourwebsite.dev</strong>')
  })

  test('given url www, domain and path then return strong domain, and path', () => {
    expect(helper.beautifyLink('www.test.co.uk/route')).toBe('<strong>test.co.uk</strong>/route')
  })

  test('given url with protocol, www, domain and path then return strong domain, and path', () => {
    expect(helper.beautifyLink('https://www.domain.com/path')).toBe('<strong>domain.com</strong>/path')
  })
})

describe('validArray function', () => {
  test('given undefined then return false', () => {
    expect(helper.validArray(undefined)).toBe(false)
  })

  test('given empty array then return false', () => {
    expect(helper.validArray([])).toBe(false)
  })

  test('given valid array then return true', () => {
    expect(helper.validArray([1])).toBe(true)
  })
})
