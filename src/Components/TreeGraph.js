import React from 'react';
import Tree from "react-tree-graph";
import 'react-tree-graph/dist/style.css'

class Node {
  constructor(name) {
    this.name = name;
    
  }
}

let data = {
  name: "Parent",
  children: [
    {
      name: "Child",
      children: [
        {
          name: "Child"
        },
        {
          name: "Child"
        },
        {
          name: "Child"
        }
      ]
    },
    {
      name: "Child"
    }
  ]
};

function TreeGraph() {
  return <Tree data={data} height={400} width={800} />;
}

export default TreeGraph;