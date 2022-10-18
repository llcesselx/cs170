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
        let bdaySet = new Set(bdays);
        let bdays2 = Array.from(bdaySet);

        if (bdays.length === bdays2.length) {
            fails += 1;
        }
        else {
            success += 1;
        }
        counts += 1;
    }

    let successPercent = ((success/10)*100);
    let failPercent = ((fails/10)*100);
    let totalPercent = ((counts/10)*100);

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
    //     randomBirthday();
    //     for (let b = 0; b < bdays.length; b++) {
    //         checkNum = bdays.shift();
    //         if (bdays.includes(checkNum)){
    //             success += 1;
    //             let bdays = []
    //             break;
    //         }
    //         else {
    //             checkArray.push(checkNum);
    //             bdays.push(checkNum);
    //         }
    //     }
    //     if (checkArray.length == bdays.length) {
    //         fails += 1;
    //     }
    //     counts += 1;
    // }
    // let successPercent = (success/1)*100;
    // let failPercent = (fails/1)*100;
    // let totalPercent = (counts/1)*100;

    // let successStr = success.toString();
    // let failStr = fails.toString();
    // let totalStr = counts.toString();

    // let successPercStr = successPercent.toString();
    // let failPercStr = failPercent.toString();
    // let totalPercStr = totalPercent.toString();

    // let padSuccess = successStr.padStart(3, " ");
    // let padFail = failStr.padStart(7, " ");
    // let padTotal = totalStr.padStart(8, " ");

    // let padSuccessPerc = successPercStr.padEnd(3, " ");
    // let padFailPerc = failPercStr.padEnd(3, " ");
    // let padTotalPerc = totalPercStr.padEnd(3, " ");

    // console.log(`Successful Trials: ${padSuccess} - ${padSuccessPerc} %`);
    // console.log(`Failed Trials: ${padFail} - ${padFailPerc} %`);
    // console.log(`Total Trials: ${padTotal} - ${padTotalPerc} %`);
}
let bdays = []
let checkArray = []
runTrial();

