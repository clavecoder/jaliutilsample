

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


