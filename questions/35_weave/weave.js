// weave should take any number of arrays and return a singular array of all arrays interwoven.
// if one array is longer than another place a null value in its allocated place
// weave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]

const weave = (...args) => {
  //enter code here
  // if(typeof args[0] !== 'array') { throw new Error() }
  // const result = args.reduce((a,b) => {
  //   return b.map((c, idx) => {
  //     return c;
  //   });
  // })
  // console.log(result);

  const test = [...args];
  console.log(args, test);

};

module.exports = { weave };
