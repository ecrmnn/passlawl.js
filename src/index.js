'use strict';

const uppercase = require('./utils/uppercase')
const locales = {
  en: require('./locale/en'),
  no: require('./locale/no')
};
let __locale = 'en';

module.exports = function () {
  return {
    /**
     * Set locale
     * @param locale
     * @returns {exports}
     */
    locale: function (locale) {
      __locale = locale;
      return this;
    },

    /**
     * Returns locale
     * @returns {string}
     */
    getLocale: function () {
      return __locale;
    },

    /**
     * Get random password string
     * @returns {string}
     */
    get: function () {
      const words = locales[__locale].generate();
      return words.map(uppercase).join('');
    },

    getArray: function () {
      return locales[__locale].generate();
    }
  }
}();