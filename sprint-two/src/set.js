var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(this._storage[item] === undefined){
  this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  if(this._storage[item]){
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
All functions are O(1)
 */
