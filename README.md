# `keyof` and `enum` in TypeScript

Writing efficient TypeScript will make your life easy. Even developers who have some exposure to TypeScript face difficulties in writing TypeScript. This article will discuss two critical ideas of TypeScript, `keyof` and `enum'.

`keyof` is a TypeScript Operator.

`enum` is a non-type level extension for JavaScript.

## How to use `keyof`?

`keyof` is described as an Operator in TypeScript documentation. This means this keyword is used to manipulate the definition of types to create a new type.

`keyof` is basically used to create an union of types from the keys of an Interface or an Object type definition.

Let's see some examples. Below is an example of a TypeScript Object:

```typescript
type CarTypes = {
  sedan: string
  sports: string
  racing: string
  offroad: string
  agricultural: string
  industrial: string
  truck: string
  military: string
  other: string
}
```

Or can define the same Object Type as a TypeScript Interface:

```typescript
interface CarTypes {
  sedan: string
  sports: string
  racing: string
  offroad: string
  agricultural: string
  industrial: string
  truck: string
  military: string
  other: string
}
```

Let's see we want to define a Type which will only accept any car type from the Object Type or Interface described above. We can define it like this:

```typescript
type TypeOfCar =
  | sedan
  | sports
  | racing
  | offroad
  | agricultural
  | industrial
  | truck
  | military
  | other
```

Now you can easily see the problem. The Object Type or the Interface can include a very long list of keys, and it would be a developer's nightmare to define a new type. So, the solution is this:

```typescript
type TypeOfCar = keyof CarTypes
```

It's simple, isn't it?

## How to use `enum`?

`enum` is not a typical type definition in TypeScript. This allows developers to define named constants in a set.

Let's see it in an example:

```typescript
enum Rating {
  VeryBad,
  Bad,
  Okay,
  Good,
  VeryGood
}
```

We all can understand it is a 5-star rating reference. When a customer feedback form or IVR asks to choose between 1 to 5 to rate a product, our apps record the reference number from every review.

Now from the definition of the example above, TypeScript will create references of `VeryBad = 1`, `Bad = 2`, `Okay = 3`, `Good = 4` and `VeryGood = 5`.

Let's explore how TypeScript allows us to simplify developer experience by providing a list inside `enum` as references:

```typescript
function recordReview(reviewDescription: string, reviewScore: Rating): unknown {
  someReviewProcessingLogic()
}

recordReview(`some review text in string`, Rating.VeryGood)
```

Do you see how the function is called? A developer won't need to remember the reference list of all rating, a simple text based referencing will help the developer clearly see and write some relevant logic.

Inside the function, it will pass the number `5` for `VeryGood`.

Let's see another example of pre-defined `enum` where we will avoid the auto-numbering:

```typescript
enum MapDirection {
  Up: "North",
  Down: "South",
  Right: "East",
  Left: "West"
}
```

Many of us cannot remember to which direction to move inside map, but we can understand the up, down, left and right references if a map put on table or a PC screen.

A developer can use the references to pan views inside a map from this like the below example:

```typescript
function panView(direction: MapDirection): string {
  someProcessingLogic()
  console.log(`Moving map view to ${direction}.`)
}

panView(MapDirection.Up)
```

This becomes easy when we have a long reference list. `enum` really helps developer experience by simplifying definitive references.
