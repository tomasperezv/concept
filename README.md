# concept

Node.js library for accessing to the Microsoft Concept Graph API

## Setup

```
npm install concept
```

## Score by P(c|e)

```javascript
const Concept = require('concept');
Concept.scoreByProb({
  instance: 'microsoft'
}).then((score) => {
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
