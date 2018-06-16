var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  set.count = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(this._storage[item] === undefined){
  this._storage[item] = item;
  this.count += 1;
  }
};

setPrototype.contains = function(item) {
  if(this._storage[item]){
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  if(this._storage[item] !== undefined){
    delete this._storage[item];
    this.count -= 1;
  }
};

setPrototype.size = function() {
  return this.count
};

setPrototype.intersection = function(set) {
  var intersection = [];
    for(var key in this._storage){
      for(var key2 in set._storage){
        if(key === key2){
          intersection.push(key);
        }
      }
    }
  return intersection;
};

setPrototype.union = function(set) {
  var union = Set();
    for(var key in this._storage){
      union.add(key);
    }
    for(var key2 in set._storage){
      union.add(key2);
    }

  return Object.keys(union._storage);
};

//Union and Intersection

/*
 * Complexity: What is the time complexity of the above functions?
add: O(1)
contains: O(1)
remove: O(1)

 */
