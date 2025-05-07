// Solution 1
export function formatString(input: string, toUpper: boolean = true): string {
  if (toUpper) {
    return input.toUpperCase()
  }

  return input.toLowerCase()
}

// Solution 2
type Books = { title: string; rating: number }[]

export function filterByRating(items: Books): Books {
  return items.filter(item => item.rating >= 4)
}

// Solution 3
export function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, cur) => acc.concat(cur))
}

// Solution 4
export class Vehicle {
  constructor(private _make: string, private _year: number) {}

  getInfo(): string {
    return `Make: ${this._make}, Year: ${this._year}`
  }
}

export class Car extends Vehicle {
  constructor(make: string, year: number, private _model: string) {
    super(make, year)
  }

  getModel(): string {
    return `Model: ${this._model}`
  }
}

// Solution 5
export function processValue(value: string | number): number {
  if (typeof value === 'string') {
    return value.length
  }

  return value * 2
}

// Solution 6
interface Product {
  name: string
  price: number
}

export function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length > 0) {
    return products.reduce((acc, cur) => (acc.price > cur.price ? acc : cur))
  }

  return null
}

// Solution 7
export enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

export function getDayType(day: Day): 'Weekend' | 'Weekday' {
  return day > 4 ? 'Weekend' : 'Weekday'
}

// Solution 8
export async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw Error('Negative number not allowed')
  }

  return new Promise(res => {
    setTimeout(() => res(n ** 2), 1000)
  })
}
