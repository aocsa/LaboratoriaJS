This unit will introduce you to arrays written in JavaScript.

You will learn about the theory behind using arrays and you will also complete some practical challenges to practise your new skills.

1\. 1\. Experiments
===================

This window is provided for you to try out any code you develop. Use it to experiment and practise. Feel free to come back to this page at any time.
 
 

```js
//@tdd:ejercicio-01_test.js
// Completar la función stringToHash que tome un string
// y lo transforme a un hash numerico a traves de la suma
// del valor decimal ASCII de cada letra del string


function stringToHash(string) {
  if (typeof string !== 'string') 
    return 'Error de dato'
  var sum = 0
  for (var i = 0; i < string.length; i++) 
    sum += string.charCodeAt(i)
  return sum
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.stringToHash = stringToHash;
}



```

[Check It!]()
 

