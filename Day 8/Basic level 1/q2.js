// 2. Swap two numbers by reference
let num1 = 43;
let num2 = 7;
console.log(`1st Number : ${num1} and Second Number : ${num2}`);
const swap = (a,b) => {
    temp = a;
    a = b;
    b = temp;
    return [a,b];
}
[num1, num2] = swap(num1, num2);
console.log(`1st Number : ${num1} and Second Number : ${num2}`);
/*

OUTPUT :

[ /d/Projects/Summer-Internship-2022 ] (main)
> node "d:\Projects\Summer-Internship-2022\Day 6\Basic level 1\q2.js"
1st Number : 43 and Second Number : 7
1st Number : 7 and Second Number : 43

*/