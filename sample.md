1 \. Expresiones numéricas y de cadena (numeric & string expressions)
======================================================

ahora... ¿estás listo para comenzar a escribir código de verdad?

Puede elegir entre 3 lenguajes de programación: JavaScript, Python o Java.

Puede seleccionar el idioma con el que desees trabajar desde el Menú de Configuración de la barra de herramientas superior. Al cambiar esto, el contenido de la enseñanza se ajustará automáticamente.

Te recomendamos que aprendas JavaScript ya que esto abre el mundo del desarrollo web. También puedes hacer el "lado del servidor" de desarrollo con JavaScript, esto se utiliza para cosas como la escritura de archivos y manejo de Base de Datos.

Si tiene más tiempo, podría aprender un segundo o tercer lenguaje. Si decides hacer esto, el mejor enfoque es trabajar a través del curso usando primero el lenguaje JavaScript. Una vez que hayas completado el curso usando JavaScript, te resultará mucho más fácil trabajar el curso nuevamente usando Python o Java. ¡También debería ser capaz de trabajar alrededor mucho más rápido la segunda y tercera vez!

1 \. 1 \. Entradas y salidas
==========================

La forma en que se maneja las entradas y salidas en código es muy similar a los diagramas que ha utilizado en Flode.

Haga clic en el botón de abajo para ejecutar el código de la izquierda. Los resultados del programa aparecerán justo debajo del botón.

Js

// Obtener la entrada desde la línea de comandos
var digit1 = 123 // prompt (mensaje)
var digit2 = 324 // prompt (mensaje)
var digit3 = 546 // prompt (mensaje)

// Las variables digit1, digit2 y digit3 ahora están asignadas
// valores pasados ​​al programa.

// Haga algo matemático
var num = digit1 * (digit2 + digit3)

// la variable num ahora contiene los resultados de nuestra matemática

// Imprimir algunos resultados (outputs)
console.log ('Nuestros resultados:')
console.log ('digit1 =' + digit1)
console.log ('digit2 =' + digit2)
console.log ('digit3 =' + digit3)
console.log ('num =' + num)
¡Bienvenido!

Inputs (Entradas)
------

Obtendrá una entrada para su código desde la línea de comandos. JavaScript hace esto fácil, proporcionando acceso a los argumentos de línea de comandos como éste:

var digit1 = prompt("input 1") 
var digit2 = prompt("input 2")
var digit3 = prompt("input 3")

Usted aprenderá más sobre cómo funciona ésto más adelante. Por ahora, ésto se proporcionará para usted.

Outputs (Salidas)
-------

Para emitir datos, utilice la función `console.log ()` como se muestra a la izquierda. Ésto puede contener cualquier expresión JavaScript válida.

1 \. 2 \. Errores
==============

A menudo cometerá errores al escribir código. Pronto se acostumbrará a ésto, lo importante es desarrollar la habilidad de aprender a entender los errores y luego arreglarlos (debugging o depuración).

Mira el código de la izquierda. Este código contiene un error de sintaxis simple.

Ahora presione el botón de abajo para ejecutar el código.

[Ejecutar el código] ()

Al ejecutar el código, verá aparecer un error.

```js

// Obtener inputs desde la línea de comandos
var digit1 = 123 // prompt
var digit1 = 324 // prompt
var digit1 = 546 // prompt


// Existe un error en ésta línea
var num =  digit1 +  digit4

//Output
console.log ('digit1 = ' + digit1)
console.log ('digit2 = ' + digit2)
console.log ('digit3 = ' + digit3)
console.log ('num = ' + num)

```

[Ejecute el código] ()

Entendiendo el error
-----------------------

El error parece bastante hostil. Sin embargo, si lee el error cuidadosamente y mira hacia atrás a través de su código, debería ser capaz de averiguar qué hacer para solucionarlo. Echa un vistazo a la siguiente explicación.

=================================================== =================================================== =================================================== ==================================================

Este es el mensaje de error:

```
ReferenceError: digit4 no está definido
```

Vamos a analizarlo:

* `ReferenceError:` Ésto simplemente nos dice que hay un error.
 * `digit4 is not defined` Ésto nos dice que la variable` digit4` no está definida en ninguna parte de nuestro código aunque hemos intentado usarlo.

La información que viene debajo de estas líneas iniciales es realmente para situaciones de depuración más avanzadas y puede ignorarse de forma segura por ahora.

[Siguiente]()

1 \. 3 \. Experimentos
===================

Esta ventana se proporciona para que pruebe cualquier código que desarrolle. Úselo para experimentar y practicar.

