const Dictionary = require('./dictionary.js');

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  // 添加顶点
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.add(v, []);
  }

  // 添加边
  addEdge(v, w) {
    this.adjList.find(v).push(w);
    this.adjList.find(w).push(v);
  }

  toString() {
    this.vertices.forEach(v => {
      let str = `${v} => `;
      this.adjList.find(v).forEach(w => {
        str +=  ' ' + w
      });
      console.log(str);
    })
  }
}

const graph = new Graph();

['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].forEach(c => graph.addVertex(c));

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.toString();

// 输出
/*
A =>  B C D
B =>  A E F
C =>  A D G
D =>  A C G H
E =>  B I
F =>  B
G =>  C D
H =>  D
I =>  E
*／
