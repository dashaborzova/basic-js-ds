const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    this.root = addWithIn(this.root, data);

    function addWithIn(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node.left = addWithIn(node.left, value);
      }else {
        node.right = addWithIn(node.right, value);
      }
      return node;
    }
  }

  has(data) {
    return searchWithIn(this.root, data);

    function searchWithIn(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }
      return value < node.data ? searchWithIn(node.left, value) : searchWithIn(node.right, value);
    }
  }

  find(data) {
    return searchWithIn(this.root, data);

    function searchWithIn(node, value) {
      if (!node) {
        return null;
      }
      if (node.data === value) {
        return node;
      }
      return value < node.data ? searchWithIn(node.left, value) : searchWithIn(node.right, value);
    }
  }

  remove(data) {
    this.root = removeNodeList(this.root, data);

    function removeNodeList(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.data) {
        node.left = removeNodeList(node.left, value);
        return node;
      }else if(node.data < value) {
        node.right = removeNodeList(node.right, value);
        return node;
      }else {
        if (!node.left && !node.right){
          return null
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNodeList(node.right, minFromRight.data)
        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return null;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) {
      return null;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};