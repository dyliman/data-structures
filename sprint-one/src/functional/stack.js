var Stack = function() {
  var size = 0; //size is both a item count and index
  var storage = {};
  var someInstance = {};
  someInstance.push = function(value) {
    storage[size] = value;                      
    size++;                             
  };
  someInstance.pop = function() {
    var popping = storage[size - 1]; 
    if (size > 0) {
      delete storage[size - 1];
      size--;
    }
    return popping;
  };
  someInstance.size = function() {
    return size;
  }
  return someInstance;
};
