// activity 01
var c = 50;
console.log("Fahrenheit: " + (x => x * 9 / 5 + 32)(c));

// activity 02
console.log("Twikle Twikle little stars".replaceAll("Twikle", "Twinkle"));

// activity 03
var fruits = ["Banana", "Apple", "Orange", "Mango"];
fruits.splice(2, 0, "Grapes");
fruits = fruits.filter(x => !(x === "Apple"));
console.log(fruits);

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
var number = 77;
console.log((x => (x % 7 == 0) && (x % 11 == 0))(number));

// activity 06
var n = 10;
var fiblist = [0, 1];
for (var i = 2; i < n; i++) {
    fiblist[i] = fiblist[i - 1] + fiblist[i - 2];
}
console.log(fiblist);