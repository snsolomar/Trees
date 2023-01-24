//Given the roots of two binary trees p and q, write a function to check if they are the same or not.

//Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  return JSON.stringify(p) === JSON.stringify(q);
};

let p1 = [1, 2, 3];
let q1 = [1, 3, 2];

console.log(isSameTree(p1, q1));

//Given the root of a binary tree, determine if it is a valid binary search tree (BST).

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (root == null) {
    return null;
  }

  return check(root, null, null);
};

var check = function (root, lower, upper) {
  // If you get to the bottom of a list successfully, without finding any irregularities
  if (root == null) {
    return true;
  }

  // If there is a lower value, comparing it with the node it came from, to confirm its less than.
  if (lower != null) {
    if (root.val >= lower) {
      return false;
    }
  }

  // If there is an upper value, compare it with the node it came from, to confirm its greater than
  if (upper != null) {
    if (root.val <= upper) {
      return false;
    }
  }

  // If all nodes reach the bottom without any irregulaties in the binary tree conditions, return true
  return (
    check(root.left, root.val, upper) && check(root.right, lower, root.val)
  );
};
