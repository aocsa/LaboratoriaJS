Esta unidad le presentará a los arrays escritos en JavaScript.

Aprenderá acerca de la teoría detrás de usar arrays y también completará algunos desafíos prácticos para practicar sus nuevas habilidades.

1 \. 1 \. Experimentos
======================

Esta ventana se proporciona para que pruebe cualquier código que desarrolle. Úselo para experimentar y practicar. Siéntase libre en volver a esta página en cualquier momento.

```js
// Escribe el código de experimento a continuación
//

console.log ('su archivo de experimento')

```

[EJECUTE SU CÓDIGO]()

2 \. Arrays explicados
======================

Usted ya ha estudiado arrays en la unidad Arrays de Flode, por lo que debe estar familiarizado con el concepto de arrays. (Si no ha completado la unidad Flode, le recomendamos que lo haga. Está disponible en el curso `Una Introducción a la Programación \> Flode`).

```js

// Crear una lista con edades
var edades = [12, 5, 68, 51, 62]

// Crear una lista con nombres
var nombres = ['Richard', 'Alice', 'Jennifer', 'Bob', 'Harry']

for (var indice = 0; indice < edades.length; indice ++) {
  console.log (nombres[indice] + 'es' + edades[indice])
}

```

[EJECUTE EL CÓDIGO]()

Creación de arrays
------------------

La creación de arrays en JavaScript funciona exactamente de la misma manera que en Flode.

### Cadenas de Arrays (strings de arrays)

Crea un string de arrays como esta:

```
strArray = ['Alice', 'Shahneila', 'Bob,' Tariq ']
```

### Arrays de números

Aquí hay un ejemplo de un array numérico:

```
numArray = [1, 3,141, 5, 17,1, 100]
```

### Array vacío

Si va a crear su propio array, entonces necesita crear una variable de array vacía antes de agregar cualquier dato a ella.

La forma correcta de crear una variable de array vacía es la siguiente:

```
numArray = []
numArray [0] = 4
```

Nota: el siguiente ejemplo fallará porque no se ha creado el array:

```
numArray [0] = 4
```

2 \. 1 \. Longitud de un array
==============================

Cada array tiene un número de elementos (valores o variables). Es importante conocer el número de elementos que tiene una array.

```js

// declare un array de números
var numeros = [1, 2, 3, 4, 5, 6]

// obtener la longitud del array
var longitudArray = numeros.length

// imprimir la longitud
console.log ('Longitud de [' + numeros + '] es:' + longitudArray)

```

[EJECUTE EL CÓDIGO]()

Mire el código de la izquierda, verás lo siguiente:

```
6  var longitudArray = numeros.length
```

Este código devuelve el número de elementos del array `numeros`.

Este código se utiliza a menudo en bucles para realizar un recorrido circular a través de todos los elementos de un array.

2 \. 2 \. Configurando elementos del array
==========================================

Es fácil establecer un elemento de un array utilizando las mismas técnicas.

`numArray [4] = 50` establece el quinto elemento del array llamado` numArray` a `50`.

Definiendo un array
-------------------

Si desea crear un array y ya sabe los elementos (que no es el caso a menudo), entonces usted puede hacerlo de esta manera.

```
numArray = [1, 55, 3, 16]
```

A menudo, no tendrás ningún elemento para comenzar y querrás agregarlos más tarde.

Si este es el caso, debe primero crear un array vacío como éste .

```
numArray = []
```

Ejecutar el código
------------------

Eche un vistazo al código de la izquierda.

```js
// Crear algunos arrays
var unusedArray = [1,2,3,4]
var unusedStrArray = ['Alice', 'Shahneila', 'Bob', 'Tariq']
var numArray = []

// Asignar algunos datos a los elementos 1 y 5
numArray [0] = 10
numArray [4] = 50

// Mostrarlos todos en la consola
for (var i=0; i < numArray.length; i++) {
    console.log (numArray[i])
}

```

[EJECUTE EL CÓDIGO]()

Esto muestra cómo:

1. Defina un nuevo array.
2. Asigne valores a los elementos del array (tenga en cuenta que no estamos asignando valores a los elementos * contiguos *).
3. Muestre cada elemento del array en la consola.

Cuando ejecute el código, observe cómo algunos de los elementos se muestran como * undefined *. La razón de esto es que sólo asignamos los elementos 0 y 4 \. JavaScript inserta automáticamente los elementos del array entre nosotros. Debido a que los elementos que JavaScript ha insertado son indefinidos, no tienen ningún valor asignado a ellos.

2 \. 3 \. push y pop
====================

JavaScript tiene un par de métodos útiles para agregar elementos al final de un array. Se les llama push y pop.

```js

// Crear un array con algunos valores
var valores = [10, 20, 30, 40, 50, 60]

//ciclo de 0 a 2, empujando cada uno al final de la lista
for (var indice = 0; indice < 3; indice++) {
  valores.push (indice)
  console.log (valores)
}

console.log ('--- Remove  ')

//ciclo de 0 a 2, saliendo del final de la lista
for (var indice = 0; indice < 3; indice++) {
  valores.pop ()
  console.log (valores)
}

```

[EJECUTE SU CÓDIGO]()

Push
----

`valores.push(newElement)` se utiliza para agregar un nuevo elemento al final de una array. Imagínese como "estamos empujando un nuevo elemento al final de la array".

Pop
---

