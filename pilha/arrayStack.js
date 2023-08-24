class Stack {
  constructor() {
    this.items = [];
  }

  // Adiciona um item no último elemento do array
  push(...item) {
    if (item.length === 1) {
      this.items[this.items.length] = item[0];
    } else {
      for (let i = 0; i < item.length; i++) {
        this.items[this.items.length] = item[i];
      }
    }
  }

  // Remove o último item do array e retorna o seu valor
  pop() {
    if (this.isEmpty()) return "Não foi possível remover ";
    const lastItem = this.items[this.items.length - 1];

    const newItems = [];

    for (let i = 0; i < this.items.length - 1; i++) {
      newItems.push(this.items[i]);
    }

    this.items = newItems;

    return lastItem;
  }

  // Retorna o último elemento da pilha
  peek() {
    return this.items[this.items.length - 1];
  }

  // Retorna true caso a pilha esteja vazia e false caso não esteja vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Remove todos os items da pilha
  clear() {
    this.items = [];
  }

  // Retorna a quantidade de items da pilha
  size() {
    return this.items.length;
  }
}

module.exports = Stack;

const minhaPilha = new Stack();

// console.log(minhaPilha.isEmpty());
// minhaPilha.push(1);
// minhaPilha.push(2);
// minhaPilha.push(3, 4, 5);

// console.log(minhaPilha.items);
// console.log(minhaPilha.pop());
// console.log(minhaPilha.items);
