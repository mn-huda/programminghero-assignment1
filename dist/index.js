"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day = exports.Car = exports.Vehicle = void 0;
exports.formatString = formatString;
exports.filterByRating = filterByRating;
exports.concatenateArrays = concatenateArrays;
exports.processValue = processValue;
exports.getMostExpensiveProduct = getMostExpensiveProduct;
exports.getDayType = getDayType;
exports.squareAsync = squareAsync;
// Solution 1
function formatString(input, toUpper = true) {
    if (toUpper) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
}
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
// Solution 3
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, cur) => acc.concat(cur));
}
// Solution 4
class Vehicle {
    _make;
    _year;
    constructor(_make, _year) {
        this._make = _make;
        this._year = _year;
    }
    getInfo() {
        return `Make: ${this._make}, Year: ${this._year}`;
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    _model;
    constructor(make, year, _model) {
        super(make, year);
        this._model = _model;
    }
    getModel() {
        return `Model: ${this._model}`;
    }
}
exports.Car = Car;
// Solution 5
function processValue(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    return value * 2;
}
function getMostExpensiveProduct(products) {
    if (products.length > 0) {
        return products.reduce((acc, cur) => (acc.price > cur.price ? acc : cur));
    }
    return null;
}
// Solution 7
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (exports.Day = Day = {}));
function getDayType(day) {
    return day > 4 ? 'Weekend' : 'Weekday';
}
// Solution 8
async function squareAsync(n) {
    if (n < 0) {
        throw Error('Negative number not allowed');
    }
    return new Promise(res => {
        setTimeout(() => res(n ** 2), 1000);
    });
}
