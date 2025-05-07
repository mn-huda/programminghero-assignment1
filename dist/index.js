"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Vehicle = void 0;
exports.formatString = formatString;
exports.filterByRating = filterByRating;
exports.concatenateArrays = concatenateArrays;
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
    constructor(make, year, _model) {
        super(make, year);
        this._model = _model;
    }
    getModel() {
        return `Model: ${this._model}`;
    }
}
exports.Car = Car;
