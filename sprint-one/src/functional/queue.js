var Queue = function() {
  var size = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;                      
    size++;   
  };

  someInstance.dequeue = function() {
    var unlist = storage[size - size]; 
    if (size > 0) {
      delete storage[size - size];
      	for(var i = 0; i < size; i++){
      		storage[i] = storage[i+1];
      	}
      size--;
    }
    return unlist;
  };

  someInstance.size = function() {
  	return size;
  };

  return someInstance;
};
