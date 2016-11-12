'use strict';

/**
 * Module in charge of handling configuration.
 * @module Config
 */
const Config = {
  /**
   * @type {Object|null} _config
   * @private
   */
  _config: null,

  /**
   * @method _loadConfig
   * @private
   */
  _loadConfig() {
    this._config = require('../config/config.json');
  },

  /**
   * @method config
   * @param {String} key
   * @returns {Object}
   * @public
   */
  get(key) {
    if (this._config === null) {
      this._loadConfig();
    }

    return this._config[key];
  }
};

module.exports = Config;
