# Actual theme for JSON Resume

Minimalist and modern theme for [JSON Resume](https://jsonresume.org/) standard, designed for the [v1.0.0 version](https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json).

[Theme preview](docs/resume.pdf)

## Table of contents

- [What is JSON Resume?](#what-is-json-resume)
- [Prerequisites](#prerequisites)
- [Export resume](#export-resume)
- [Contribute](#contribute)
- [Support](#support)

## What is JSON Resume?

> JSON Resume is a community driven open source initiative to create JSON-based standard for resumes.

## Prerequisites

[node.js](https://nodejs.org/en/) runtime with [resume-cli](https://github.com/jsonresume/resume-cli/)
```bash
npm install -g resume-cli
```

## Export resume
Work in progress

## Contribute

```bash
git clone git@github.com:davcd/jsonresume-theme-actual.git
cd jsonresume-theme-actual

npm install

npm run test:sync
```

You can live edit any file on the `assets` folder

## Support
This theme supports the following JSON paths

### `resume.basics`

```json
{
  "basics": {
    "name": "Richard Hendriks",
    "label": "Programmer",
    "email": "richard.hendriks@mail.com",
    "phone": "(912) 555-4321",
    "summary": "Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinal!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!",
    "location": {
      "city": "Los Angeles",
      "countryCode": "US",
      "region": "California"
    }    
  }
}
```

- `resume.basics.name` and `resume.basics.label` are mandatory fields
- `resume.basics.summary` supports markdown

### Work In Progress
Pending to support `resume.work`, `resume.projects`, `resume.education`, `resume.skills`, `resume.certificates`, ... among others.
