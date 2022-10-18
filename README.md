# cs170
Class projects for cs170 Web Programming

Each branch is a seperate lab required for CS170 - Web Programming

**1) Birthday Problem (```bday.js```)**

In this problem we will be exploring a mathematical problem called The Birthday Problem. You can read more about the problem itself from the link, but the gist of the problem states that given 23 people in a room, there is a approximately a 50% chance that two people in the room share a birthday given a 365 day year and assuming an equal distribution of birthdays. We are going to use our JavaScript Programming skills to empirically verify this claim with some programmatic experimentation. We will be running 1 million random trials and then comparing the results to see how many trials contained birthday matches and how many trials did not.

**Simulating Birthdays**

First we are going to need a method to simulate people's birthdays. We will need an array to hold the trial birthdays (```bdays```) for the 23 people in the room. We could enumerate each month day combination in an array of length 365, then randomly select 23 values from the array to store in our ```bdays``` array to simulate the the birthdays of the people in the room, however, that seems like a lot of work. Since we don't really need to display the actual birthdays themselves, we could make it much easier on ourselves by simply selecting a random integer between 1 and 365 inclusive. The integer 1 would represent a birthday of January 1st, and the integer 365 would represent a birthday of December 31. To do this you may want to create a function that can generate a random value between 1 and 365 inclusive.
```
function randomBirthday() {
// returns an integer from 1 to 365 inclusive (or 0 to 364)
}
```

**Detecting Duplicate Birthdays**

We can start with an empty array called ```bdays```, and then generate 23 ```randomBirthdays()```. If we generate a birthday that already exists, we will call that a ```success```, and if not, then we will call that a failure. So we need to check for duplicates to determine success or failure.

Below are 2 different options for detecting duplicates.

**Duplicates Using Array Method ```.includes()```**

It may be easiest to check for duplicates as you add random birthdays to ```bdays``` by using the array method ```.includes()``` (e.g. ```bdays.includes(newRandomBday)```). If you detect a duplicate, then you can stop the trial right there (```return true``` to represent a trial success). If however you never encounter a duplicate, then the loop will conclude, at which point you can ```return false``` to represent a trial failure.

Here is a simple example unrelated to this assignment of using ```array.includes()``` to detect duplicates.
```
function addUnique(arr, value) {
  if (arr.includes(value)) {
    return false;
  }
  arr.push(value);
  return true;
}

let pets = [];
console.log(addUnique(pets, "cats"));
console.log(addUnique(pets, "dogs));
console.log(addUnique(pets, "birds"));
console.log(addUnique(pets, "cats"));

console.log(pets);
```

**Duplicates Using JavaScript Collection ```Set```**

An alternative way to code this part would be to generate all 23 birthdays in the array, then check for duplicates using a JavaScript data structure known as a ```Set```. A set is an unordered collection of elements that does not contain duplicates. We can create a set from an array, and due to the nature of sets, any duplicate items will automatically be removed. So we could then convert the set back to an array at which point we would have an array with all the duplicates removed. Comparing the length of this new array with the length of the original array (with potential duplicates) will tell us if there were any duplicates. If the lengths do not match, that means there were duplicates (birthday matches), so the trial would be a success and ```return true;```.

Here is a simple example of using a set to detect duplicates, unrelated to this assignment.
```
let pets = ["cats", "dogs", "birds", "cats"];

// creates a new set from the elements in teh array
let petSet = new Set(pets);

//creates an array from the set
let pets2 = Array.from(petSet);

if (pets.length == pets2.length) {
  console.log("No duplicates found!");
}
else {
  console.log("Duplicates found!");
}
console.log(pets);
console.log(pets2);
```

**Running a Single Trial**

We will want to separate our code into small reusable blocks, to make the code easier to read and understand. One way to do this is to simulate one single trial of the birthday problem using a function called ```runTrial()```. Once we get that function properly simulating one single trial of the birthday problem, then we can call that function inside a loop and track the results.

**Repeated Trials**

We can now run our trials in a ```for``` loop 1 million times. To track the results, just create a simple object to count the successes and failures The after each trial run. If a trial was a success, increment the successes counter, and if it was a failure increment the failures counter.
```
let results = {
    successes: 0,
    failures: 0,
};
```

**Displaying the Results**

To display the results you should print out the individual counts of the successes and failures as well as the percentage for each. The percentage should be rounded to 2 decimal places. Here is an example of the expected output (your values will be different each time you run it, but the results should be close to 50/50 each run):
```
Successful Trials:  508208 -  50.82 %
Failed Trials:      491792 -  49.18 %
Total Trials:      1000000 - 100.00 %
Make sure you match the output format as best you can.
```
**Grading (50pts)**
**(10pts)** - Program file ```bday.js``` exists and runs and completes without errors displaying some output.

**(5pts)** - File ```bday.js``` contains a function ```randomBirthday()``` to simulate generating a random birthday (365 total possibilities, not 364).

**(5pts)** - File ```bday.js``` contains a function ```runTrial()``` to run one single trial of the birthday problem.

**(10pts)** - File ```bday.js``` runs 1 million trials of the birthday problem, and displays the resulting counts.

**(10pts)** - File ```bday.js``` runs 1 million trials of the birthday problem, and displays the resulting percentages using the "```%```" character.

**(5pts)** - File ```bday.js``` output uses string padding (```padEnd()```) to align the output labels as shown.

**(5pts)** - File ```bday.js``` output uses string padding (```padStart()```) to align the counts.

**(5pts)** - File ```bday.js``` output uses string padding (```padStart()```) to align the percentages.

**(5pts)** - File ```bday.js``` output matches formatting exactly as described.

**(BONUS 3pts)** - Decimals ending with ```.00``` actually display both zeros. So one hundred percent should be displayed as ```100.00 % ```not ```100 %```. This must be accomplished with a calculation on the number literal ```100``` using JavaScript functions rather than just logging the string ```"100.00 %"```. Hint: ```.toFixed()```.
