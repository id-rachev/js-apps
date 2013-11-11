if (!Object.create) {
  Object.create = function(obj) {
    function newClass() {};
    newClass.prototype = obj;
    return new newClass();
  }
}

if (!Object.prototype.extend) {
  Object.prototype.extend = function(properties) {
    function newClass() {};
    newClass.prototype = Object.create(this);
    for (var prop in properties) {
      newClass.prototype[prop] = properties[prop];
    }
    newClass.prototype._super = this;
    return new newClass();
  }
}