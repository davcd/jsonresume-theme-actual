# Actual theme for JSON Resume

Minimalist and modern theme for [JSON Resume](https://jsonresume.org/) standard, designed for
the [v1.0.0 version](https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json).

- Only meaningful information
- Single color
- Single font-family
- Single page? Up to you!

### Export examples

- [Extended version](docs/resume_extended.pdf)
- [Simple version](docs/resume_simple.pdf)

Maybe you would like to take a look at
[jsonresume-theme-actual-letter](https://github.com/davcd/jsonresume-theme-actual-letter)
to create your letter.

## Table of contents

- [What is JSON Resume?](#what-is-json-resume)
- [Prerequisites](#prerequisites)
- [Export resume](#export-resume)
- [Contribute](#contribute)
- [Support](#support)

## What is JSON Resume?

> JSON Resume is a community driven open source initiative to create JSON-based standard for resumes.

## Prerequisites

- [node.js](https://nodejs.org/en/) runtime with [resume-cli](https://github.com/jsonresume/resume-cli/)

```bash
npm install -g resume-cli
```

## Export resume

- Create your [resume.json](https://jsonresume.org/schema/) file (you can start by editing [this](/resume.json))

```bash
npm install jsonresume-theme-actual

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
    "url": "https://www.richardh.example.com",
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

- `resume.basics.name` and `resume.basics.label` are required
- `resume.basics.summary` supports markdown

### `resume.work`

```json
{
  "work": [
    {
      "name": "Facebook",
      "location": "California, United States",
      "position": "Software Engineer",
      "url": "https://www.facebook.com/",
      "startDate": "2016-11-17",
      "endDate": "2018-07-22",
      "summary": "Lorem ipsum...",
      "highlights": [
        "Vitae purus faucibus ornare suspendisse",
        "Ut enim blandit volutpat maecenas"
      ]
    }
  ]
}
```

- `resume.work.summary` supports markdown

### `resume.volunteer`

```json
{
  "volunteer": [
    {
      "organization": "Animal Refuge",
      "position": "Supervisor",
      "url": "https://example.com/",
      "startDate": "2012-10-11",
      "endDate": "2014-12-24",
      "summary": "Lorem ipsum...",
      "highlights": [
        "Maecenas at dictum sem",
        "Ut ac ex ac ipsum commodo"
      ]
    }
  ]
}
```

- `resume.volunteer.summary` supports markdown

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

- `resume.education.area` and `resume.education.studyType` supports markdown

### `resume.awards`

```json
{
  "awards": [
    {
      "title": "Website of the day",
      "awarder": "Awwward",
      "summary": "Lorem ipsum..."
    }
  ]
}
```

- `resume.awards.summary` supports markdown

### `resume.certificates`

```json
{
  "certificates": [
    {
      "name": "AWS Certified Solutions Architect",
      "issuer": "Amazon Web Services",
      "url": "https://www.your-badge.com"
    }
  ]
}
```

- `resume.certificates.name` supports markdown

### `resume.publications`

```json
{
  "publications": [
    {
      "name": "Chasing the Higgs Boson",
      "publisher": "The New York Times",
      "releaseDate": "2013-03-04",
      "url": "https://www.nytimes.com/",
      "summary": "Lorem ipsum..."
    }
  ]
}
```

- `resume.publications.summary` supports markdown

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

### `resume.references`

```json
{
  "references": [
    {
      "name": "Robert C. Martin",
      "reference": "Lorem ipsum..."
    }
  ]
}
```

### `resume.projects`

```json
{
  "projects": {
    "name": "Node.js",
    "description": "Lorem ipsum...",
    "highlights": [
      "Commodo elit at imperdiet dui",
      "Id volutpat lacus laoreet non"
    ],
    "startDate": "2011-08-26",
    "endDate": "2018-05-12",
    "url": "https://nodejs.org/",
    "roles": [
      "contributor",
      "evangelist"
    ]
  }
}
```

- `resume.projects.description` supports markdown
