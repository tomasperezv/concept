'use strict';

const ApiClient = require('./api/client');
const Config = require('./config');

/**
 * Facada for the API access layer.
 * @module Concept
 */
const Concept = {
  /**
   * @method scoreByProb
   * @param {String} instance
   * @return {Promise}
   * @public
   */
  scoreByProb(instance) {
    return ApiClient.get(
      'ScoreByProb',
      {
        instance,
        key: Config.get('key')
      }
    );
  }
};

module.exports = Concept;
