var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.index = 0;
};

Queue.prototype.enqueue = function(value){
	this.storage[this.index] = value;
	this.index++;
}

Queue.prototype.dequeue = function(){
	var popping = this.storage[this.index - this.index];
	if(this.index > 0){
		delete this.storage[this.index - this.index];
		for(var i = 0; i < this.index; i++){
			this.storage[i] = this.storage[i + 1]
		}
		this.index--;
	}

	return popping;	
}

Queue.prototype.size = function(){
	return this.index;
}