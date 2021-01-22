# Actual theme for JSON Resume

Minimalist and modern theme for [JSON Resume](https://jsonresume.org/) standard, designed for
the [v1.0.0 version](https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json).

[Export example](docs/resume.pdf)

## Table of contents

- [What is JSON Resume?](#what-is-json-resume)
- [Prerequisites](#prerequisites)
- [Export resume](#export-resume)
- [Contribute](#contribute)
- [Support](#support)
- [Roadmap](#roadmap)

## What is JSON Resume?

> JSON Resume is a community driven open source initiative to create JSON-based standard for resumes.

## Prerequisites

- [node.js](https://nodejs.org/en/) runtime with [resume-cli](https://github.com/jsonresume/resume-cli/)

```bash
npm install -g resume-cli
```

## Export resume

- Create your [resume.json](https://jsonresume.org/schema/) file

```bash
npm install -g jsonresume-theme-actual

resume export resume.pdf --format pdf --theme actual
resume export resume.html --format html --theme actual
```

## Contribute

```bash
git clone git@github.com:davcd/jsonresume-theme-actual.git
cd jsonresume-theme-actual

npm install

gulp
```

You can live edit any .scss or .pug file

## Support

This theme supports the following JSON paths

### `resume.basics`

```json
{
  "basics": {
    "name": "Richard Hendriks",
    "label": "Software Developer",
    "email": "rhendriks@mail.com",
    "phone": "(912) 555-4321",
    "url": "http://richardh.example.com",
    "summary": "Lorem ipsum...",
    "location": {
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "url": "https://domain.com/rhendricks"
      }
    ]
  }
}
```

- `resume.basics.name` and `resume.basics.label` are mandatory fields
- `resume.basics.summary` field supports markdown

### `resume.work`

```json
{
  "work": [
    {
      "name": "Facebook",
      "location": "California, United States",
      "position": "Software Engineer",
      "url": "http://facebook.com",
      "startDate": "2016-11-17",
      "summary": "Lorem ipsum...",
      "highlights": [
        "Vitae purus faucibus ornare suspendisse",
        "Ut enim blandit volutpat maecenas"
      ]
    }
  ]
}
```

- `resume.work.summary` field supports markdown

### `resume.education`

```json
{
  "education": [
    {
      "institution": "University of Stanford",
      "url": "https://www.stanford.edu/",
      "area": "Computer Science",
      "studyType": "Master"
    }
  ]
}
```

- `resume.work.area` and `resume.work.studyType` fields supports markdown

### `resume.certificates`

```json
{
  "certificates": [
    {
      "name": "AWS Certified Solutions Architect",
      "date": "2018-03-12",
      "url": "https://www.your-badge.com",
      "issuer": "Amazon Web Services"
    }
  ]
}
```

- `resume.certificates.name` field supports markdown

### `resume.skills`

```json
{
  "skills": [
    {
      "name": "Languages",
      "keywords": [
        "Java",
        "Python"
      ]
    }
  ]
}
```

### `resume.languages`

```json
{
  "languages": [
    {
      "language": "English",
      "fluency": "Native"
    }
  ]
}
```

### `resume.projects`

```json
{
  "languages": {
    "name": "Node.js",
    "description": "Lorem ipsum...",
    "highlights": [
      "Commodo elit at imperdiet dui",
      "Id volutpat lacus laoreet non"
    ],
    "url": "https://nodejs.org/",
    "roles": [
      "contributor",
      "evangelist"
    ]
  }
}
```

- `resume.projects.description` field supports markdown

### `resume.interests`

```json
{
  "interests": [
    {
      "name": "Open Source"
    }
  ]
}
```

### Roadmap

Pending to support `resume.awards` ands `resume.publications`.
