class Queue {
  constructor() {
    this.items = [];
  }

  // Adiciona um item no último elemento da fila
  enqueue(...item) {
    if (item.length === 1) {
      this.items[this.items.length] = item[0];
    } else {
      for (let i = 0; i < item.length; i++) {
        this.items[this.items.length] = item[i];
      }
    }
  }

  // Remove o primeiro item da fila e retorna o seu valor
  dequeue() {
    if (this.isEmpty()) return "Não foi possível remover ";
    const firstItem = this.items[0];

    const newItems = [];

    for (let i = 1; i < this.items.length; i++) {
      newItems.push(this.items[i]);
    }

    this.items = newItems;

    return firstItem;
  }

  // Retorna o primeiro elemento da fila
  peek() {
    return this.items[0];
  }

  // Retorna true caso a fila esteja vazia e false caso não esteja vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Remove todos os items da fila
  clear() {
    this.items = [];
  }

  // Retorna a quantidade de items da fila
  size() {
    return this.items.length;
  }
}

const queue = new Queue();

console.log(queue.isEmpty()); // true

queue.enqueue("Ana");
queue.enqueue("Miguel");
queue.enqueue("Joao");

console.log(queue.items); // [ 'Ana', 'Miguel', 'Joao' ]

queue.dequeue();

console.log(queue.items); // [ 'Miguel', 'Joao' ]
console.log(queue.size()); // 2
console.log(queue.peek()); // Miguel
console.log(queue.isEmpty()); // false

queue.clear();

console.log(queue.items); // []
