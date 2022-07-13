const gradeStatus = (marks,exam) =>{
    const midTerm = (marks >= 89 && marks<=100 && exam !== "final-exam" );
    const finalExam = (marks >= 90 && marks <=100 && exam === "final-exam" );
    if( midTerm || finalExam)
        return true;
    else 
     return false;
};

console.log(`For total marks = 90 in final-exam, A+ grade status : ${gradeStatus(90,'final-exam')}`);
console.log(`For total marks = 89 in final-exam, A+ grade status : ${gradeStatus(89,'final-exam')}`);
console.log(`For total marks = 89 in mid-term, A+ grade status : ${gradeStatus(90,'mid-term')}`);

/*

OUTPUT :

[ /d/Projects/Wisflux_Academy_Internship_2022/Day 4 ] (main)
> node "d:\Projects\Wisflux_Academy_Internship_2022\Day 4\Qn6.js"
For total marks = 90 in final-exam, A+ grade status : true
For total marks = 89 in final-exam, A+ grade status : false
For total marks = 89 in mid-term, A+ grade status : true

*/