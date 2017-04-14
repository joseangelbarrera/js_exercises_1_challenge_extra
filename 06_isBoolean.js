// isBoolean

// Define a function called isBoolean that receives a value
// and return true if the value received is a boolean

// isBoolean(3) // false
// isBoolean("true") // false
// isBoolean(true) // true

function isBoolean (value) {
  var n = typeof (value)
  if (n === 'boolean') {
    console.log(true)
  } else {
    console.log(false)
  }
}
isBoolean(9 === 7)
