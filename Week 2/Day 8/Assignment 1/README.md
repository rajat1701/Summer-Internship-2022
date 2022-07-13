# TypeScript Quiz (Basic Level 1)

## Theory:

### What are the basic datatypes in TypeScript ?

> **NUMBERS**: Similar to numbers in JavaScript.<br>
> EXAMPLE :
>
> ```ts
> const salary: number = 480000;
> ```
>
> **ARRAYS**: Arrays in TypeScript are similar to arrays in JavaScript.<br>
> EXAMPLE :
>
> ```ts
> var alphas: String[];
> alphas = ["1", "2", "3", "4"];
> console.log(alphas[0]);
> console.log(alphas[1]);
> ```
>
> Another Example:
>
> ```ts
> const arr: Array<any> = [68, true, "cherry"];
> ```
>
> **BOOLEANS**: Work in the same way as in JavaScript.<br>
> EXAMPLE :
>
> ```ts
> const Bool: boolean = true;
> ```
>
> **STRINGS**: Similar to strings in JavaScript.<br>
> EXAMPLE :
>
> ```ts
> let Str: string = "TakiTakiRumba";
> ```
>
> **TUPLES**: Tuples are a data type unique in TypeScript (i.e: They are not present in JavaScript). It represents a heterogeneous collection of values. In other words, tuples enable storing multiple fields of different types. In other words they are arrays with fixed elements. Suitable when we know how many variables we want in our array.<br>
> EXAMPLE :
>
> ```ts
> var mytuple = [10, "Hello"]; //create a  tuple
> console.log(mytuple[0]);
> console.log(mytuple[1]);
> ```

### What is Generic data type ?

> Generics in TypeScript is a tool which enables us to create reusable components. Generics uses the type variable \<T> , a special kind of variable that denotes types. It creates a component that can work with a variety of data types rather than a single data type.<br>
> EXAMPLE :
>
> ```ts
> function identity<T>(arg: T): T {
>   return arg;
> }
> let output1 = identity<string>("myString");
> let output2 = identity<number>(100);
> console.log(output1); //myString
> console.log(output2); //100
> ```
>
> The use of Generics has 3 main advantages :
>
> - Allows a variable to store only one type of value.
> - Compile-Time Checking.
> - No need of Typecasting.

### What is type inferring in TS ?

> In many situations, Type inference is used to provide type information when no explicit type annotation is provided. It is useful when there are no explicit type annotation available.<br>
> EXAMPLE :
>
> ```ts
> function fact(n: number) {
>   return (n * (n + 1)) / 2;
> }
> let fact1: number = fact(10); // Compiled.
> let fact2: string = fact(10); // Compilation error.
> ```

### What are the possible ways to define typing for functions ?

> There are multiple ways to define types for functions:
>
> - **Method Signatures**:
>   When defining an object type, its methods can easily be described by providing signatures as follows:
> - **Function Type Literals**:
>   This type of function typing is typically used in the signature of a higher-order function i.e. a function which accepts functions as parameters or returns a function.
> - **Object Type Literals With Call or Construct Signatures**:
>   This is same as the fact that functions in JS are just special objects that can be called again and again.

### How to define Generic types for classes ?

> To define generic types, we can use the generic type parameter in '`< >`' brackets.
> EXAMPLE :
>
> ```ts
> class employeeData<sname, sroll> {
>   private Id: roll;
>   private Name: name;
>   setValue(id: roll, name: name): void {
>     this.Id = id;
>     this.Name = name;
>   }
>
>   display(): void {
>     console.log(`Id = ${this.Id}, Name = ${this.Name}`);
>   }
> }
> let e1 = new employeeData<number, string>();
> student1.setValue(194, "Rajat");
> student1.display();
> ```

# Question 1

> Define the types in typescript for the given following JavaScript code.<br>Todo:
>
> - Define type/interface for a single Todo object.
> - Define type for each function.
> - Do not use any (TS Data Type) type of typescript.
>
> ```JS
> var todos = [];
> function add(name, description) {
>  return todos.push({ name: name, description: description, done: false });
> }
> function remove(index) {
>  return todos.splice(index, 1);
> }
> function list() {
>  todos.forEach(function (todo, index) {
>    console.log(index + " -" + todo.name);
>  });
> }
> function update(index, name, description) {
>  todos[index].name = name;
>  todos[index].description = description;
>  return todos[index];
> }
> ```

## Solution :

> ```TS
> class Student {
>  name: string;
>  description: string;
>  done: boolean;
> }
> var todos: Student[] = [];
> function add(name: string, description: string): number {
>  return todos.push({
>    name: name,
>    description: description,
>    done: false,
>  });
> }
> function remove(index: number): Entry[] {
>  return todos.splice(index, 1);
> }
> function list(): void {
>  todos.forEach(function (todo: Entry, index: number) {
>    console.log(index + " - " + todo.name);
>  });
> }
> function update(index: number, name: string, description: string): Entry {
>  todos[index].name = name;
>  todos[index].description = description;
>  return todos[index];
> }
> ```
