// Calculator Plus
// Define a function called calculator that receives an operation
// and several numbers (can be 2 or 10 or whatever) returns the result
// of the operation applied to the values passed as parameters

function calculator () {
  var operation = arguments[0]
  var result = arguments[1]
  var numElements = arguments.length
  var operand
  for (var i = 2; i < numElements; i++) {
    operand = arguments[i]
    if (operation === 'suma') result += operand
    if (operation === 'resta') result -= operand
    if (operation === 'multiplicacion') result *= operand
    if (operation === 'división') result /= operand
  }
  console.log(result)
}
calculator('multiplicacion', 4, 5, 6, 8, 9)
