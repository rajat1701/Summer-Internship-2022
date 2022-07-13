// Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900.

function randomGenerator(min1, max1, min2, max2){
    let diff1 = max1-min1;
    let diff2 =max2-min2;
    var random1 = Math.floor(Math.random()*(diff1+1)+min1);
    var random2 = Math.floor(Math.random()*(diff2+1)+min2);
    console.log(`Random number between -100 and 0 : ${random1}`);
    console.log(`Random number between 800 and 900 : ${random2}`);
}
randomGenerator(-100,0,800,900);

/*

OUTPUT : 

[ /d/Projects/Summer-Internship-2022 ] (main)
> node "d:\Projects\Summer-Internship-2022\Day 9\Basic level 4\q1.js"
Random number between -100 and 0 : -63
Random number between 800 and 900 : 864

*/