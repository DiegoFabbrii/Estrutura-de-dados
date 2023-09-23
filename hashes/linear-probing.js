class HashTableLinearProbing {
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
    if (key != null && value != null) {
      let position = this.hashFunction(key);
      let isPositionOccupied = true;

      if (this.users[position] === value)
        throw new Error("Esta chave já existe! Tente uma diferente");

      while (isPositionOccupied) {
        if (!this.users[position]) {
          this.users[position] = value;
          isPositionOccupied = false;
        }

        position++;
      }
      return true;
    }

    return false;
  }

  get(key) {
    let position = this.hashFunction(key);
    let isEqual = false;

    if (!this.users[position]) return undefined;

    while (!isEqual) {
      if (this.users[position] === key) {
        isEqual = true;
        return this.users[position];
      }

      position++;
    }
  }

  remove(key) {
    let position = this.hashFunction(key);
    let isEqual = false;

    if (!this.users[position]) return false;

    while (!isEqual) {
      if (this.users[position] === key) {
        isEqual = true;
        delete this.users[position];
        return true;
      }

      position++;
    }
  }
}

const linearProbing = new HashTableLinearProbing();

linearProbing.put("camila", "camila");
linearProbing.put("carla", "carla");

console.log(linearProbing.get("carla"));
console.log(linearProbing.remove("juan"));
console.log(linearProbing.users);
