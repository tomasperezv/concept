'use strict';

const Concept = require('../src/concept');
Concept.scoreByProb('microsoft').then((data) => {
  console.log(data);
});
