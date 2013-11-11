var ClassObj = (function() {
  function createClass(properties) {
      var newClass = function () {
        if(this._superConstructor){
            this._super = new this._superConstructor(arguments);
            }
      this.initialize.apply(this, arguments);
    }
    for (var prop in properties) {
      newClass.prototype[prop] = properties[prop];
    }
    if (!newClass.prototype.initialize) {
      newClass.prototype.initialize = function() {}
    }
    return newClass;
  }

  Function.prototype.inherit = function(parent) {
    var oldPrototype = this.prototype;
    this.prototype = new parent();
    this.prototype._superConstructor = parent;
    for (var prop in oldPrototype) {
      this.prototype[prop] = oldPrototype[prop];
    }
  }

  return {
    create: createClass,
  };
}());