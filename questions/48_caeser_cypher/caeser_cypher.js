// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

// does not work when shift is greater than alphabet and numbers lengths...
// does not pass 4th test
const encryptString = (str, shift) => {
  // YOUR CODE
  if(!str.match(/^[a-z0-9]+$/i)) { throw new Error }

    const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); 
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const numbers =  '123456789'.split('');
  

    
    const reduction = str.split('').reduce((a,b) => {
      caps.includes(b) ? b = caps[(caps.indexOf(b) + shift)%26] || caps[caps.indexOf(b) + (shift%26)] : null;
      letters.includes(b) ? b = letters[(letters.indexOf(b) + shift)%26] || letters[letters.indexOf(b) + (shift%26)] : null;
      numbers.includes(b) ? b = numbers[(numbers.indexOf(b) + shift)%10] || numbers[numbers.indexOf(b) + (shift%10)] : null;
      a.push(b);
      return a;
    }, [])
  
    return reduction.join('');
};

module.exports = { encryptString };
