// encodeWordPlus

// Improve the previous function to add a random number
// between 0 and 1000 every 7 characters
/*
7 instead of T
4 instead of A
5 instead of S
0 instead of O */

/* var newString = function encodeWord (string) {
  string = string.replace('T', '7').replace('A', '4').replace('S', '5').replace('O', '0')
  return string
}
*/

function newEncodeWord (stringNew2) {
  stringNew2 = stringNew2.split('')
  for (var j = 7; j <= stringNew2.length; j += 7) {
    stringNew2.splice(j, 0, Math.floor((Math.random() * 1000) + 1))
  }
  console.log(stringNew2.join(''))
};

newEncodeWord('LA CASA DE ROQUE ES UNA MARAVILLA QUE HAY QUE VISITAR PRONTO')
