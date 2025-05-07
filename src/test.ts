import {
  formatString,
  filterByRating,
  concatenateArrays,
  Vehicle,
  Car,
  processValue,
  getMostExpensiveProduct,
  Day,
  getDayType,
  squareAsync
} from './index'

// Test 1
console.log(1, formatString('Hello'))
console.log(1, formatString('Hello', false))
console.log(1, formatString('Hello', true))

// Test 2
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 }
]

console.log(2, filterByRating(books))

// Test 3
console.log(3, concatenateArrays(['a', 'b'], ['c']))
console.log(3, concatenateArrays([1, 2], [3, 4], [5]))

// Test 4
const myCar = new Car('Toyota', 2020, 'Corolla')
console.log(4, myCar.getInfo())
console.log(4, myCar.getModel())

// Test 5
console.log(5, processValue('hello'))
console.log(5, processValue(10))

// Test 6
const products = [
  { name: 'Pen', price: 10 },
  { name: 'Notebook', price: 25 },
  { name: 'Bag', price: 50 }
]

console.log(6, getMostExpensiveProduct(products))

// Test 7
console.log(7, getDayType(Day.Monday))
console.log(7, getDayType(Day.Sunday))

// Test 8
squareAsync(4)
  .then(val => {
    console.log(8, val)
  })
  .catch(console.error)
squareAsync(-3)
  .then(val => {
    console.log(8, val)
  })
  .catch(e => {
    console.error(8, e)
  })
