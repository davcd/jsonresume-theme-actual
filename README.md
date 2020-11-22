# Actual theme for JSON Resume

Minimalist and modern theme for [JSON Resume](https://jsonresume.org/) standard, designed for the [v1.0.0 version](https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json).

[Theme preview](docs/resume.pdf)

## Table of contents

- [What is JSON Resume?](#what-is-json-resume)
- [Export resume](#export-resume)
- [Contribute](#contribute)
- [Support](#support)

## What is JSON Resume?

> JSON Resume is a community driven open source initiative to create JSON-based standard for resumes.

## Export resume

1. Install [resume-cli](https://github.com/jsonresume/resume-cli/)
```bash
npm install -g resume-cli
```

2. Clone this git repository
```bash
git clone https://github.com/davcd/jsonresume-theme-actual.git
cd jsonresume-theme-actual
```

3. Install non-dev dependencies
```bash
npm install --production
```

4. Replace the resume.json file with your own (you can follow the [v1.0.0 version](https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json)) 

5. Export your resume as .pdf / .html
```bash
npm run export-html
npm run export-pdf
```

You can find the output files at the `public` folder

## Contribute

1. Install [resume-cli](https://github.com/jsonresume/resume-cli/)
```bash
npm install -g resume-cli
```

2. Clone this git repository
```bash
git clone https://github.com/davcd/jsonresume-theme-actual.git
cd jsonresume-theme-actual
```

3. Install all dependencies
```bash
npm install
```

4. Run browser-sync for easy live editing
```bash
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
    "url": "http://richardhendricks.example.com/",
    "summary": "Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinal!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!",
    "location": {
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "Twitter",
        "url": "https://twitter.example.com/richardhendriks"
      }
    ]
  }
}
```

- `resume.basics.name` and `resume.basics.label` are mandatory fields

### Work In Progress
Pending to support `resume.work`, `resume.projects`, `resume.education`, `resume.skills`, `resume.certificates`, ... among others.
