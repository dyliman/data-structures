var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;
  // list.currentNode; //broken

  list.addToTail = function(value) {
    var newNode = Node(value);  
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    list.count += 1;
  };

  list.removeHead = function() {
    var currentValue = null;
      if(list.head !== null){
        currentValue = list.head.value;
        list.head = list.head.next;
      }
    list.count -= 1;
    return currentValue;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false; 
  };

  list.size = function(){
    return list.count;
  }

  // list.find = function(target){   //Broken
  //   var currentNode = list.head;
  //   while (currentNode !== null) {
  //     if(currentNode.value === target) {
  //       list.currentNode = currentNode;
  //     }
  //     currentNode = currentNode.next;
  //   }
  //   return false; 
  // }

  // list.currentNode.addHere = function(value){ //Broken
  //   var newNode = Node(value);
  //   if(this.head === null){
  //     list.head = newNode;
  //     list.tail = newNode;
  //   } else if(this.next === null){
  //     this.next = newNode;
  //     list.tail = newNode;
  //   } else{
  //     var nextNode = this.next;
  //     this.next = newNode;
  //     this.next.next = nextNode;
  //   }

  //   list.count += 1;
  // }

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

//size of list, right now if you store null in the linked list and call removeHead you can't tell if it's empty or you got a null value
//add value to middle of list

/*
 * Complexity: What is the time complexity of the above functions?
addToTail:O(1)
removeHead:O(1)
contains:O(n)
size:O(1)
Node:O(1)
LinkedList:O(1)
 */
