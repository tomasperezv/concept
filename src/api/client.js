'use strict';

const requestInterface = require('https');

/**
 * Handles connections to the Microsoft Graph API.
 * @see https://concept.research.microsoft.com/Home/API
 * @module ApiClient
 */
const ApiClient = {
  /**
   * @type {String} _baseUrl
   * @private
   */
  _baseUrl: 'https://concept.research.microsoft.com/api/Concept',

  /**
   * @method _generateUrl
   * @param {String} method
   * @param {Object} options
   * @returns {String}
   * @private
   */
  _generateUrl(method, options) {
    let url = `${this._baseUrl}/${method}?`;

    for (let key in options) {
      url += `${key}=${encodeURIComponent(options[key])}&`;
    }

    return url;
  },

  /**
   * @method _decorateOptions
   * @param {Object} options
   * @returns {Object}
   * @private
   */
  _decorateOptions(options) {
    return {
      topK: options.topK || 10,
      api_key: options.key,
      instance: options.instance
    };
  },

  /**
   * Performs a GET request to the API
   * @param {String} method
   * @param {Object} options
   * @returns {Promise}
   * @method get
   * @public
   */
  get(method, options) {
    if (typeof options.key === 'undefined') {
      throw new Error('Api Key is mandatory');
    }

    const params = this._decorateOptions(options);
    const url = this._generateUrl(method, params);
    return new Promise((resolve, reject) => {
      requestInterface.request(url, function(response) {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          resolve(data);
        });

        response.on('error', reject);
      }).end();
    });
  }
};

module.exports = ApiClient;
