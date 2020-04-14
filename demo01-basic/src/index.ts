/*
 *  Mark - Basic
 */

//  without type
const v1 = 1;

//  with types
const v2: number = 1;
// console.log(v2.charAt(1));

// type inferal
const v3 = 3;
// console.log(v3.charAt());

// function declaration
function sum1(left: number, right: number): number {
  return left + right;
}

// type check
// console.log(sum1('1', '2'));

// type referal
function sum2(left: number, right: number) {
  return left + right;
}
// type sum2

/*
 *  Mark - Any
 */

print('haha');

function print(value: any) {
  console.log(value);
}

/*
 *  Mark - Customized Type
 */

// enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction1.Down); // 1
console.log(typeof Direction1.Down); // number

// enum with customized value
enum Direction2 {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

console.log(Direction2.Down); // "up"
console.log(typeof Direction2.Down); //

// just simple type
type Direction3 = 'up' | 'down' | 'left' | 'right';
console.log(Direction2.Down);
console.log(typeof Direction2.Down);
const direction31: Direction3 = 'up';
// const direction32: Direction3 = 'haha';

// combination type
type Wow1 = string | number;
const wow11: Wow1 = 1;
const wow12: Wow1 = '1';
// const wow13: Wow1 = false;

// type alias
type StandardDate = string;
const date: StandardDate = '02/02/2020';

// function type
type NumberProducer = () => number;

const producer: NumberProducer = Math.random;
// const producer2: NumberProducer = Math.sin;

// type as class
type Point = {
  x: number;
  y: number;
};
const point: Point = {
  x: 1,
  y: 2,
};
console.log(point);
console.log(typeof point); // new Point(), Point

/*
 *  Mark - Optional
 */

type Order = {
  sum: number;
  discount?: number;
};

const order1: Order = {
  sum: 1,
};

const order2: Order = {
  sum: 1,
  discount: 80,
};
