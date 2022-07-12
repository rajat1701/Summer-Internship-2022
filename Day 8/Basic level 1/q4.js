// Sort an array by both ascending and descending order

let numbers = [5, 13, 1, 44, 32, 15, 500];
console.log(`Given Array : ${numbers}`);
let asc = numbers.sort((a, b) => a - b);
console.log(`Sorted Ascendingly : ${asc}`);
let des = numbers.sort((a, b) => b-a);
console.log(`Sorted Descendingly : ${des}`);

/*

OUTPUT :

[ /d/Projects/Summer-Internship-2022 ] (main)
> node "d:\Projects\Summer-Internship-2022\Day 6\Basic level 1\q4.js"
Given Array : 5,13,1,44,32,15,500
Sorted Ascendingly : 1,5,13,15,32,44,500
Sorted Descendingly : 500,44,32,15,13,5,1

*/