`valores.pop()` se utiliza para eliminar el último elemento de la array. Imagínese como "estamos haciendo estallar un elemento fuera del final de la array".

Ejecute el código para comprobar que entiende lo que está sucediendo.

2 \. 4 \. Unshift y shift 
==========================

Unshift y shift también son  métodos útiles para agregar o quitar elementos. Donde push y pop agregan y quitan elementos al * final * de un array, unshift y shift agregan y quitan elementos al * comienzo*.

```js

// Crear un array con algunos valores
var valores = [10, 20, 30, 40, 50, 60]

for (var indice = 0; indice < 3; indice++) {
  valores.unshift(indice)
  console.log (valores)
}

console.log ('--- Remove  ')

for (var indice = 0; indice < 3; indice++) {
  valores.shift()
  console.log (valores)
}

```

[EJECUTA TU CÓDIGO]()

Unshift
-------

`valores.unshift (newElement)` se utiliza para agregar un nuevo elemento al inicio de un array.

Shift
-----

`valores.shift ()` se utiliza para eliminar el primer elemento al principio de un array.

Ejecute el código para comprobar que usted entiende lo que está sucediendo.

3 \. 1 \. Suma de array
=======================

Tenga en cuenta que el array `numeros` viene de los argumentos de la línea de comandos, los cuales están almacenados en un array llamado 'process.argv' para nosotros por el intérprete de JavaScript.
Los dos primeros elementos que no queremos han sido eliminados usando la función array `slice (2)`.

Estamos pasando en un array de de números. Agregue todos los elementos de la array y genere el resultado.

```js

// Obtener un input de array desde la línea de comandos
var numeros =  [1,3,4,6,7] //  

// Su código va aquí



```

[¡Revisalo!]()

3 \. 2 \. Rellenar un nuevo array
=================================

Le proporcionamos un número N.

Cree un array. Luego, usando un bucle, llene el array con N elementos. Establezca cada elemento de array en el indice multiplicado por 10.

** Tenga en cuenta: ** podemos pasar un valor 0, en cuyo caso debe devolver una array vacía.

```js

// Obtener argumentos de la línea de comandos
var N = 10 // prompt()

// Su código va aquí

```

[¡Revisalo!]()

3 \. 3 \. Conjunto de cadenas de array (string de array)
========================================================

Cree su propio string de array. Llame al array lo que quiera, siempre y cuando sea un nombre de variable válido.

* El array debe contener 3 elementos
* El primer elemento debe contener 'AAA'
* El segundo elemento debe contener 'BBB'
* El tercer elemento debe contener 'CCC'

Salida del array.

```js

// Su código va aquí

```

[¡Revisalo!]()

3 \. 4 \. Búsqueda simple de números
====================================

Le pasaremos 2 inputs

* Un array de números
* Un número, N, para buscar

Su trabajo consiste en recorrer el array y encontrar el número especificado en el segundo input. Saque el índice del elemento de array donde encontrará el número.

** Si N no se encuentra en el array, salida -1. **

```js

// Obtener entrada desde la línea de comandos
var N =    3 // prompt() 	// Elimina el último argumento para obtener N
var numeros = [1, 3, 4, 5,6, 9]	// utiliza el resto para nuestro array

// Su código va aquí



```

[¡Revisalo!]()

3 \. 5 \. Número máximo
=======================

Vamos a pasar en un array de números. Su trabajo es encontrar el número más grande en ese array y de output ** su índice **, no el valor real.

** Consejo: ** necesitará usar una variable de utilidad para almacenar el valor máximo y una decisión para ver si cada número es mayor que el valor máximo actual encontrado en iteraciones anteriores.

```js

// Obtener entrada desde la línea de comandos
var numeros = [1, 3, 4, 5,6, 9]	

// Su código va aquí

```

[¡Revisalo!]()

3 \. 6 \. X 10 todos los demás
==============================

Estamos pasando en 3 inputs.

* Un array de números
* Un valor multiplicador, M
* Un valor, N

Debe multiplicar cada elemento Nth (no multiplicar el elemento 0) por M. Así que si N es 3, comienza con el elemento 3, que es el índice 2.

Si hay menos de N elementos entonces debería dar output al array de input sin cambios.

```js

// Obtener input desde la línea de comandos
var N = 3 // prompt() 
var M = 6 // prompt() 
var numbers = process.argv.slice(2)
// Asegúrese de que JavaScript trata todo como enteros
for (var i = 0; i < numeros.length; i ++) {
  numeros[i] = parseInt(numeros[i])
}

// Su código va aquí



```

[¡Revisalo!]()

3 \. 7 \. 1 adentro, 2 fuera
============================

Aquí hay una más difícil de terminar.

Estamos pasando en una serie de números. Necesita crear 2 nuevos arrays en su gráfico, luego

* Poner todos los números impares en un array
* Poner todos los números pares en el otro array
* Primero el output del array de numeros pares, el array de impares segundo.

** Consejo: ** debe usar el operador * modulo * para decidir si el número es impar o par. Te dimos una pequeña función que hace esto.

No olvide definir los 2 nuevos arrays antes de comenzar a agregar elementos a ellas.

```js

// Obtener input desde la línea de comandos
var numbers = [1, 3, 5, 6, 7]

function esPar(n){
  return ((n% 2) == 0)
}

// Su código va aquí


```

[¡Revisalo!]()