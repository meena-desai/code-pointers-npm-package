# code-pointers-js

code-pointers-js is a light weight javascript library for dealing with number array.

## Installation
```bash
npm i code-pointers-js
```

## Usage

```javascript
const collection = require('code-pointers-js')

const test = collection([33,66,78,25,78,10,22,44,66,77,99,125])

// Min:
test.min() // 10
// Max:
test.max() // 125
// Sum:
test.sum() // 723
// Average:
test.avg() // 60.25
// Even: 
test.even() // [66, 78, 78, 10, 22, 44, 66]
// Odd: 
test.odd() // [ 33, 25, 77, 99, 125 ]
// Unique: 
test.unique() // [ 33, 66, 78, 25, 10, 22, 44, 77, 99, 125]
// MoveTofFirst: 
test.moveToFirst((i)=> i%3===0)) //  [ 33,  66, 78, 78, 66, 99, 25, 10, 22, 44, 77, 125]
// SecondMax: 
test.secondMax() // 99
// SecondMin: 
test.secondMin() // 22
// Asc: 
test.asc() // [ 10,  22, 25, 33, 44, 66,  66, 77, 78, 78, 99, 125]
// Desc: 
test.desc() // [ 125, 99, 78, 78, 77,  66, 66, 44, 33, 25,  22, 10]
// Merge: 
test.merge([11,30,44])) // 12+3 = 15 items
// Shuffle: 
test.shuffle() // [33, 44, 66, 11, 10, 30, 78, 99, 22, 66, 78, 125, 44, 25, 77]

```

