const firstNum = [2, 2, 3, 2, 3]
//console.log(firstNum[4])
for (let n = 0; n < firstNum.length; n++) {
    console.log("We have output index five and length four", firstNum[4]);
    break;
}

const scondNum = [0, 1, 0, 1, 0, 99, 1, 99]
//console.log(scondNum[7]) 
let i = 0;

while (i < scondNum.length) {
    console.log("We have output index Sevan and length six", scondNum[7]);
    i++;
    break
}
const drtheeNum = [7, 1, 1, 7, 1, 7, 99, 99, 12, 8, 12, 12, 99, 8]
let b = 0;
/* console.log(drtheeNum[9])  */
do {
    console.log(drtheeNum[9]);
    b++;
    break
} while (b < drtheeNum.length);