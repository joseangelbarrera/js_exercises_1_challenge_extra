// encodeWord

/* Define a function called encodeWor that receives
a string and return the codified verdsion of that
string replacing the following characters:

7 instead of T
4 instead of A
5 instead of S
0 instead of O */

function encodeWord (string) {
  string = string.replace('T', '7').replace('A', '4').replace('S', '5').replace('O', '0')
// encode.forEach()
  console.log(string)
}

encodeWord('LA CASA DE PEDRO ES GENIAL')
