const LinkedList = require("../listas-ligadas/linkedList");

class HashTableSeparateChaining {
  constructor() {
    this.users = {};
  }

  hashFunction(key) {
    let hash = 0;
    let count = key.length;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i) ** count;
      count--;
    }

    return hash % 13;
  }

  put(key, value) {
    if (key !== null && value !== null) {
      const position = this.hashFunction(key);

      if (this.users[position] == null) {
        this.users[position] = new LinkedList();
      }

      this.users[position].push(value);
      return true;
    }

    return false;
  }

  get(key) {
    const index = this.hashFunction(key);

    if (this.users[index]) {
      const linkedList = this.users[index];

      const position = linkedList.indexOf(key);

      return linkedList.getElementAt(position);
    }

    return undefined;
  }

  remove(key) {
    const index = this.hashFunction(key);

    if (this.users[index]) {
      const linkedList = this.users[index];

      linkedList.remove(key);

      return true;
    }

    return false;
  }
}

// const hashTable = new HashTableSeparateChaining();

// hashTable.put("diego", "diego");

// hashTable.put("ana", "ana");

// hashTable.put("carla", "carla");

// hashTable.put("jaqueline", "jaqueline");

// hashTable.put("maria", "maria");

// hashTable.put("jefferson", "jefferson");

// hashTable.put("joao", "joao");

// hashTable.put("miguel", "miguel");

// hashTable.put("caroline", "caroline");

// hashTable.put("fernanda", "fernanda");

//console.log(hashTable.get("diego").head);
//hashTable.remove("diego");
//console.log(hashTable.get("diego"));
//console.log(hashTable.users);
