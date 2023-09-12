class Set {
  constructor() {
    this.items = {};
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }

    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }

    return false;
  }

  size() {
    return Object.keys(this.items).length;
  }

  clear() {
    this.items = {};
  }

  values() {
    return Object.values(this.items);
  }

  union(otherSet) {
    const unionSet = new Set();

    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  }

  difference(otherSet) {
    const differentSet = new Set();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differentSet.add(value);
      }
    });

    return differentSet;
  }

  isSubSet(otherSet) {
    if (this.size() > otherSet.size()) return false;

    return this.values().every((value) => otherSet.has(value));
  }
}

const setA = new Set();
const setB = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

setB.add(1);
setB.add(2);
setB.add(3);
setB.add(4);

setB.add(1);
setB.add(2);
setB.add(3);

//const unionSet = setA.union(setB);
//const intersectionSet = setA.intersection(setB);
//const differenceSet = setA.difference(setB);
const isSubSet = setA.isSubSet(setB);

console.log(isSubSet);
