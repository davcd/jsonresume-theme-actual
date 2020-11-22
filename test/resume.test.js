const validate = require('jsonschema').validate;
const resume = require('../resume.json');
const schema = require('../schema.json');

test('resume.json file expect to validate against jsonresume schema v1.0.0', () => {
    expect(validate(resume, schema).valid).toBe(true)
})
