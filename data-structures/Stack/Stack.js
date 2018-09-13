module.exports = class Stack {
	constructor() {
		this.list = [];
		this.top = 0;
  }

  /**
   * Add an element to the stack
   * @param {any} x element to add to stack
   */
	push(x) {
		this.list[this.top++] = x;
	}

  /**
   * removes an element from the stack
   * @return the element removed
   */
	pop() {
		return this.list.pop();
  }

  /**
   * checks if the stack is empty
   * @return {Boolean}
   */
	isEmpty() {
		return !this.list.length;
  }

  /**
   * Returns the length of the elements in the stack
   */
	get length() {
		return this.list.length;
	}

  /**
   * empties the stack
   */
	clear() {
		this.list = [];
		this.top = 0;
	}

  /**
   * Check the last element in the stack
   * @return {any} the last elemet in the stack
   */
	peek() {
		return this.list[this.top - 1];
	}

  /**
   * Returns a string representation of the elements in the stack
   * @param {String} sep A seperator to seperate each element in the stack
   */
	toString(sep = '') {
		return this.list.join(sep);
	}
};
