/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(data, key, toReturn) {
  // YOUR CODE
  return data.sort((a,b) => a[key] - b[key]).map(item => item[toReturn]);
}

module.exports = { sortOrder };
