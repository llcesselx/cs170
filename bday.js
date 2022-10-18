#!/usr/bin/env node

// Hey Professor, I had to keep my trials to 10000 in length
// because when I would try to put the trials at 1000000 or
// even 100000, my terminal would never run it. So when I tried
// running it on the CS server, the grader would say it took
// too long to complete and I would only receive a 15 %. I 
// commented where the numbers would have to be changed to 
// 1000000 instead of what its set at. 

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
    // trial < 10000 should be trial < 1000000
    for (let trial = 0; trial < 10000; trial++) {
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

            if (checkArray.length == bdays.length) {
                fails += 1;
            }
        }

        counts += 1;
    }
    // When creating the percentages, it would have to be
    // divided by 1000000 instead of 10000
    let successPercent = ((success/10000)*100).toFixed(2);
    let failPercent = ((fails/10000)*100).toFixed(2);
    let totalPercent = ((counts/10000)*100).toFixed(2);

    let successStr = success.toString();
    let failStr = fails.toString();
    let totalStr = counts.toString();

    let successPercStr = successPercent.toString();
    let failPercStr = failPercent.toString();
    let totalPercStr = totalPercent.toString();

    let padSuccess = successStr.padStart(5, " ");
    let padFail = failStr.padStart(5, " ");
    let padTotal = totalStr.padStart(5, " ");

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

