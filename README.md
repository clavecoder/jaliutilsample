# Sample use of @jali/util package

## Demonstrates use of the `@jali-ms/util` package

### Getting Started

1. Clone repository

   > `git clone https://github.com/clavecoder/jaliutilsample.git`

1. Build and run

   > `npm test`


### Source

From [server.ts](./server.ts):

```typescript
import * as console from 'console';

import * as util from '@jali-ms/util';


const result1 = util.Iterables.concat([1], [2], [3], [4]);

console.log('Demonstrates for..of:');
for (const element of result1){
  console.log(element);
}

const result2 = util.Iterables.concat(['Hi',','], [' ', 'Mom', '!']);

console.log();
console.log('Demonstrates spread operator:');
const str = [...result2].join('');
console.log(str);
```

### Output

```text
Demonstrates for..of:
1
2
3
4

Demonstrates spread operator:
Hi, Mom!
```

## Explanation

[Jali](https://github.com/latticework/jali)'s JavaScript packages
include `@jali-ms/util`, which provides language level utilities. These
include:

- Argument errors and argument validation functions.
- `InvalidStateError` for fatal errors.
- Functions to give [iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
  the same support as the [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  class. This facilitates writing code based on iterators rather than arrays.
- TypeScript [User-Defined Type Guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards)
  for errors and iterators.

This example shows the use of `Iterables.concat` to concatenate arrays
as iterables and, then, perform two iteration operations: `for..of` and
`...`, the spread operator.