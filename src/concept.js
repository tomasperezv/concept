'use strict';

const ApiClient = require('./api/client');
const Config = require('./config');

/**
 * Facada for the API access layer.
 * @module Concept
 */
const Concept = {
  /**
   * @type {String|null} _apiKey
   */
  _apiKey: null,

  /**
   * @method setAPIKey
   * @param {String} key
   * @public
   */
  setAPIKey(key) {
    this._apiKey = key;
  },

  /**
   * @method _getAPIKey
   * @returns {String}
   * @private
   */
  _getAPIKey() {
    let key;
    if (this._apiKey !== null) {
      key = this._apiKey;
    } else {
      key = Config.get('key')
    }

    return key;
  },

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
        key: this._getAPIKey()
      }
    );
  }
};

module.exports = Concept;
