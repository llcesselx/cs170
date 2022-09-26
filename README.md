# cs170
Class projects for cs170 Web Programming

Randomness and Probability

Random Intervals in JavaScript
String Padding

Lab Problems (78pts)
This lab is going to make use of use randomness and string padding.
______________________________________________________________________________________________________________________

**1) Padded String Table (table.js)**
Make sure you have read about String Padding. Create a file called table.js and create the program at the bottom of the article that constructs a text based table. You may change the names, but at least 3 names should have different lengths. You may also change the scores, but at least one score should be greater than or equal to 100, at least one score should be 0, and at least one score should be in the range 99.9 <= score <= 10.0. The purpose of this is to make sure you are having to pad strings for numeric values of different lengths.

**Grading (10pts)**
(4pts) File table.js exists and generates a perfectly padded and spaced table of data with at least 5 table entries.
(3pts) File table.js uses at least 3 names of differing lengths.
(3pts) File table.js uses at least 3 scores of differing lengths as described above.
______________________________________________________________________________________________________________________

**2) Roll 2 6-Sided Dice (roll.js)**
Create a file named roll.js. This file should simulate the rolling of 2 separate 6-sided dice. Simulate the dice rolls, then sum the results like you would in a board game. The only output from this program should be the resulting sum. Possible outputs should only be 2 through 12. No other output.

**IMPORTANT Rolling 2 6-sided dice is statistically much different than rolling a single 12-sided die. You must simulate rolling 2 6-sided dice.**

**Grading (10pts)**
(10pts) File roll.js exists and simulates the rolling of 2 separate 6-sided die, printing only the summed result of the two dice.
______________________________________________________________________________________________________________________

**3) Empirical Probability of Rolling 2 6-Sided Dice (prob.js)**
Create a file called prob.js. In this program we will calculate the probability of each of the 11 possible summed results (2-12) when rolling 2 6-sided dice. So you will be using much of the code from the previous program. You will simulate 100,000 dice rolls and track the results in either an array or an object.

Since there are 12 possible results, you will need 11 individual counters, and these can be stored in either an array or an object. One could even store the counters as 12 individual variables, but that would be considered a bad practice that isn't a scalable solution, so you will lose points if you choose to do that. Start each counter value at 0.

So if you are storing results in an array the setup may look like this:
```
  //Number of times each value is rolled
  //          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  let counters = [0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0];
```
If you are storing the results in an object your setup may look like this:
```
  // Number of times each value is rolled
  //  Object property names that start with numbers or contain spaces must be quoted
  let counters = {
    "2": 0,
    "3":0,
    "4":0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10":0,
    "11", 0,
    "12", 0,
   };
```
Make a function called roll() from your previous program code that returns the result of the simulated 6-sided dice roll. In a loop that runs 100,000 times, run the roll() function, and for each result that you get, add to the counter.

After you have counted how many times each result occurred, you can divide each count by the total number of tries (100,000) to get the total empirical probability of rolling that particular result value. Round the result to 2 decimal places using .toFixed(2) function that is available on all JavaScript number types. Example: (2.35555).toFixed(2) === "2.36".

In a loop, iterate through your counter array or object, and print to the console a label for the result, and then the empirical probability you found for that result.

Use padStart() with an empty space as the padding character when printing the results so that both the labels and the values are right aligned.

Below is what your output should look like. These are the theoretical probabilities as percentages, and your values should be close but may not be exactly the same.
```
  2:  2.78 %
  3:  5.56 %
  4:  8.33 %
  5: 11.11 %
  6: 13.89 %
  7: 16.67 %
  8: 13.89 %
  9: 11.11 %
  10:  8.33 %
  11:  5.56 %
  12:  2.78 %
```
**Grading (22pts)**
(3pts) File prob.js exists and simulates the rolling of 2 separate 6-sided die 100,000 times.
(2pts) Program prob.js counts each of the 100,000 outcomes in an object or an array.
(11pts) Program prob.js calculates the empirical probability of each possible result and displays it.
(2pts) Program prob.js rounds the decimal values to 2 decimal points using .toFixed(2).
(4pts) Program prob.js uses padStart() appropriately in the output. Both the labels and the values should be right aligned.
______________________________________________________________________________________________________________________

**4) Pick a Card (card.js)**
Create a file named card.js. This file should simulate selecting a random a random card from a deck of standard playing cards. In a standard deck of playing cards, there are 4 suits: spades, hearts, clubs, and diamonds. There are 13 cards in each suit having particular values: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King. You will also need to create an empty array to represent the deck. We will be representing each card as a 2 character encoding in the deck array. The first character will be the value and the second will be the suit.

Create an array that holds a single character (string) for each of the suits, and then another array holding a single character for each or the card values (use the character "t" for 10). Make a for loop iterating over each suit, then in the body of that loop create another for loop iterating over each value. Combine the value from the inner loop with the suit from the outer loop to generate a card (e.g. "4s" as 4 of spades, "kh" as king of hearts, etc.).

After completing the deck write the code to randomly draw a card. Then display the card, but not using the two character encoding. Instead use a more formal proper name. So instead of printing "ts" display "10 of Spades".
```
  let values = ["a", "2", "3", "4", "5", "6", "7", "8", "9", "t", "j", "q", "k"];
  let suits = ["s", "h", "c", "d"];
  
  for (/* iterate over suits*/) {
    for (?* iterate over values*/) {
      // make a 2-character card
      // append it to a deck array using array.push(card)
     }
   }
   
   // Randomly select a card from the deck
   
   // Display card nicely
   //  Hint for getting fancy suit, do the same thing for fancy value
   names:
   let fancySuits = {
      s: "Spades",
      h: "Hearts",
      c: "Clubs",
      d: "Diamonds",
    };
    
    let fancySuit = fancySuits[suitCharacter];
```
**Grading (20pts)**
(6pts) Program card.js creates the deck of cards using nested for loops.
(8pts) Program card.js selects a random card.
(6pts) Program card.js displays random card nicely.
______________________________________________________________________________________________________________________

**5) Shuffle a Deck (deck.js)**
Create a file named deck.js. Use the same method of representing a deck of cards from the previous program. This file should create the deck of cards using the nested for loops, and then simulate shuffling the deck. One way to do this is to start with an empty array meant to represent the shuffled deck. Then randomly select an card from the deck, append it to the shuffled array, then remove it from the deck array. The final output of the program should display a 5 card hand, one card per line. You can keep the cards encoded, no fancy names necessary.

To remove specific items from an array you will need to research the array.splice() function. It is very important to your professional value that you learn how to teach yourself things. You may use any resource you like, but the Mozilla Developer Network is a good place to start.

To select and remove a card from the end of the shuffled deck you can use array.pop() to remove it, but this would be like removing from the bottom of the deck.
```
    let card = shuffled.pop();
```
Instead we can use array.shift(), which behaves just like .pop() but removes from the start of the array instead. This is more like drawing cards from the top of the deck.
```
    let card = shuffled.shift();
```
**Grading (16pts)**
(8pts) Program deck.js prints a 5-card hand (never duplicating a card).
(8pts) Program deck.js doesn't print the same hand more than twice in 50 runs.
