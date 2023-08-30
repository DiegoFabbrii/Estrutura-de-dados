class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Adiciona um elemento no final da lista.
  push(element) {
    const node = new Node(element);
    let current;

    if (this.isEmpty()) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insere um elemento em uma posição espífica da lista.
  insert(element, position) {
    if (position >= 0 && position <= this.size) {
      const node = new Node(element);

      if (position === 0) {
        let current = this.head;
        node.next = current;
        this.head = node;
      } else {
        let previous = this.getElementAt(position - 1);
        let current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.size++;
      return true;
    }

    return false;
  }

  // Devolve um elemento que está em posição específica da lista. Caso
  // não esteja na lista, undefined será devolvido.
  getElementAt(position) {
    if (position >= 0 && position <= this.size) {
      let current = this.head;

      for (let i = 0; i < position; i++) {
        current = current.next;
      }

      return current;
    }

    return undefined;
  }

  // Remove um elemento da lista.
  remove(element) {
    const position = this.indexOf(element);
    this.removeAt(position);
  }

  // Devolve o índice do elemento na lista. Caso o elemento não esteja
  // na lista, -1 será devolvido.
  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.size; i++) {
      if (element === current.value) return i;
      current = current.next;
    }

    return -1;
  }

  // Remove um elemento de uma posição específica da lista
  removeAt(position) {
    if (position >= 0 && position < this.size) {
      let current = this.head;

      if (position === 0) {
        this.head = current.next;
      } else {
        let previous;

        for (let i = 0; i < position; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.size--;
      return current.value;
    }

    return undefined;
  }

  // Verifica se a lista está vazia.
  isEmpty() {
    return this.size === 0;
  }
  // Retorna o tamanho de lista.
  lenght() {
    return this.size;
  }
}

const linkedList = new LinkedList();

console.log(linkedList.isEmpty()); // true

linkedList.push(3);
linkedList.push(4);
linkedList.push(5);

console.log(linkedList.isEmpty()); // false
console.log(linkedList.lenght()); // 3
console.log(linkedList.getElementAt(1)); // Node { value: 4, next: Node { value: 5, next: null } }
console.log(linkedList.insert(12, 2)); // true

linkedList.push(25);
console.log(linkedList.indexOf(25)); // 4
console.log(linkedList.removeAt(2)); // 12

linkedList.remove(3);

console.log(linkedList.head); //  Node { value: 4, next: Node { value: 5, next: Node { value: 25, next: null } } }
