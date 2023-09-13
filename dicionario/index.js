class Dictionary {
  constructor() {
    this.table = {};
  }

  set(key, value) {
    if (typeof key !== "string")
      throw new Error("Key precisa ser do tipo string");

    this.table[`${key}`] = value;
    return true;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[key];
      return true;
    }

    return false;
  }

  hasKey(key) {
    return this.table[key] ? true : false;
  }

  get(key) {
    if (!this.table[key]) return undefined;

    return this.table[key];
  }

  clear() {
    this.table = {};
  }

  size() {
    return this.keys().length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  keys() {
    return Object.keys(this.table);
  }

  values() {
    return Object.values(this.table);
  }
}
