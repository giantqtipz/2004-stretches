const findBy = (obj, key, name) => {
  //YOUR CODE HERE
  return obj.find(item => item[key] === name);

};

module.exports = { findBy };
