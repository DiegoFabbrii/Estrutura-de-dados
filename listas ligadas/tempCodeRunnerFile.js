current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;