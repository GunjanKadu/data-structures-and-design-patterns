const Queue = require('../Queue');

const n = [12, 23, 52, 91, 31, 92, 22, 85, 15, 35, 46, 27, 93, 33, 21, 52];

/**
 * Sorts numbers based on the radix sort algorithm
 * **NOTE** works only numbers less than 99
 * @param {[Number]} numbers numbers to sort
 * @returns {[Number]} An array of the sorted numbers
 */
module.exports = function (numbers = n) {
  const queues1 = [];
  const queues10 = [];
  const queueResults1 = [];
  const finalResults = [];

  for (let x = 0; x < 10; x++) {
    queues1[x] = new Queue(`Queue 1 - ${x}`);
    queues10[x] = new Queue(`Queue 10 - ${x}`);
  }

  numbers.forEach(num => {
    const rem1 = num % 10;
    queues1[rem1].enqueue(num);
  });

  queues1.forEach(queue => {
    for (const x of queue) {
      queueResults1.push(x);
    }
  });

  queueResults1.forEach(num => {
    const rem10 = parseInt(num / 10, 10);
    queues10[rem10].enqueue(num);
  });

  queues10.forEach(queue => {
    for (const x of queue) {
      finalResults.push(x);
    }
  });

  return finalResults;
};