Hay un código de inicio proporcionado para usted. Este código se explicará en las siguientes páginas.

```js

// Escriba algún código abajo

console.log ('su archivo de experimentos')

```



[EJECUTAR EL CÓDIGO] ()


1 \. 4 \. Semicolons (Punto y coma)
==================

Es posible que se le haya dicho que necesita poner los puntos y coma `;` al final de cada línea en código JavaScript. **Esto no es verdad**.

Puedes *poner* punto y coma al final de cada línea, pero ciertamente no tienes que hacerlo. Hay solamente 2 casos especiales donde ésto es necesario y usted no encontrará estos casos hasta que usted se encuentre mucho más avanzado e incluso entonces será muy raro.

Por lo tanto, nuestro consejo es no utilizar ningún punto y coma en absoluto. En Codio, no los usamos en absoluto para nuestro desarrollo.

2 \. Expresiones numéricas
======================================================

Empecemos partiendo de un gráfico de Flode que demuestre una expresión numérica.

Si pasa por el gráfico verá que evalúa las expresiones A- (B + C)

En la siguiente página verá exactamente el mismo código escrito en JavaScript


! [Captura de pantalla 2017-07-12 13.21.02.png] (recursos / C816E9B1F63BC27E6DE9C2FE5D4CAC01.png)

2 \. 1 \. Código equivalente
======================================================

A la izquierda está el código JavaScript equivalente al gráfico de Flode de la página anterior.

Si ejecuta el código verá que se ocupa de la expresión numérica exactamente de la misma manera que hizo el gráfico de Flode.

```js

// Obtener inputs (entradas) desde la línea de comandos
var input0 = 1213
var input1 = 123
var input2 = 322

// Más código
var num = input0 * (input1 + input2)

// Una sentencia de debug (depuración)
console.info ('num is' + num)

// Output (Salida)
console.log (num)

```

[EJECUTE EL CÓDIGO] ()

2 \. 2 \. Adición
=================

Reto
---------

Su código debe esperar una entrada. Todo lo que necesitas hacer es añadir 12 al input (entrada) y dar salida al resultado.

```js

// Obtener un input(entrada) desde la línea de comandos
// Asegúrese de que el input se almacena como un número
var input = + process.argv [2]

// Su código va aquí


```
[¡CÓDIGO DE VERIFICACIÓN!]()

2 \. 3 \. A \ * (B + C / 3)
=====================

Pasamos tres entradas, A, B y C.

Debe dar salida A* (B + C/3).

```js

// Obtenga nuestro input desde la línea de comandos
// Asegúrese de que el input se almacene como un número
var A = + process.argv [2]
var B = + proceso.argv [3]
var C = + process.argv [4]

// Su código va aquí

```

[¡CÓDIGO DE VERIFICACIÓN!]()

3 \. Expresiones de strings (cadenas) 
======================================

Mira el gráfico de Flode a la izquierda. Si lo revisa, verá cómo Flode maneja los strings. En la siguiente página, aprenderá cómo hacer lo mismo usando  código.

Al pasar por el gráfico de Flode, puede ver qué sucede con las variables después de cada operación.

! [Captura de pantalla 2017-07-12 13.25.23.png] (recursos / A902CDBB2A2958B283F8419EE6D1783F.png)

3 \. 1 \. Código equivalente
======================================================

A la izquierda se puede ver el gráfico de Flode que ahora se representa con el código equivalente.

Como puede ver, es exactamente casi lo mismo.

```js

var str = 'Hola' 		// Crear una variable de cadena
var newStr = str + 'mundo!'   	// '¡Hola Mundo!'
console.log (newStr)		 // salida

newStr = '123' + 10		 // '12310'
console.log (newStr) 		// salida

newStr = '123' + '456' 		// '123456'
console.log (newStr)		 // salida

```

[EJECUTE EL CÓDIGO] ()

3 \. 2 \. Uniendo strings
======================================================

Le estamos proporcionando una cadena como entrada para su programa.

Su tarea es agregar el string: `, hola!` al string que le proporcionamos y luego la emitiremos.

¡Asegúrese de incluir el espacio después de la coma!

```js

// Obtener el input desde la línea de comandos
var inputText = process.argv [2]

// Su código va aquí

```

[¡CÓDIGO DE VERIFICACIÓN!]()

3 \. 3 \. Unirse a más strings
============================

Le proporcionaremos 2 strings a su programa.

Su trabajo es unir los strings para obtener un solo string con un espacio entre los dos strings originales.

Éste es un caso común en la codificación y usted tendrá que crear su string uniendo los inputs y añadiendo el espacio en el medio.

