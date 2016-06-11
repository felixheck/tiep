/*!
 * @author Felix Heck <hi@whoTheHeck.de>
 * @version 0.0.1
 * @copyright Felix Heck 2016
 * @license MIT
 */

(function () {

  'use strict';
  
  var defaults = {
    type: 'text',
    accessKey: 'type',
    mapping: {
      boolean: 'checkbox',
      date: 'date',
      number: 'number',
      string: 'text'
    }
  };
  
  angular
    .module('tiep', [])
    .filter('tiep', function() {
      return function(input, accessKey, mapping) {
        var key;

        accessKey = accessKey || defaults.accessKey;
        mapping = mapping || defaults.mapping;
        
        if (_.isString(input)) {
          key = input;
        } else if (_.isPlainObject(input) && input.hasOwnProperty(accessKey)) {
          key = input[accessKey];
        } else if (_.isPlainObject(input) && !input.hasOwnProperty(accessKey)) {
          throw new SyntaxError('Passed object have no ' + accessKey + ' property.');
        } else {
          throw new TypeError('Passed input have to be a string or an object');
        }

        return mapping[key] || defaults.type;
      };
    });
})();
