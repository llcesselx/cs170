#!/usr/bin/env node

function randomBirthday() {
    for (let i = 0; i < 23; i++) {
        randomBdayNum = (Math.random()*365)+1
        bdayNum = Math.floor(randomBdayNum);
        bdays.push(bdayNum);
    }
}

function runTrial() {
    let counts = 0;
    let success = 0;
    let fails = 0;
    for (let trial = 0; trial < 10; trial++) {
        randomBirthday();
        for (let b = 0; b < bdays.length+1; b++) {
            checkNum = bdays.shift();
            if (bdays.includes(checkNum)){
                success += 1;
                let bdays = []
                break;
            }
            else {
                checkArray.push(checkNum);
                bdays.push(checkNum);
            }
        }
        if (checkArray.length == bdays.length) {
            fails += 1;
        }
        counts += 1;
    }
    let successPercent = ((success/100)*100);
    let failPercent = ((fails/100)*100);
    let totalPercent = ((counts/100)*100);

    let successStr = success.toString();
    let failStr = fails.toString();
    let totalStr = counts.toString();

    let successPercStr = successPercent.toString();
    let failPercStr = failPercent.toString();
    let totalPercStr = totalPercent.toString();

    let padSuccess = successStr.padStart(3, " ");
    let padFail = failStr.padStart(7, " ");
    let padTotal = totalStr.padStart(8, " ");

    let padSuccessPerc = successPercStr.padEnd(3, " ");
    let padFailPerc = failPercStr.padEnd(3, " ");
    let padTotalPerc = totalPercStr.padEnd(3, " ");

    console.log(`Successful Trials: ${padSuccess} - ${padSuccessPerc} %`);
    console.log(`Failed Trials: ${padFail} - ${padFailPerc} %`);
    console.log(`Total Trials: ${padTotal} - ${padTotalPerc} %`);
}
let bdays = []
let checkArray = []
runTrial();