```js

// Obtener un input desde la línea de comandos
var string1 = process.argv [2]
var string2 = process.argv [3]

// Su código va aquí


```

[¡CÓDIGO DE VERIFICACIÓN!]()

2 \. Sentencias Condicionales (Conditional Statements)
==========================================

Esta unidad trata de usar sentencias condicionales en JavaScript.

Aquí hay un buen ejemplo:

```js
if (number > = 10 && number < 100) {	// 1. si el número es de 2 dígitos
  console.log ('número de 2 dígitos') 		// entonces el output está diciendo 
}
else if (number> = 100) {			// 2. De lo contrario, si hay más de 2 dígitos
  console.log ('número de dígitos múltiples') // entonces el output está diciendo 
}
else {						// 3. de lo contrario
  console.log ('número de 1 dígito')		 // éste debe ser un número de un solo dígito
}
```

Si el número es mayor o igual a 10 ** y ** el número es menor que 100, ** entonces ** output **número de 2 dígitos ** de lo contrario si ** número es mayor o igual a 100 ** entonces ** output **número de multi dígitos **de lo contrario  ** número de 1 dígito

1 \. 1 \. Experimentos
===================

Esta ventana se proporciona para que pruebe cualquier código que desarrolle. Úselo para experimentar y practicar.

Hay un código de inicio proporcionado para usted. Este código se explicará en las siguientes páginas.

```js

// Escribe el código de experimento a continuación

console.log ('su archivo de experimento')

```


[EJECUTE EL CÓDIGO] ()

2 \. Condiciones explicadas
========================

Echa un vistazo a la tabla Flode de la izquierda; el gráfico muestra el uso de una condición.

Si recorre el gráfico, comenzará a ver cómo funcionan las condiciones.

Flode ejemplo
-------------------

En este ejemplo, la condición es input0 \> 100 \. Puede ver cómo esta condición puede ser verdadera o falsa. Estos son los únicos dos posibles resultados de la decisión.

Pasa por el gráfico de Flode para ver cómo se ejecuta en función del valor que se ha introducido.

Pruebe el gráfico de nuevo, cambiando el valor de entrada de prueba a 50, luego pase a través de él. Ahora cambie la entrada a 200 y pase a través de ella de nuevo. Debería ver que dependiendo del input que haya dado, la ruta de ejecución que Flode sigue cambiará.

! [ Screenshot 2017-07-12 20.10.38.png] (resources / ABA2686987271F50F421DE94863644A9.png)

2 \. 1 \. Condiciones en el código
==========================

A la izquierda está el código JavaScript equivalente al gráfico de Flode de la página anterior.

Si ejecuta el código verá que se ocupa de la sentencia condicional exactamente de la misma manera que hizo el gráfico de Flode.

```js

// Obtener el input desde la línea de comandos
var number = + process.argv [2]

// Su código va abajo

// output del número del input del programa
console.log ('La entrada de línea de comandos es:' + number)

// Y aquí viene nuestra declaración ‘ifi'
if (number> 100) {
  console.log ('grande')
}
else {
  console.log ('pequeño')
}

```

[EJECUTE EL CÓDIGO] ()

Echa un vistazo a cómo funciona este código:

En primer lugar, los datos de prueba de nuestra variable de entrada `number`, proviene de la línea de comandos.

```
var number = process.argv [2]
```

Y aquí viene la parte importante. Se utiliza una instrucción `if` para comprobar si` number` es mayor que 100 \. Si lo es, entonces emitimos la cadena 'grande'. De lo contrario, emitiremos la cadena 'pequeño'.

```js
if (number > 100) {
  console.log ('grande')
}
else {
  console.log ('pequeño')
}
```

2 \. 2 \. Declaraciones condicionales explicadas
====================================

Ahora vamos a ver con más detalle cómo funciona la sentencia `if`. Aquí está el código completo nuevamente:

```js
if (number> 100) {
  console.log ('grande’')
}
else {
  console.log ('pequeño')
}
```

