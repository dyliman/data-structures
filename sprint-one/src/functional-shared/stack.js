var Stack = function() {
  var someInstance = {};
  _.extend(someInstance,stackMethods)
  someInstance.storage = {};
  someInstance.index = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.index] = value;
  this.index++;
}
stackMethods.pop = function(){
  var popping = this.storage[this.index - 1];
  if (this.index > 0) {
    delete this.storage[this.index - 1];
    this.index--;
  }
  return popping;
}
stackMethods.size = function(){
  return this.index;
}

