This unit will introduce you to arrays written in JavaScript.

You will learn about the theory behind using arrays and you will also complete some practical challenges to practise your new skills.

1\. 1\. Experiments
===================

This window is provided for you to try out any code you develop. Use it to experiment and practise. Feel free to come back to this page at any time.

```js
// Write experimental code below
// 

console.log('your experiment file') 

```

[RUN CODE]()

2\. Arrays explained
====================

You have already studied arrays in the Flode arrays unit, so you should be familiar with the concept of arrays. (If you haven’t completed the Flode unit, we recommend that you do. It is available in the `An Introduction to Programming \> Flode` course).

```js

// Create a list with ages
var ages  = [12, 5, 68, 51, 62]

// Create a list with names
var names = ['Richard', 'Alice', 'Jennifer', 'Bob', 'Harry']

for (var index = 0; index < ages.length; index++ ) {
  console.log(names[index] + ' is ' + ages[index]) 
}

```

[RUN THE CODE]()

Creating arrays
---------------

Array creation in JavaScript works in exactly the same way as in Flode.

### String arrays

You create a string array like this:

```
strArray = [ 'Alice', 'Shahneila', 'Bob, 'Tariq' ] 
```

### Number arrays

Here is an example of a number array:

```
numArray = [1, 3.141, 5, 17.1, 100] 
```

### Empty array

If you are going to create your own array then you need to create an empty array variable before you add any data to it.

The correct way to create an empty array variable is as follows:

```
numArray = [] numArray[0] = 4 
```

Note: the following example will fail because the array has not already been created:

```
numArray[0] = 4
```

2\. 1\. Length of an array
==========================

Each array has a number of elements (values or variables). It is important to know the number of elements an array has.

```js

// declare an array of numbers
var numbers=[1, 2, 3, 4, 5, 6]

// get the length of the array
var arrayLength= numbers.length

// print out the length
console.log('Length of [' + numbers + '] is: ' + arrayLength)

```

[RUN THE CODE]()

Have a look at the code on the left, you will see the following:

```
6 var arrayLength= numbers.length 
```

This code returns the number of elements in the array `numbers`.

This code is often used in loops for looping through all the elements in an array.

2\. 2\. Setting array elements
==============================

It is easy to set an array element using the same techniques.

`numArray[4] = 50` sets the fifth element of array called `numArray` to `50`.

Defining an array
-----------------

If you want to create an array and you know the elements already (which is not that often the case) then you can do it like this.

```
numArray = [1, 55, 3, 16] 
```

Often, you will not have any elements to start with and will want to add them later.

If this is the case, you should create an empty array like this first.

```
numArray = [] 
```

Run the code
------------

Take a look at the code on the left.

```js
// Create some arrays
var unusedArray = [1,2,3,4]
var unusedStrArray = [ 'Alice', 'Shahneila', 'Bob', 'Tariq' ]
var numArray = []

// Assign some data to the 1st and 5th elements
numArray[0] = 10
numArray[4] = 50

// Display them all in the console
for (var i=0; i < numArray.length; i++ ) {
    console.log( numArray[i])
}

```

[RUN CODE]()

This shows how you:

1. Define a new array.
2. Assign values to array elements (note we are not assigning values to *contiguous* elements).
3. Show each array element in the console.

When you run the code, notice how some of the elements display as *undefined*. The reason for this is that we only assigned elements 0 and 4\. JavaScript automatically inserts array elements in-between for us. Because the elements that JavaScript has inserted are undefined they don’t have any values assigned to them.

2\. 3\. Push and pop
====================

JavaScript has a couple of useful methods for adding elements to the end of an array. They are called push and pop!

```js

// Create an array with some values
var values = [10, 20, 30, 40, 50, 60]

// loop from 0 to 2, pushing each onto the end of the list
for (var index = 0; index < 3; index++ ) {
  values.push(index)
  console.log(values) 
}

console.log( '--- Remove \'em')

// loop from 0 to 2, poping off the end of the list
for (var index = 0; index < 3; index++ ) {
  values.pop()
  console.log(values) 
}

```

[RUN CODE]()

Push
----

