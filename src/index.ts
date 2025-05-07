// Solution 1
function formatString(input: string, toUpper: boolean = true): string {
  if (toUpper) {
    return input.toUpperCase()
  }

  return input.toLowerCase()
}

/*
console.log(1, formatString('Hello'))
console.log(1, formatString('Hello', false))
console.log(1, formatString('Hello', true))
*/

// Solution 2
type Books = { title: string; rating: number }[]

function filterByRating(items: Books): Books {
  return items.filter(item => item.rating >= 4)
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 }
]

/*
console.log(2, filterByRating(books))
*/

// Solution 3
