class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.index = 0;
  }

push(value){
	this.storage[this.index] = value;
	this.index++;
}

pop(){
	var popping = this.storage[this.index - 1]
	if(this.index > 0){
		delete this.storage[this.index - 1]
		this.index--;
	}
	return popping;
}

size(){
return this.index;
}

}