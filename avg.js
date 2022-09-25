#!/usr/bin/env node

let total = 0;
let count = 0;
let numbers = process.argv.slice(2);
let numbersLen = numbers.length;

for(let i = 0; i < numbersLen; i++) {
    let number = numbers[i];
    let numberFloat = parseFloat(number);

    if (isNaN(numberFloat)){
        continue;
    }

    total = total + numberFloat;
    count ++;
}

console.log(total/count);

if (count === 0){
    console.error("This program requires that you provide numberic arguments.");
    process.exit(1);
}


