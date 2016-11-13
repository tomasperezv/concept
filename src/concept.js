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
  },

  /**
   * @method scoreByMI
   * @param {String} instance
   * @param {Float} smooth
   * @return {Promise}
   * @public
   */
  scoreByMI(instance, smooth) {
    return ApiClient.get(
      'ScoreByMI',
      {
        instance,
        key: this._getAPIKey()
      }
    );
  },

  /**
   * @method scoreByTypi
   * @param {String} instance
   * @param {Float} smooth
   * @return {Promise}
   * @public
   */
  scoreByTypi(instance) {
    return ApiClient.get(
      'ScoreByTypi',
      {
        instance,
        key: this._getAPIKey(),
        smooth
      }
    );
  },

  /**
   * @method scoreByNPMI
   * @param {String} instance
   * @param {Float} smooth
   * @return {Promise}
   * @public
   */
  scoreByNPMI(instance, smooth) {
    return ApiClient.get(
      'ScoreByNPMI',
      {
        instance,
        key: this._getAPIKey(),
        smooth
      }
    );
  },

  /**
   * @method scoreByPMIK
   * @param {String} instance
   * @param {Float} pmiK
   * @param {Float} smooth
   * @return {Promise}
   * @public
   */
  scoreByPMIK(instance, pmiK, smooth) {
    return ApiClient.get(
      'ScoreByPMIK',
      {
        instance,
        key: this._getAPIKey(),
        pmiK,
        smooth
      }
    );
  },

  /**
   * @method scoreByCross
   * @param {String} instance
   * @param {Float} pmiK
   * @param {Float} smooth
   * @return {Promise}
   * @public
   */
  scoreByCross(instance, pmiK, smooth) {
    return ApiClient.get(
      'ScoreByCross',
      {
        instance,
        key: this._getAPIKey(),
        pmiK,
        smooth
      }
    );
  }
};

module.exports = Concept;
