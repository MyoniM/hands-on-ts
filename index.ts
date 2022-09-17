// Types
class Color {}
const red = new Color(); // red => Color type
// Types are used Everywhere!

// =========================================================================================
// Type annotation: Code <<we>> add to tell TS what types of value will a variable refer to
// Type inference: TS tries to figure out  what type of value a variable refers to
// =========================================================================================

// Type annotation (Variables)
const apples: number = 0;
const nothing: undefined = undefined;
const colors: string[] = ['red', 'yellow'];
class Car {}
const bmw: Car = new Car();
const point: { x: number; y: number } = { x: 10, y: 20 };
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
// If declaration and initialization are on the same line, TS can infer the type

// =========================================================================================
// When to use annotations
// 1) Function that returns any type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
// 2) Late initialization
// 3) When inference doesn't work
// =========================================================================================

// void & never
const logMessage = (message: string): void => {
  console.log(message);
};
// A function returning 'never' cannot have a reachable end point
const throwError = (message: string): never => {
  throw new Error(message);
};

// =========================================================================================
// Flexible array
const arr: (Date | string)[] = [];

// Tuple
const drink: [string, boolean, number] = ['pepsi', true, 500];
// with type alias
type Drink = [string, boolean, number];
const pepsi: Drink = ['pepsi', true, 500];
// =========================================================================================

// Interfaces + Classes => Strong code reusability
// Interfaces create a new type
// Classes can implement interfaces