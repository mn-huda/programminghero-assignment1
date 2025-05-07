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
