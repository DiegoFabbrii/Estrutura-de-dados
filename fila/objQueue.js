class Queue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  enqueue(item) {
    this.items[this.count] = item;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    this.count--;

    return result;
  }

  isEmpty() {
    return this.count === 0;
  }

  peek() {
    return this.items[this.lowestCount];
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
  }
}

const queue = new Queue();

console.log(queue.isEmpty()); // true

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.dequeue()); // 3
console.log(queue.peek()); // 4
console.log(queue.size()); // 2
console.log(queue.isEmpty()); // false

console.log(queue.items); // { '1': 4, '2': 5 }

queue.clear();

console.log(queue.items); // {}
