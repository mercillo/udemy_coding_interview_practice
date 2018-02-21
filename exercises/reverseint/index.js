// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //determine if the string is negative
    //math.sign()
    //change int string and reverse
    //change back to int
    sign = Math.sign(n);

    reverseInt = n.toString().split('').reverse().join('');
    return  parseInt(reverseInt)*sign;

    // const reversed = n.toString().split('').reverse().join('');
    // return reversed * math.Sign(n);
    
}   


module.exports = reverseInt;
