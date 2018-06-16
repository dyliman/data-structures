var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.count = 1
};


BinarySearchTree.prototype.insert = function(value){
  if(this.value > value) {
    if(this.left === null){
      this.left = new BinarySearchTree(value);
    } else{
      this.left.insert(value);
    }

  } else if (this.value < value) {
    if(this.right === null){
      this.right = new BinarySearchTree(value);
    } else{
      this.right.insert(value);
    }
  } else {
    return "already in tree";
  }
}

BinarySearchTree.prototype.contains = function(target){
  if(target === this.value) {
    return true;
  }

  if(this.value > target && this.left !== null) {
    return this.left.contains(target);
  } else if (this.value < target && this.right !== null) {
    return this.right.contains(target);
  }
  
  return false; 
}

BinarySearchTree.prototype.depthFirstLog = function(cb){
  cb(this.value);

  if(this.left !== null){
    this.left.depthFirstLog(cb);
  }
  if(this.right !== null){
    this.right.depthFirstLog(cb); 
  }
}

BinarySearchTree.prototype.size = function(){
  if(this.left !== null){
    this.count += this.left.size();
  }
  if(this.right !== null){
    this.count += this.right.size();
  }

  return this.count;
}

//make tree balanced


/*
 * Complexity: What is the time complexity of the above functions?
insert:O(n)
contains:O(log(n))
depthFirstLog:O(n)
BinarySearchTree:O(1)
 */
