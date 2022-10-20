var list = [10, 20, 30, 40, 50];
list.forEach((value, index, array) => console.log(value, index, array));

console.log(list.map(x => x ** 2));