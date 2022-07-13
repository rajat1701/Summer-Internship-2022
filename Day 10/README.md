# TypeScript Quiz (Basic Level 1)

## Theory -

### 1. What are the basic datatypes in TypeScript ?

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

### 2. What is Generic data type ?

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

### 3. What is type inferring in TS ?

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
