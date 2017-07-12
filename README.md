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

[RUN THE CODE ON THE LEFT]()

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