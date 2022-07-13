const largestOfThree = (a,b,c) =>{
    if(a>b)
    { if(a>c)
        return a;
      else
       return c;
    }
    else if(b>c)
      return b;    
    else
      return c;
}
console.log(`Largest of 8,21,6 : ${largestOfThree(8,21,6)}`);
/*

OUTPUT :

[ /d/Projects/Wisflux_Academy_Internship_2022/Day 4 ] (main)
> node "d:\Projects\Wisflux_Academy_Internship_2022\Day 4\Qn5.js"
Largest of 8,21,6 : 21

*/