class HashTable {
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

    return hash % 50021;
  }

  put(key, value) {
    if (key !== null && value !== null) {
      const index = this.hashFunction(key);
      this.users[index] = value;
      return true;
    }

    return false;
  }

  get(key) {
    const index = this.hashFunction(key);

    if (this.users[index]) {
      return this.users[index];
    }

    return undefined;
  }

  remove(key) {
    const index = this.hashFunction(key);

    if (this.users[index]) {
      delete this.users[index];
      return true;
    }

    return false;
  }
}

const hashTable = new HashTable();

hashTable.put("alexandre", {
  username: "diego",
  email: "diego@email.com",
});

console.log(hashTable.get("dieo"));
console.log(hashTable.users);
