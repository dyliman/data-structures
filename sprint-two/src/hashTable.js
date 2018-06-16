var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this.size = null
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
  
  this.size += 1;

  if((this.size / this._limit) > 0.75){
      this.resize(true);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

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
      bucket.splice(i, 1);
    }
  }

  this.size -= 1;
  if((this.size / this._limit) < 0.25){
    this.resize(false);
  }
};

HashTable.prototype.resize = function(increaseOrDecrease){
  if(increaseOrDecrease){
    this._limit = this._limit * 2;
    var newHash = new HashTable(this._limit);
  } 
  if(!increaseOrDecrease){
    this._limit = this._limit / 2;
    var newHash = new HashTable(this._limit);
  }

this._storage.each(function(bucket){
  if(bucket !== undefined){
    bucket.forEach(function(value){
      newHash.insert(value[0],value[1])
    })
  }
})

this._limit = newHash._limit;
this._storage = newHash._storage;
this.size = newHash.size;

}


/*
 * Complexity: What is the time complexity of the above functions?
insert: O(1) because if everything is perfect, the average operations would be MUCH less than the amount of key-value pairs. it's possible but unlikely everything will be stored in one "bucket" which in that case, it would be O(n) time complexity.
retrieve: O(1)
remove: O(1) 
resize: O(n) insert and remove will be O(n) too if resize is invoked.
HashTable: O(1)
 */