En primer lugar, eche un vistazo a la primera línea:

    La sentencia if
    --------------------

    ```
    if (number \> 100) {
    ```

    1. Inicie la línea con `if`.
    2. Ahora especifique la condición dentro de los paréntesis `(condition)`.
    3. Por último, al final de la línea se añade un `{`, conocido como una ** llave **.

    Si la condición es verdadera
    -------------------------------------

    ** if ** (si)  la condición es verdadera, entonces realizas todas las instrucciones que vienen    después de ella, dentro del `{` `}`. En este ejemplo sólo hay una instrucción.

    ```
     console.log ('grande')
    ```

    Todo lo que está dentro de  `{` y `} se le denomina * bloque de código *.

    De otra manera
    --------------------

    Si la condición es ** not true ** (no verdadera osea falsa), el bloque de código `else` se ejecuta en su lugar.

    ```
     console.log ('pequeño')
    ```

    Bloques de código
    -----------

    El `{` al final de la línea `if` se utiliza para iniciar un bloque de código. Una vez que se ha iniciado el bloque de código, agrega el código que desea ejecutar en las siguientes líneas. A continuación, finaliza el bloque de código con un `}`.

2 \. 3 \. Indentación
===============

Indentación significa dejar un espacio vacío entre el margen izquierdo y el comienzo de una línea de código. En algunos lenguajes de programación como Python, la sangría es * requerida *. En estos idiomas, si no se indenta su código correctamente, no se ejecutará.

En JavaScript, su código funcionará bien sin sangría pero parecerá desordenado y puede ser difícil para otros leer y entender.

Echa un vistazo al código que está escrito sin sangría. Es difícil de leer en comparación con el código que hemos utilizado en las páginas anteriores.

```
if (number \> 100) { console.log ('grande')} else {console.log ('pequeñol')}
```

¿Qué código se debería identar?
-------------------------------------------

Se debe identar todo el código dentro de un bloque de código. Los bloques de código  comienzan con el carácter `{` y terminan con `}`.

```
If (number \> 100) {aquí todo el código con sangría}
```

Pronto verás otras sentencias que también tienen bloques de código, como son los ciclos `for` y` while`. Estos deben ser identados también.

```
while (contador \ <= 9) {console.log (contador) contador = contador + 1}
```

¿Cómo se indenta código?
-----------------------------------

Pulse la tecla de tabulación al principio de una nueva línea para identar su código. (La tecla de tabulación es la tecla con dos flechas apuntando en direcciones opuestas).

A veces los principiantes presionan la barra de espacio varias veces para sangrar su código. ** No haga esto **.

Siempre use la tecla de tabulación en su lugar. Esto asegura que las sangrías sean consistentes.

En JavaScript, utilice 2 o 4 espacios para sangrar.

2 \. 4 \. Equals explicado
========================

Echa un vistazo a la tabla Flode a la izquierda. A continuación se muestra el código JavaScript equivalente:

! [Imagen 2017-07-12 20.20.52.png] (recursos / A07B07C57B8B5658F01A8EC75706C7FA.png)

¡Bienvenido!
If (number == 100) {console.log ('Is 100')} else {console.log ('Is not 100')}
¡Bienvenido!

¿Por qué usamos ==?
------------------

Tenga en cuenta que necesita utilizar `==` y ** not ** =.

En JavaScript (y muchos otros lenguajes de programación) `=` es el operador * de asignación *, no un operador de comparación. Esto significa que usted usa `==` para comparar cosas y `=` para establecer variables.

¡Bienvenido!
N = 100 // establece N a 100 N == 100 // false a menos que N tenga el valor 100

¡Bienvenido!

2 \. 5 \. Desafío
=====================

Le proporcionaremos un número, N.

* Si N es igual a 100, la salida â € ~Hitâ € ™
* De lo contrario, la salida "MISS"

Recuerde que la cadena distingue entre mayúsculas y minúsculas.

Js
// Obtener argumentos de línea de comandos
// Asegúrese de que N se maneje como un número
Var N = + process.argv [2]

// Su código está aquí

¡Bienvenido!

[¡Revisalo!]()

2 \. 6 \. No es igual explicado
============================

Echa un vistazo a la tabla de Flode a la izquierda, que muestra una condición "no igual". A continuación se muestra el código JavaScript equivalente.

! [Captura de pantalla 2017-07-12 20.22.50.png] (recursos / 68D791572098196733D1301DBC3AD230.png)

¡Bienvenido!
If (input0! = 100) {console.log ('Is not 100')} else {console.log ('Is 100')}
¡Bienvenido!

¡Bienvenido!
-

Usted puede recordar de la unidad anterior que el signo `!` Signi fi ca 'no' por lo tanto `! =` Significa 'no es igual'.

2 \. 7 \. No es igual a =
=====================

Le pasaremos una cuerda.

* Si la cadena no es igual a 'Bingo' salida 'Missed'
* De lo contrario, salida "

Utilice el `! =` En su condición.

Js

// Obtener argumentos de línea de comandos
Var testString = proceso.argv [2]

// Su código está aquí


¡Bienvenido!

[¡Revisalo!]()












































































 