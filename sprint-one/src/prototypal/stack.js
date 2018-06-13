var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods)

  return someInstance;
};

var stackMethods = {};

stackMethods.index = 0;
stackMethods.storage = {};

stackMethods.push = function(value){
	this.storage[this.index] = value;
	this.index++;
}

stackMethods.pop = function(){
	var popping = this.storage[this.index - 1];
	if(this.index > 0){
		delete this.storage[this.index - 1];
		this.index--;
	}
	return popping;
}

stackMethods.size = function(){
	return this.index;
}

