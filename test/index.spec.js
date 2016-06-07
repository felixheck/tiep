describe('tiep', function() {
  var $filter;

  beforeEach(function() {
    module('tiep');

    inject(function(_$filter_) {
      $filter = _$filter_;
    });
  });

  describe('string as input', function() {
    it('should return "text"', function() {
      expect($filter('tiep')('string'))
        .toEqual('text');
    });

    it('should return "number"', function() {
      expect($filter('tiep')('number'))
        .toEqual('number');
    });

    it('should return "checkbox"', function() {
      expect($filter('tiep')('boolean'))
        .toEqual('checkbox');
    });

    it('should return "date"', function() {
      expect($filter('tiep')('date'))
        .toEqual('date');
    });

    it('should return "text" as default', function() {
      expect($filter('tiep')('regex'))
        .toEqual('text');
    });
  });

  describe('object as input', function() {
    it('should return "text"', function() {
      expect($filter('tiep')({type: 'string'}))
        .toEqual('text');
    });

    it('should return "number"', function() {
      expect($filter('tiep')({type: 'number'}))
        .toEqual('number');
    });

    it('should return "checkbox"', function() {
      expect($filter('tiep')({type: 'boolean'}))
        .toEqual('checkbox');
    });

    it('should return "date"', function() {
      expect($filter('tiep')({type: 'date'}))
        .toEqual('date');
    });

    it('should return "text" as default', function() {
      expect($filter('tiep')({type: 'regex'}))
        .toEqual('text');
    });
  });

  describe('object as input | custom access key', function() {
    it('should return "text"', function() {
      expect($filter('tiep')({key: 'string'}, 'key'))
        .toEqual('text');
    });

    it('should return "number"', function() {
      expect($filter('tiep')({key: 'number'}, 'key'))
        .toEqual('number');
    });

    it('should return "checkbox"', function() {
      expect($filter('tiep')({key: 'boolean'}, 'key'))
        .toEqual('checkbox');
    });

    it('should return "date"', function() {
      expect($filter('tiep')({key: 'date'}, 'key'))
        .toEqual('date');
    });

    it('should return "text" as default', function() {
      expect($filter('tiep')({key: 'regex'}, 'key'))
        .toEqual('text');
    });
  });

  describe('string as input | custom mapping', function() {
    var customMapping = {
      color: 'color'
    };

    it('should return "color"', function() {
      expect($filter('tiep')('color', null, customMapping))
        .toEqual('color');
    });

    it('should return "text" as default', function() {
      expect($filter('tiep')('number', null, customMapping))
        .toEqual('text');
    });
  });

  describe('errors', function() {
    it('should throw error | object does not contain key', function() {
      expect(function() {$filter('tiep')({type: 'string'}, 'key')})
        .toThrow();
    });

    it('should throw error | input is neither string nor plain object', function() {
      expect(function() {$filter('tiep')(0)})
        .toThrow();
    });
  });
});
