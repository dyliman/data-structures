// Instantiate a new graph
var Graph = function() {
    this.graphs = {};
    this.count = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.graphs[node] = {};
    this.count++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // return _.contains(this.graphNodes, node); 
    if(this.graphs[node]) {
        return true;
    }
    return false; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    delete this.graphs[node];
    this.count--;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    if(this.graphs[fromNode] === undefined || this.graphs[toNode] === undefined){
        return false;
      }
    if(this.graphs[fromNode][toNode] === this.graphs[toNode] && this.graphs[toNode][fromNode] === this.graphs[fromNode]) {
        return true;
    }
    return false; 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this.graphs[fromNode][toNode] = this.graphs[toNode];
    this.graphs[toNode][fromNode] = this.graphs[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    delete this.graphs[fromNode][toNode]; 
    delete this.graphs[toNode][fromNode]; 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.graphs, function(node, key){
    cb(key);    
  })
};

Graph.prototype.size = function(){
    return this.count;
}

//highest amount of connected nodes?

/*
 * Complexity: What is the time complexity of the above functions?
addNode:O(1)
contains:O(1)
removeNode:O(1)
hasEdge:O(1)
addEdge:O(1)
removeEdge:O(1)
forEachNode:O(n)
size: O(1)
Graph:O(1)
 */


