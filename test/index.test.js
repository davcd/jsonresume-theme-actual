const {HtmlValidate} = require('html-validate')

const index = require('../index')
const resume = require('../resume.json')

test('renderStyles function return css string', () => {
    expect(typeof index.renderStyles()).toBe("string")
})

describe('render function', () => {

    test('given no param then throw TypeError', () => {
        expect(() => index.render()).toThrowError(TypeError)
    })

    test('given invalid param then throw TypeError', () => {
        expect(() => index.render({})).toThrowError(TypeError)
    })

    test('given valid param then return valid html', () => {
        const validator = new HtmlValidate()
        expect(validator.validateString(index.render(resume)).valid).toBe(true)
    })
})
