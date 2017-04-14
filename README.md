# Javascript Exercises

### 1. Calculator

Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters

```calculator("suma",10,5) // 15
   calculator("resta",10,5) // 5
   calculator("multiplicacion",10,5) // 50
   calculator("division",10,5) // 2
```

***solution***

```
function calculator (operation, a, b) {
  if (operation === 'sum') {
    return (a + b)
  } else if (operation === 'multiply') {
    return (a * b)
  } else if (operation === 'rest') {
    return (a - b)
  } else if (operation === 'division') {
    return (a / b)
  }
}

console.log(calculator('sum', 24, 237))

// 261
```


### 2. Calculator Plus

Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters

```calculator("suma",10,5,2,3) // 20
   calculator("resta",10,5,1) // 4
   calculator("multiplicacion",10,5,2) // 100
   calculator("division",10,5) // 2 
```

***solution***

```
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

// 8640
```


### 3. getFullName

Define a function called ​getFullName​ that receives a name and a surname and return the string "Your full name is " with the name & surname concatenated

``` getFullName( "juanma", "garrido") // "Your full name is "juanma garrido""
```

***solution***

```
function getFullName (name, surname) {
  return 'Your full name is ' + name + ' ' + surname + '.'
}
console.log(getFullName('Jose', 'Barrera'))

// Your full name is Jose Barrera.
```


### 4. isNumber

Define a function called ​isNumber​ that receives a value and return true if the value received is a number

```isNumber(3) // true
   isNumber("3") // false
   isNumber("asass") // false
```


***solution***

```
function isNumber (value) {
  var solution = Number.isFinite(value)
  return solution
}
console.log(isNumber(45))

// true
```


### 5. isString

Define a function called ​isString​ that receives a value and return true if the value received is a string

   ```isString(3) // false
   isString("3") // true
   isString("asass") // true
   ```

***solution***

```
function isString (value) {
  var valueOf = typeof (value)
  if (valueOf === 'string') {
    return true
  } else { return false }
}
console.log(isString('casa'))

// true
```


### 6. isBoolean

Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean
```
   isBoolean(3) // false
   isBoolean("true") // false
   isBoolean(true) // true
```

***solution***

```
function isBoolean (value) {
  var n = typeof (value)
  if (n === 'boolean') {
    console.log(true)
  } else {
    console.log(false)
  }
}

isBoolean(9 === 7)

// true

```


### 7. encodeWord

Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:

*7 instead of T
*4 instead of A
*5 instead of S
*0 instead of O


```
function encodeWord (string) {
  string = string.replace('T', '7').replace('A', '4').replace('S', '5').replace('O', '0')
// encode.forEach()
  console.log(string)
}

encodeWord('LA CASA DE PEDRO ES GENIAL')

// L4 CA5A DE PEDR0 ES GENIAL

```

// 

### 8. encodeWordPlus

Improve the previous function to add a random number between 0 and 1000 every 7 characters

***solution***

```// encodeWordPlus

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

// LA CASA757 DE RO29QUE ES299 UNA M9ARAVIL806LA QUE787 HAY Q397UE VIS856ITAR P604RONTO 
```


