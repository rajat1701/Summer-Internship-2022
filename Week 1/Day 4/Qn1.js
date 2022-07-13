const area = (a,b,c) => {
    let s = (a+b+c)/2;
    return (s*(s-a)*(s-b)*(s-c))**0.5;
}
console.log(`Area of a triangle with sides 5,6,7 : ${area(5,6,7)}`);

//Output :
/**

[ /d/Projects/Wisflux_Academy_Internship_2022/Day 4 ] (main)
> node "d:\Projects\Wisflux_Academy_Internship_2022\Day 4\Qn1.js"
Area of a triangle with sides 5,6,7 : 14.696938456699069

*/