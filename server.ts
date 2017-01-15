

import * as console from 'console';

import * as util from '@jali-ms/util';

// https://twitter.com/rauschma/status/807585673049837568
(async() => {
  const result = await util.Iterables.concat(['Hi',','], [' ', 'Mom', '!']);

  const str = [...result].join('');

  console.log(str);
})();

