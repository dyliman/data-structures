var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  _.extend(someInstance,queueMethods);
  someInstance.storage = {};
  someInstance.index = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.index] = value;
  this.index++;
}

queueMethods.dequeue = function(){
  var unlist = this.storage[this.index - this.index];
  if (this.index > 0) {
    delete this.storage[this.index - this.index];
    for(var i = 0; i < this.index; i++){
    	this.storage[i] = this.storage[i + 1]
    }
    this.index--;
  }
  return unlist;
}

queueMethods.size = function(){
  return this.index;
}