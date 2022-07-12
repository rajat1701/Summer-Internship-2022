// Merge two sets in javascript
const s1 = new Set([1, 2]);
console.log(`1st Set : ${Array.from(s1.values())}`);
const s2 = new Set([3, 4]);
console.log(`2nd Set : ${Array.from(s2.values())}`);
const s3 = new Set([...s1, ...s2]);
console.log(`Merged Set : ${Array.from(s3.values())}`);

/*

OUTPUT :

[ /d/Projects/Summer-Internship-2022 ] (main)
> node "d:\Projects\Summer-Internship-2022\Day 6\Basic level 2\q4.js"
1st Set : 1,2
2nd Set : 3,4
Merged Set : 1,2,3,4

*/