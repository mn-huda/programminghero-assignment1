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