`values.push(newElement)` is used to add a new element to the end of an array. Imagine it as "we are pushing a new element on the end of the array".

Pop
---

`values.pop()` is used to remove the last element from the array. Imagine it as "we are popping an element off the end of the array".

Run the code to check you understand what is happening.

2\. 4\. Unshift and shift
=========================

Unshift and shift are also useful methods for adding or removing elements. Where push and pop add and remove elements at the *end* of an array, unshift and shift add and remove elements at the *beginning*.

```js

// Create an array with some values
var values = [10, 20, 30, 40, 50, 60]

for (var index = 0; index < 3; index++ ) {
  values.unshift(index)
  console.log(values) 
}

console.log( '--- Remove \'em')

for (var index = 0; index < 3; index++ ) {
  values.shift()
  console.log(values) 
}

```

[RUN CODE]()

Unshift
-------

`values.unshift(newElement)` is used to add a new element at the start of an array.

Shift
-----

`values.shift()` is used to remove the first element at the beginning of an array.

Run the code to check you understand what is happening.

3\. 1\. Array sum
=================

Note that the `numbers` array comes from the command line arguments, which are all stored in an array named ‘process.argv’ for us by the JavaScript interpreter.
The first two elements that we do not want have been removed by using the array function `slice(2)`.

We are passing in an array of numbers. Add up all the array elements and output the result.

```js

// Get input array from the command line
var numbers = process.argv.slice(2)

// Your code goes here



```

[Check It!]()

3\. 2\. Populate a new array
============================

We provide you with a number N.

Create an array. Then, using a loop, populate the array with N elements. Set each array element to the index multiplied by 10.

**Beware:** we might pass in a value 0, in which case you should return an empty array.

```js

// Get command line arguments
var N = +process.argv[2]

// Your code goes here

```

[Check It!]()

3\. 3\. Short string array
==========================

Create your own array of strings. Call the array anything you like as long as it is a valid variable name.

* The array should contain 3 elements
* The first element should contain ‘AAA’
* The second element should contain ‘BBB’
* The third element should contain ‘CCC’

Output the array.

```js

// Your code goes here

```

[Check It!]()

3\. 4\. Simple Number Search
============================

We will pass you 2 inputs

* an array of numbers
* a number, N, to look for

Your job is to loop through the array and find the number specified in the second input. Output the array element index where you find the number.

**If N is not found in the array, output -1.**

```js

// Get input from the command line
var N = process.argv.pop()       // Remove the last argument to get N
numbers = process.argv.slice(2)  // use the rest for our array

// Your code goes here



```

[Check It!]()

3\. 5\. Max number
==================

We will pass in an array of numbers. Your job is to find the largest number in that array and output **its index**, not the actual value.

**Tip:** you will need to use a utility variable to store the maximum value and a decision to see if each number is bigger than the current maximum value encountered in previous iterations.

```js

// Get input from the command line
var numbers = process.argv.slice(2)

// Your code goes here

```

[Check It!]()

3\. 6\. X 10 every other
========================

We are passing in 3 inputs.

* an array of numbers
* a multiplier value, M
* a value, N

You should multiply every Nth element (do not multiply the 0th element) by M. So, if N is 3, you start with the 3rd element, which is index 2.

If there are less than N elements then you should output the unchanged input array.

```js

// Get input from the command line
var N = +process.argv.pop()
var M = +process.argv.pop()
var numbers = process.argv.slice(2)
// Make sure JavaScript treats everything as Integers
for (var i=0; i < numbers.length; i++ ) {
  numbers[i]= parseInt(numbers[i])
}

// Your code goes here



```

[Check It!]()

3\. 7\. 1 in, 2 out
===================

Here is a more challenging one to finish with.

We are passing in an array of numbers. You need to create 2 new arrays in your chart, then

* put all odd numbers in one array
* put all even numbers in the other array
* output the even array first, the odd array second

**Tip:** you should use the *modulo* operator to decide whether the number is odd or even. We gave you a little function that does this.

Don’t forget to define the 2 new arrays before you start adding elements to them.

```js

// Get input from the command line
var numbers = process.argv.slice(2)

function isEven(n){
  return ((n % 2) == 0)
}

// Your code goes here


```

[Check It!]()



