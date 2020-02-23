const cbytes = require('./dist/src');
const pp = cbytes(6.88456654, {
  everyThousand: ' ',
});
console.log(pp);
