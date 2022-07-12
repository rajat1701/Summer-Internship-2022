# Basic Level 1 Assignment

### Theory

### 1. What is **JavaScript**?

> Javascript is a text based computer programming language. It is used for both client and server side that allows you to make the web pages easily. JS offers some frameworks to work on which are used world wide majorly.

### 2. What is the difference between b/w **let** and **var**?

> `Var` is used to declare a variable _globally_ and `Let` is used to declare a variable _locally_ (block-scoped).

### 3. Why do we prefer **const** over **var**?

> When we use `const` the value is fixed and it can't be changed further (it can neither be updated nor re-assigned) but when we use `var` we can change/reassign the value anytime we want (within the scope).

### 4. What is the use of javascript in **web browsers**?

> It is used to create `dynamic` and `interactive` user experience.

### 5. What are **Objects**?

> Objects in javascript are like `containers` which has some _properties_ and methods.  
> Those properties are in the form of `key:value` form.  
> Example:

    const person = {
      name:"Rajat Malik",
      age:"21",
      contact:"8989898989"
    };

### 6. What is an array and how is it different from an **Object in Javascript**?

> Array is a single variable used to store different or same kind of elements.
>
> > We access an element from array using `index` but in case of object we use `key`.

### 7. What is a **function**?

> A function is a block of code generally used for reducing particular lines of code which is used multiple times.  
> It looks like this:

    function add(a, b) {
      return a+b;
    }

### 8. How can we implement **call by value** and **call by reference** in Javascript?

> In javascript call by value, the function is called by directly passing the value of the variable as the argument. Therefore, even changing the argument inside the function doesn’t affect the variable passed from outside the function.It is important to note that in javascript, all function arguments are always passed by value. That is, JavaScript copies the values of the passing variables into arguments inside of the function.
> In Pass by Reference, a function is called by directly passing the reference/address of the variable as the argument. Changing the argument inside the function affects the variable passed from outside the function. In Javascript objects and arrays are passed by reference.

# What are the primitive data types in Javascript?

> There are 7 primitive data types:-

- Boolean type
- Null type
- Undefined type
- Number type
- BigInt type
- String type
- Symbol type

# What is DOM?

> The Document Object Model is a cross-platform and language-independent interface. It defines the logical structure of documents and the way a document is accessed and manipulated.

# Why do we need DOM?

> DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic. The DOM views an HTML document as a tree of nodes.
