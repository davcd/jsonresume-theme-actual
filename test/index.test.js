const index = require('../index')
const resume = require('../resume.json')

test('renderStyles function expect to return css string', () => {
    expect(typeof index.renderStyles()).toBe('string')
})

describe('render function', () => {

    test('when no param expect to throw TypeError', () => {
        expect(() => index.render()).toThrowError(TypeError)
    })

    test('when param is invalid expect to throw TypeError', () => {
        expect(() => index.render({})).toThrowError(TypeError)
    })

    test('when param is valid expect to return html string', () => {
        expect(typeof index.render(resume)).toBe('string')
    })
})
