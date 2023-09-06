class DoublyNode {
  constructor(element) {
    this.element = element;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(element) {
    const node = new DoublyNode(element);

    if (this.tail) {
      let current = this.tail;

      node.previous = current;
      current.next = node;

      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.size++;
  }

  insert(element, position) {
    if (position >= 0 && position < this.size) {
      const node = new DoublyNode(element);
      let current = this.head;

      if (position === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.previous = node;
          this.head = node;
        }
      } else if (position === this.size - 1) {
        current = this.tail;
        current.next = node;
        node.previous = current;
        this.tail = node;
      } else {
        const prev = this.getElementAt(position - 1);

        current = prev.next;
        node.next = current;
        prev.next = node;
        current.previous = node;
        node.previous = prev;
      }
      this.size++;
      return true;
    }
    return false;
  }

  getElementAt(position) {
    if (position >= 0 && position < this.size) {
      let current = this.head;

      for (let i = 0; i < position; i++) {
        current = current.next;
      }

      return current;
    }

    return undefined;
  }

  remove(element) {
    const position = this.indexOf(element);
    this.removeAt(position);
  }

  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.size; i++) {
      if (element === current.element) return i;

      current = current.next;
    }

    return -1;
  }

  removeAt(position) {
    if (position >= 0 && position < this.size) {
      let current = this.head;

      if (position === 0) {
        this.head = current.next;
        if (this.size === 1) {
          this.tail = null;
        }
        {
          this.head.previous = null;
        }
      } else if (position === this.size - 1) {
        current = this.tail;
        this.tail = current.previous;
        this.tail.next = null;
      } else {
        const current = this.getElementAt(position);
        const prev = current.previous;
        const next = current.next;

        prev.next = next;
        next.previous = prev;
      }
      this.size--;
      return current.element;
    }

    return undefined;
  }

  length() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}
