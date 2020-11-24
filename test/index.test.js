const {HtmlValidate} = require('html-validate')
const validateCss = require('css-validator');

const index = require('../index')
const resume = require('../resume.json')

test('renderStyles function expect to return valid css', () => {
    validateCss({text: index.renderStyles()}, (err, data) =>
        expect(data.validity).toBe(true)
    )
})

describe('render function', () => {

    test('when no param expect to throw TypeError', () => {
        expect(() => index.render()).toThrowError(TypeError)
    })

    test('when param is invalid expect to throw TypeError', () => {
        expect(() => index.render({})).toThrowError(TypeError)
    })

    test('when param is valid expect to return valid html', () => {
        const validator = new HtmlValidate()
        expect(validator.validateString(index.render(resume)).valid).toBe(true)
    })
})
