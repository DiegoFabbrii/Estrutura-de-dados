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