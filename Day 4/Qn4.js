const diffBy13 = (n) => {
    const d = Math.abs(n-13);
    return (n>13)?(d*2):(d);
}
console.log(`For n = 16, the function returned : ${diffBy13(16)}`);
console.log(`For n = 3, the function returned : ${diffBy13(3)}`);
console.log(`For n = 13, the function returned : ${diffBy13(13)}`);
/*

OUTPUT :

[ /d/Projects/Wisflux_Academy_Internship_2022/Day 4 ] (main)
> node "d:\Projects\Wisflux_Academy_Internship_2022\Day 4\Qn4.js"
For n = 16, the function returned : 6
For n = 3, the function returned : 10
For n = 13, the function returned : 0

*/