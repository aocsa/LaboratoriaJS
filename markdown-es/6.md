1 \. Introducción
=================

Esta unidad le enseña cómo crear funciones en JavaScript.

A continuación puede ver una function simple:

```js
function volCilindro(radio, altura) {
  return Math.PI * radio * radio * altura
}

// Calcular el volumen de un cilindro
// de radio=4 y altura=10
vol = volCilindro(4, 10)
```

1 \. 1 \. Experimentos
===================

Esta ventana se proporciona para que pruebe cualquier código que desarrolle. Úselo para experimentar y practicar.

```js
// Escribe tu código experimental abajo
//

console.log('su archivo de experimentos')


```

[EJECUTE EL CÓDIGO]()

Las funciones se utilizan mucho en la programación, y esto es por una buena razón. Las funciones son una de las construcciones más potentes disponibles para usted como programador.

Definición
----------

* Una function es un pedazo de código que realiza una tarea específica.
* Una function está empaquetada como una unidad.
* Se puede llamar a una function con inputs.
* Una function puede devolver datos.

El código que se necesita a menudo o repetitivamente se empaqueta cuidadosamente y se le da un nombre para que pueda usarse tan a menudo como quieras desde donde quieras en un programa.

### Principios de programación

* La información oculta * es el principio de tratar una lista de tareas como una sola tarea sin hacer caso de los detalles. Por ejemplo, en lugar de escribir todos los pasos para hacer una taza de té, simplemente pienso en un paso, "hacer té." Las funciones me permiten crear una forma de ocultar los múltiples pasos de una tarea detrás de un solo paso: esto es La llamada a la function.

* Modularidad * es el proceso de escribir software para que las secciones puedan ser reemplazadas sin afectar a otras secciones. Mediante el uso de funciones, el código dentro de la function se puede cambiar sin cambiar el código fuera de la function.

2 \. 1 \. Una function simple
=============================

```js

// calcular el volumen de un cilindro
function volumenCilindro(radio, altura) {
  var v = Math.PI * radio * radio * altura
  return v
}

console.log ('r, h => V')
console.log ('10, 20 '+ volumeCilindro (10, 20))
console.log ('1, 10' + volumeCilindro (1, 10))
console.log ('125, 2520' + volumeCilindro (125, 2520))

```

[EJECUTE EL CÓDIGO]()

A la izquierda se muestra un ejemplo sencillo que muestra una function `volumeCilindro()` que tiene dos argumentos.

El programa calcula el volumen de un cilindro, usando la fórmula:

V = π * radio2 * alturaV = π * radio2 * altura

Cualquier número de argumentos
------------------------------

Por lo tanto, una function puede tomar tantos argumentos como sea necesario. La function de llamada típicamente pasará tantos parámetros como la function especifica los argumentos.

2 \. 2 \. Una function en detalle
=================================

Echa un vistazo a la function `volumeCilindro()`. A continuación se muestra una explicación de cómo se construye esta function.

```js

// caclular el volumen de un cilindro
function volumenCilindro( radio, altura) {
  var v = Math.PI * radio * radio * altura
  return v
}

console.log ('r, h => V')
console.log ('10, 20 '+ volumeCilindro(10, 20))
console.log ('1, 10' + volumeCilindro(1, 10))
console.log ('125, 2520' + volumeCilindro(125, 2520))

```

```
[EJECUTE EL CÓDIGO]()
```

```js
function volumenCilindro(radio, altura) {
    var v = Math.PI * radio * radio * altura
    Return v
}
```

Una forma alternativa de escribir el código es así:

```js
function volumenCilindro(radio, altura) {
    return Math.PI * radio * radio * altura
}
```

** Nombre de la function
**

****

Para nombrar una function, utilice las mismas reglas que se aplican a una variable. En este caso, la function se llama `volumeCilindro()`.

Bloque de código
----------------

La function obtiene su propio bloque de código (al igual que una instrucción `if` o un` for`loop). El bloque comienza con `{` y es seguido por tantas líneas de código como quieras. Al final del bloque de código hay un cierre `}`.

Argumentos
---------

Después de que el nombre de la function viene cualquier * argumento * que recibe la function. Algunas funciones no toman ningún argumento.

Se puede pensar en un argumento como una variable. En nuestro ejemplo, los argumentos son `radio` y` altura`. Dentro del bloque de código de su function, ahora puede tratar este argumento como si fuera una variable.

Lo más importante a destacar aquí es que la function de llamada toma un * parámetro * que se asigna a este argumento. Observe la siguiente llamada de function como ejemplo:

```
vol = volumenCilindro(10, 30)
```

* `10` es el primer parámetro y se pasa al argumento ` radio` de la function.
* `30` es el segundo parámetro y se pasa al argumento ` altura`.

Return
------

A continuación se muestra un resumen del uso de la sentencia `return` dentro de una function:

* Todas las funciones devuelven el control de nuevo a la línea de código que las llamó si se incluye o no una declaración de return.
* Si no incluye una declaración `return` explícita en su function, entonces retornará cuando la ejecución llegue al final del bloque de código.
* Una declaración `return` sin una expresión después de ella simplemente retornará al código de llamada.
* Una declaración `return` con una expresión después de ella, la retornará de regreso a la línea de código que lo llamó. En el ejemplo anterior ese valor se asigna entonces a `vol`.

