// 1. Average of array numbers in Javascript

const arr = [6, 2, 31, 4, 1, 16, 3, 43, 30, 8];

function avgOfArray(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

console.log(avgOfArray(arr));