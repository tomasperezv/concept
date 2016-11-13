# concept [![npm version](https://badge.fury.io/js/concept.svg)](https://badge.fury.io/js/concept)

![npm](https://nodei.co/npm/concept.png?mini=true)

Node.js library for accessing to the Microsoft Concept Graph API

## Setup

```
npm install concept
```

## Score by P(c|e)

```javascript
const Concept = require('concept');
Concept.setAPIKey('MY API KEY');
Concept.scoreByProb('microsoft').then((data) => {
  // e.g. score = {
  //   "company": "0.62",
  //   "technology company": "0.024",
  //   ...
  // };
});
```

## Score by MI

```javascript
const Concept = require('concept');
Concept.setAPIKey('MY API KEY');
Concept.scoreByMI('microsoft', 0).then((score) => {
  // e.g. score = {
  //   "company": "0.62",
  //   "technology company": "0.024",
  //   ...
  // };
});
```

## Score by P(e|c)

```javascript
const Concept = require('concept');
Concept.setAPIKey('MY API KEY');
Concept.scoreByTypi('microsoft', 0).then((score) => {
  // e.g. score = {
  //   "company": "0.62",
  //   "technology company": "0.024",
  //   ...
  // };
});
```

## Score by NPMI

```javascript
const Concept = require('concept');
Concept.setAPIKey('MY API KEY');
Concept.scoreByNPMI('microsoft', 0).then((score) => {
  // e.g. score = {
  //   "company": "0.62",
  //   "technology company": "0.024",
  //   ...
  // };
});
```

## Score by PMI^K

```javascript
const Concept = require('concept');
Concept.setAPIKey('MY API KEY');
Concept.scoreByPMIK('microsoft', 1.5, 0).then((score) => {
  // e.g. score = {
  //   "company": "0.62",
  //   "technology company": "0.024",
  //   ...
  // };
});
```

## Score by BLC

```javascript
const Concept = require('concept');
Concept.setAPIKey('MY API KEY');
Concept.scoreByCross('microsoft', 10, 0).then((score) => {
  // e.g. score = {
  //   "company": "0.62",
  //   "technology company": "0.024",
  //   ...
  // };
});
```

## Development

### Run the tests

```
npm test
```

## API Documentation

https://concept.research.microsoft.com/help/index#!/Concept/Concept_ScoreByProb
