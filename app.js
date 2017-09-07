// Linear search
// console.log("-- Linear search ----------------");
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i; // item found
    }
  }
  console.log(false);
  return -1; // item not found
}
// console.log(indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
// console.log(indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));

// Binary search
// console.log("-- Binary search ----------------");
function binarySearch(array, value, start = 0, end = array.length) {
  if (start > end) {
    console.log("item not found");
    return -1; // item not found
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log("start, end: ", start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

// console.log("no. of steps: ", binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// console.log("no. of steps: ", binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));

// Depth-first search
console.log("-- Depth-first search ----------------");
class BinaryTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinaryTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinaryTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
  // DFS you traverse as far as you can down the tree before back-tracking
  // - if left branch exists, recursively search the nodes there
  // - afterwards, add the values to the array
  // - repeat on the right side after done with left side
  // - O(n), each node needs to be visited

  // in-order
  // dfs(values = []) {
  //   console.log("push: ", this.value);
  //   if (this.left) {
  //     values = this.left.dfs(values);
  //   }
  //   values.push(this.value);
  //   if (this.right) {
  //     values = this.right.dfs(values);
  //   }
  //   return values;
  // }
  // pre-order
  // dfs(values = []) {
  //   // [0, 1, 2]
  //   // process step
  //   console.log("push: ", this.value);
  //   values.push(this.value);
  //   // left-side recursion
  //   if (this.left) {
  //     values = this.left.dfs(values);
  //   }
  //   // right-side recursion
  //   if (this.right) {
  //     values = this.right.dfs(values);
  //   }
  //   return values;
  // }
  // post-order
  dfs(values = []) {
    if (this.left) {
      values = this.left.dfs(values);
    }
    if (this.right) {
      values = this.right.dfs(values);
    }
    console.log("push: ", this.value);
    values.push(this.value);
    return values;
    // [2, 1, 0]
  }

  // pre-order
  // processing the node
  //  left side recursion
  // right side recursion
  // [0, 1, 3, 2, 5, 4]

  // in order
  //  left side recursion
  // processing the node
  // right side recursion
  // [0, 1, 2, 3, 4, 5]

  // post order
  //  left side recursion
  // right side recursion
  // processing the node
  // [2, 4, 5, 3, 1, 0]

  // const tree = new BinaryTree();
  //
  // tree.insert(0, "head");
  // tree.insert(1, "body");
  // tree.insert(3, "tail");
  // tree.insert(2, "car");
  // tree.insert(5, "arm");
  // tree.insert(4, "leg");

  // console.log("whats inside the tree: ", tree);

  // console.log("in order: ", tree.dfs()); // [ 'head', 'body', 'car', 'tail', 'leg', 'arm' ]
  // console.log("pre order: ", tree.dfs()); // [ '4 leg', '5 arm', '3 tail', '2 body', '1 head' ]
  // console.log("post order: ", tree.dfs()); // [ 'car', 'leg', 'arm', 'tail', 'body', 'head' ]

  //  Breadth-first search
  bfs(values = []) {
    const queue = [this];

    while (queue.length) {
      const node = queue.shift();
      // console.log("push: ", this.value);
      values.push(node.value);
      if (node.left) {
        console.log("push left: ", this.value);
        queue.push(node.left);
      }
      if (node.right) {
        console.log("push right: ", this.value);
        queue.push(node.right);
      }
    }
    console.log("push");
    return values;
  }
}
const tree = new BinaryTree();
tree.insert(0, "head");
tree.insert(1, "body");
// tree.insert(3, "tail");
// tree.insert(2, "car");
// tree.insert(5, "arm");
// tree.insert(4, "leg");

console.log("queue: ", tree.bfs());
