function fiboSequence(num) {
    let x = 0;
    let y = 1;
    let z;
    for (i = 1; i <= num; i++) {
      console.log(x);
      z = x + y;
      x = y;
      y = z;
    }
}
let num = 10;  
fiboSequence(num);
/*

OUTPUT : 

[ /d/Projects/Summer-Internship-2022 ] (main)
> node "d:\Projects\Summer-Internship-2022\Day 6\Basic level 1\q3.js"
0
1
1
2
3
5
8
13
21
34

*/