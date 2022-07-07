const cToF = (c) => {
    const f = ((c*9)/5)+32;
    return f;
};
const fToC = (f) => {
     const c = ((f-32)*5)/9;
     return c;
};
console.log(`60 C is ${cToF(60)} F`);
console.log(`45 F is ${fToC(45)} C`);

/*
OUTPUT:

[ /d/Projects/Wisflux_Academy_Internship_2022/Day 4 ] (main)
> node "d:\Projects\Wisflux_Academy_Internship_2022\Day 4\Qn3.js"
60 C is 140 F
45 F is 7.222222222222222 C

*/