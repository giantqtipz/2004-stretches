//Write a function that takes an OBJ of nested elements
// and returns an OBJ of each nested route separeated by a forward ('/') and its end leaf value
//For example...
// const phonebookData = {
//   a: {
//     b: {
//       c: 12,
//     },
//   },
// };
// directory(phonebookData)=>{ 'a/b/c': 12 }

const directory = (obj) => {
  //code in here
  let newObj = {}; // probably need a recursive solution, but don't remember how to do it...
  for(let key in obj){
    for(let innerKey in obj[key]){
      newObj[`${key}/${obj[key]}/${obj[key][innerKey]}`] = obj[key][innerKey];
    }
  }

  console.log(newObj);
};

module.exports = { directory };