2 \. 3 \. ¿Por qué function? Parte I
====================================

He aquí un ejemplo de código más complejo que está mal escrito. Las razones por las que el código es malo se discutirán en la página siguiente.

```js
//
// EL PRIMERO
//
var radio1 = 2
var altura1 = 4
var circulo1 = radio1 * radio1 				// área de fondo
var volume1 = Math.PI * circulo1 * altura1  // figura de volumen
var peso1 = volume1 * 4 					// peso de la figura
console.log (peso1)

//
// SEGUNDO
//
var radio2 = 5
var altura2 = 7
var circulo2 = radio2 * radio2 			// área de fondo
var volume2 = Math.PI * circulo2 * altura2   // volumen de la figura
var peso2 = volume2 * altura2 				// peso de la figura
console.log (peso2)

//
// EL TERCERO
//
var radio3 = 1
var altura3 = 35
var circulo3 = radio3 * radio3 				// área de fondo
var volume3 = Math.PI * circulo3 * height3  // figura de volumen
var peso3 = volume3 * 8 				    // peso de la figura
console.log (peso3)


```

[EJECUTE EL CÓDIGO] ()

Mira los bloques de código PRIMERO, SEGUNDO Y TERCERO. ¿Ves cómo están haciendo exactamente lo mismo?

No se preocupe demasiado de lo que el código está haciendo, aparte de que cada bloque de código está haciendo lo mismo.

Ahora ve a la siguiente página.

2 \. 4 \. ¿Por qué function? Parte II
=====================================

A la izquierda verá código que hace exactamente lo mismo en la forma correcta, usando una function.

```js
// calcular el área de un círculo
function areaCirculo(radio) {
  return radio * radio
}

// calcular el volumen de un cilindro
function volumenCilindro(radio, altura) {
  return Math.PI * areaCirculo(radio) * altura
}

// calcular el peso de un cilindro (por unidad)
function pesoCilindro(radio, altura, peso) {
  return volumeCilindro(radio, altura) * peso
}

var radio1 = 2
var altura1 = 4
var peso1 = pesoCilindro(radio1, altura1, 4) // calcular el peso
console.log (peso1)

var radio2 = 5
var altura2 = 7
var peso2 = pesoCilindro (radio2, altura2, 6) // calcular el peso
console.log (peso2)

var radio3 = 1;
var altura3 = 35;
var peso3 = pesoCilindro(radio3, altura3, 8) // calcular el peso
console.log (peso3)
```

[EJECUTE EL CÓDIGO]()

¿Por qué es mejor?
-----------------

Uno de los * Principios de Programación * de esta unidad es ** ocultar información **. Esto se logra ocultando los cálculos necesarios para calcular el peso de un cilindro detrás de una sola llamada de function.

### Duplicación

La razón por la que este código es mejor es que no hay bits duplicados de código.

En el ejemplo, la function sólo se llama un par de veces, pero imagínese que necesitaba usar este código en cien lugares diferentes y lo codificó de la manera en que se hizo en la página anterior. Ahora, usted tendría el mismo bit de código repetido una y otra vez en cientos lugares diferentes.

¿Qué pasaría si más tarde descubriste que ese bit de código tiene un error en él? Tendrías que ir y arreglar el código una y otra vez en cien lugares.

### Legibilidad

Otra razón realmente importante de que este código es mejor es que es mucho más fácil de leer.

En lugar de tener que descifrar muchas líneas de código (el código que se movió a una function podría haber sido cientos de líneas de largo) ahora puede leer un nombre agradable y significativo y saber inmediatamente lo que hace.

3 \. Desafíos
=============

Ahora ya está listo para probar algunos desafíos y probar su conocimiento de funciones.

Probando tus functions
----------------------

En estos desafíos, escribirá las funciones que serán llamadas para usted. Puede probar estos directamente en su código como se muestra en el ejemplo anterior:

```js
// calcular el volumen de un cilindro
function volumenCilindro( radio, altura) {
  return Math.PI * radio * radio * altura
}

console.log ('r = 10, h = 20 => V =' + volumenCilindro(10, 20))
```

Puede llamar a su function en cualquier lugar fuera de la function como `value = volumeCilindro(10,20)` lo hace arriba.

3 \. 1 \. Número Entero aleatorio
=================================

### Número entero aleatorio

Escribe una function llamada `aleatorioEntero` que toma dos parámetros numéricos` min` y `max` y retorna un valor entero aleatorio entre` min` y `max`.

```js

// Escribe tu código aquí


function aleatorioEntero (min, max) {
  
  return Math.random() * (max - min) + min;
}
```

[¡Revisalo!]()

3 \. 2 \. Perseguir rojo
========================

### Es rojo

Escribe una function `isRed` que toma una cadena` str` y determina si la cadena contiene la palabra 'red'. Si devuelve `true`, volverá` false`.

Tendrás que usar el método `str.lastIndexOf ('characters to look for')` o `str.indexOf ('characters to look for')` que devuelve un índice válido si se encuentra la cadena o `-1` si No lo fue.

```js

// Escribe tu código aquí

function esRojo(str) {
  
  if (str.indexOf ("rojo") >= 0)
    return verdadero;
  return false;
}
```

[¡Revisalo!]()