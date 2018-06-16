var Tree = function(value) {
  var newTree = {};
  newTree.value = value || 0;
  newTree.count = 1;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // this.children push invoked Tree(value)
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if(this.value === target){
    return true;
  } 
  for(var i = 0; i < this.children.length; i++){
    if(this.children[i].contains(target)){
      return true;
    }
  }
  return false;
};

treeMethods.size = function(){
  for(var i = 0; i < this.children.length; i++){
    this.count += this.children[i].size();
  }

  return this.count;
};

// how many items are in the tree

/*
 * Complexity: What is the time complexity of the above functions?
addChild: O(1)
contains: O(n)
size: O(n)
Tree:O(1)
 */

