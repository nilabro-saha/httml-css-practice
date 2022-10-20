var fruits = ["Banana", "Apple", "Orange", "Mango"];
fruits.splice(2, 0, "Grapes");
fruits = fruits.filter(x => !(x === "Apple"));
console.log(fruits);