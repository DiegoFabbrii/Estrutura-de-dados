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
console.log(stackObj); // Stack { count: 4, items: { '0': 3, '1': 10, '2': 23, '3': 78 } }
console.log(stackObj.pop()); // 78
console.log(stackObj.isEmpty()); // false
console.log(stackObj.peek()); // 23
console.log(stackObj.size()); // 3
stackObj.clear();
console.log(stackObj); // Stack { count: 0, items: {} }
console.log(stackObj.isEmpty()); // true
