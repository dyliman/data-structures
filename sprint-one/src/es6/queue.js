class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.index = 0;
  }

enqueue(value){
	this.storage[this.index] = value;
	this.index++;
}

dequeue(){
	var unlist = this.storage[this.index - this.index];
	if(this.index > 0){
		delete this.storage[this.index - this.index]
		for(var i = 0; i < this.index; i++){
			this.storage[i] = this.storage[i+1];
		}
		this.index--;
	}
	return unlist;
}

size(){
	return this.index
}

}
