class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(item) {
    this.items[this.count] = item;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) return "Objeto está vázio";

    this.count--;
    const lastItem = this.items[this.count];
    delete this.items[this.count];
    return lastItem;
  }

  peek() {
    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }
}

const stackObj = new Stack();
stackObj.push(3);
stackObj.push(10);
stackObj.push(23);
stackObj.push(78);
console.log(stackObj);
console.log(stackObj.pop());
console.log(stackObj.isEmpty());
console.log(stackObj.peek());
console.log(stackObj.size());
stackObj.clear();
console.log(stackObj);
