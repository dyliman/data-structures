

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var found = 0;
  
  if(bucket === null || bucket === undefined){
    bucket = [];
    bucket.push([k,v]);
  }
  
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      bucket[i][1] = v;
      found = 1;
    }
  }
  
  if(found === 0){
    bucket.push([k,v]);
  }

  this._storage.set(index, bucket);
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      bucket[i].splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert: O(1) because if everything is perfect, the average operations would be MUCH less than the amount of key-value pairs
retrieve: O(1)
remove: O(1)
HashTable: O(1)
 */


