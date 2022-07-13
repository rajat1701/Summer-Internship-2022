# Basic Level 4 Assignment

## Theory

### What are anonymous functions in JavaScript?

> An anonymous function is that type of function that has no name or we can say which is without any name. When we create an anonymous function, it is declared without any identifier. The main focused point is that there is no function we have declared before. It is just the keyword function and parenthesis.

> EXAMPLE

```js
let anonFunc = function () {
  console.log("anonymous function");
};
anonFunc();
```

> USES

- Invoke and execute a function immediately after its declaration.

```js
(function () {
  console.log("Hello");
})();
```

- Passing an anonymous function to other function as its argument.

```js
abs(function () {
  console.log("Inside Parametric Function");
}, 100);
```

### Explain strict comparison and Abstract comparison in javascript?

> Abstract equality will attempt to resolve the data types while ignoring their data type before making a comparison. Strict equality will return false if the types are different.The abstract equality comparison performs a type conversion.
>
> (Abstract) -> ==
> (Strict) -> ===

> EXAMPLE

```js
console.log(true == "1"); // true
console.log(true === "1"); // false
```

### Difference b/w Arrow functions and Regular functions?

> - Regular functions are constructible and they can be called using the new keyword
> - The Arrow functions are only callable and not constructible, Arrow functions can never be used as constructor functions

```js
//Regular Function
var increment = function (x) {
  return x + 1;
};
//Arrow Function ->
let increment = (x) => {
  return x + 1;
};
```

> - In Arrow Functions, if there is only one statement and its a return statement then we need not to put the curly braces and return keyword. This is not possible with Regular functions.

```js
let increment = (x) => x+1;
//In case of no return statement but just one statement.
let greeting = _ => console.log(“Hola! Como estas”);
```

> - Arrow functions do not have an arguments binding whereas Regular Functions do.
> - Arrow functions do not have their own **this** but Regular functions have.

### What is Hoisting in JavaScript?

> Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. In terms of variables and constants, keyword var is hoisted and let and const do not allow hoisting.

### JavaScript is a garbage collected programming language, explain how?

> When it comes to programming, Garbage Collection means cleaning the memory spaces which don’t contain useful data and then reallocating those cleared memory to some other data which is both active and useful. That is the basic process of Garbage Collection in pretty much all the programming languages in the world.The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it. Some programming languages needs explicit interference from the developer while some other languages do this automatically. For a high level programming language like JavaScript, the memory management process is automated. The browser takes care of that thing for us.

### Explain Shallow copy vs Deep copy in Javascript?

> - **Shallow Copy :**
>   When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created.
>   A reference variable mainly stores the address of the object it refers to. When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one.<br><br>
> - **Deep Copy :**
>   Deep copy makes a copy of all the members of the old object, allocates separate memory location for the new object and then assigns the copied members to the new object.
>   In this way, both the objects are independent of each other and in case of any modification to either one the other is not affected.

### What is Object.freeze?

> - The Object.freeze() method freezes an object. A frozen object can no longer be changed. Freezing an object prevents new properties from being added to it, existing properties from being removed.Also it prevents its prototype from being changed. freeze() returns the same object that was passed in.
