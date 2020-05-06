const test = require('ava');
const BST = require('../data-structures/BinarySearchTree/BinarySearchTree');
const BSTNode = require('../data-structures/BinarySearchTree/BSTNode');

const bst = new BST('test-BST');

test.beforeEach(() => {
  bst.emtpy();
  bst.insert(32);
  bst.insert(14);
  bst.insert(21);
  bst.insert(12);
  bst.insert(4);
  bst.insert(23);
  bst.insert(3);
  bst.insert(5);
  bst.insert(17);
  bst.insert(2);
  bst.insert(27);
  bst.insert(17);
  bst.insert(18);
  bst.insert(1);
  bst.insert(14);
});

// test('Binary Search Tree - insert, find', t => {
//   t.is(bst.find(2).element, 2);
//   t.is(bst.find(3).element, 3);
//   t.true(bst.find(4) instanceof BSTNode);
//   t.false(bst.find(44));
//   t.false(bst.find(19));
// });

// test('Binary Search Tree - isPresent, find', t => {
//   t.is(bst.find(2).element, 2);
//   t.false(bst.find(19));
//   // Expect false from both
//   t.is(Boolean(bst.find(14)), bst.isPresent(14));
//   t.is(bst.find(30), bst.isPresent(30));
// });

// test('Binary Search Tree - findMin and findMax', t => {
//   t.is(bst.findMin().element, 1);
//   bst.remove(1);
//   t.is(bst.findMin().element, 2);
//   t.is(bst.findMax().element, 32);
//   bst.remove(32);
//   t.is(bst.findMax().element, 27);
//   bst.remove(27);
//   t.is(bst.findMax().element, 23);
// });

// test('Binary Search Tree - ⚠ findMinHeight and findMaxHeight', t => {
//   t.true(bst.findMinHeight() < bst.findMaxHeight());
// });

// test('Binary Search Tree - ⚠ inOrder', t => {
//   const result = bst.inOrder();
//   t.is(result[0], 1);
//   t.is(result[1], 2);
//   t.is(result[result.length - 1], 32);
// });

test('Binary Search Tree - ⚠ preOrder', t => {
  const result = bst.preOrder();
  t.is(result[0], 1);
  t.is(result[1], 2);
  t.is(result[result.length - 1], 32);
});
