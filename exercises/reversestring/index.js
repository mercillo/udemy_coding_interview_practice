// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse3(str) {
    return str.split('').reverse().join('');
}


//solution #2
//more manual work solutions
function reverse2(str){
    let reversed = '';
    // for(var i=0;i<str.length;i++){
    //     reversed = str[i] + reversed;

    // }
    // return reversed
    for (let character of str){
        reversed= character + reversed;
    }
    return reversed;
}

//solution #3
function reverse(str){
    return str.split('').reduce(function(reversed,char){
        return char + reversed;
    },'')

    //return str.split('').reduce((reversed,char)=> char + reversed,'')
}


module.exports = reverse;
