// activity 01
var c = 50;
var convertTofahrenheit = x => x * 9 / 5 + 32;
console.log("Fahrenheit: " + convertTofahrenheit(c));

// activity 02
console.log("Twikle Twikle little stars".replaceAll("Twikle", "Twinkle"));

// activity 03
var fruits = ["Banana", "Apple", "Orange", "Mango"];
var appendAt = function (i, item, list) {
    copylist = list.slice(); // copy of list
    copylist.splice(i, 0, item);
    return copylist;
}
console.log(appendAt(2, "Grapes", fruits) // add "Grapes" at index 2
    .filter(x => !(x === "Apple"))        // delete "Apple" from list
    .sort((a, b) => b.localeCompare(a))); // sort in descending order
console.log(fruits);                      // list fruits remains unchanged

// activity 04
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}
console.log("Keys: " + Object.keys(person));
console.log("Values: " + Object.values(person));

// activity 05
var num = 77;
var isDivisible = x => (x % 7 == 0) && (x % 11 == 0);
console.log(isDivisible(num));

// activity 06
var n = 10;
var fiblist = [0, 1];
for (var i = 2; i < n; i++) {
    fiblist[i] = fiblist[i - 1] + fiblist[i - 2];
}
console.log(fiblist);