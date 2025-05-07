"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// Test 1
console.log(1, (0, index_1.formatString)('Hello'));
console.log(1, (0, index_1.formatString)('Hello', false));
console.log(1, (0, index_1.formatString)('Hello', true));
// Test 2
const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 }
];
console.log(2, (0, index_1.filterByRating)(books));
// Test 3
console.log(3, (0, index_1.concatenateArrays)(['a', 'b'], ['c']));
console.log(3, (0, index_1.concatenateArrays)([1, 2], [3, 4], [5]));
// Test 4
const myCar = new index_1.Car('Toyota', 2020, 'Corolla');
console.log(4, myCar.getInfo());
console.log(4, myCar.getModel());
// Test 5
console.log(5, (0, index_1.processValue)('hello'));
console.log(5, (0, index_1.processValue)(10));
// Test 6
const products = [
    { name: 'Pen', price: 10 },
    { name: 'Notebook', price: 25 },
    { name: 'Bag', price: 50 }
];
console.log(6, (0, index_1.getMostExpensiveProduct)(products));
// Test 7
console.log(7, (0, index_1.getDayType)(index_1.Day.Monday));
console.log(7, (0, index_1.getDayType)(index_1.Day.Sunday));
// Test 8
(0, index_1.squareAsync)(4)
    .then(val => {
    console.log(8, val);
})
    .catch(console.error);
(0, index_1.squareAsync)(-3)
    .then(val => {
    console.log(8, val);
})
    .catch(e => {
    console.error(8, e);
});
