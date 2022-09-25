# cs170
Class projects for cs170 Web Programming


CS-170 - Web Programming
Fall 2022
Instructor: Mr. Luke May
JavaScript Basics
Preparation
Make sure you have worked through the Lecture Materials on JavaScript.

Lab Setup
Turn in all the files by creating the following directory and placing them in that location on the CS Server.

mkdir -p ~/labs/lab2
Auto Grader
There is an auto-grader for this lab that should give you a reasonable idea of your grade. This program will help to ensure that you have named your files correctly and that your programs work reasonably well. Again, the result here does not guarantee your final lab grade, but is should give a reasonable estimate of your grade.

Navigate to your lab folder:

cd ~/labs/lab2
Then run the grader:

cs170-lab2-grader.py
Running JavaScript Programs From the Terminal
To run your program files (e.g. prog.js), change directories to where the program file is located, then run the terminal command node prog.js. Alternatively, to run the program as a command in a Linux environment you can add the hasbang at the top of the file #!/usr/bin/env node, add the Linux executable permission to the file with chmod +x prog.js, then run the program with ./prog.js. This only works on Linux environments and your file cannot have any Carriage Return (CR) characters used in Windows environments, so make sure your text editor is only using Unix-style line endings called Line Feeds (LF).

Lab Problems (65pts)
This lab is going to illustrate the differences between string concatenation and string interpolation. It will also explains the difference between data as an array and data as an object. And finally we will make use of command-line arguments.

1) String Concatenation (concatenation.js)
String concatenation is when you join one or more strings together with the + operator. The strings you are concatenating can be string literals (string literally written in the code), or expressions resulting in the value of a string (variables or the result of function calls, etc.).

Create a file called concatenation.js that contains the following code. Be careful to type the string expression out correctly, or you may lose points. Use the autograder for hints. Change the value of the variables name and monthNumber to hold information about yourself instead of information about me.

Notice that JavaScript automatically converts the number typed data into string typed data before the concatenation occurs. Most languages do not do this. The ability of JavaScript to try to guess the proper type when types don't match is called type coercion. See the lecture materials for more detail.

The output of this program (with my data) would be:

My name is Luke, and my birthday is in the month of September.
Your programs will be different and instead display your name and your birth month.

Grading (8pts)
(1pts) Program concatenation.js runs without errors.
(1pts) Program concatenation.js defines the variable monthNames and assigns it to an array with the 12 string elements, one for each month of the year in the correct order.
(1pts) Program concatenation.js defines the variable monthNumber and assigns it an integer value between 1 and 12 inclusive.
(1pts) Program concatenation.js defines and sets the variable name to your name.
(2pts) Program concatenation.js must use string concatenation to produce the resulting string that is logged to the console.
(2pts) Program concatenation.js displays one line of output EXACTLY as described, but using your name and your birth month.
2) String Interpolation (interpolation.js)
String interpolation is when you define a string literal using backticks (`), and then inject JavaScript expressions into specific areas of the string using the special syntax ${}.

Notice that because array item indexing starts at zero, we had to subtract one from the month number to get the correct index value for the month name.

The output of this program (with my data) would be:

My name is Luke, and my birthday is in the month of September.
Your programs will be different and instead display your name and your birth month.

Grading (8pts)
(1pts) Program interpolation.js runs without errors.
(1pts) Program interpolation.js defines the variable monthNames and assigns to it an array with the 12 string elements, one for each month of the year in the correct order.
(1pts) Program interpolation.js defines the variable monthNumber and assigns it an integer value between 1 and 12 inclusive.
(1pts) Program interpolation.js defines and sets the variable name to your name.
(2pts) Program interpolation.js must use string interpolation to produce the resulting string that is logged to the console.
(2pts) Program interpolation.js displays one line of output EXACTLY as described, but using your name and your birth month.
3) String Concatenation with Array Data (arrayConcat.js)
You can use either of the previously mentioned techniques (concatenation or interpolation) to create resultant strings when the data is in array or object form. Next we will make use of string concatenation with array data.

Create a file called arrayConcat.js (using the camelCase naming format). Type out the following code. Be careful to get the output message EXACTLY correct. Replace my data in the array with your own data.

Notice we reference the items in the array by their index, using array element access using the square bracket access syntax. Also note how the code looks a bit noisy with all of the additional quotation marks, plus signs and extra

Grading (13pts)
(1pts) Program arrayConcat.js runs without errors.
(3pts) Program arrayConcat.js defines the variable data and assigns to it an array with three string elements, your first name, your last name, and your ISU email address.
(2pts) Program arrayConcat.js uses string concatenation.
(3pts) Program arrayConcat.js references the elements of the array in the string concatenation expression ( data[0], data[1], and data[2].).
(1pts) Program arrayConcat.js displays your email address by referencing the last index of the array by using the calculation ( data[data.length-1] ) elements of the array in the string concatenation expression.
(1pts) Program arrayConcat.js uses exactly 3 console.log() function calls.
(2pts) Program arrayConcat.js displays one line of output EXACTLY as described, one blank line, then a line printing only your email address. Make sure you have all the proper whitespace and/or special characters before and after you printed variables.
4) String Interpolation with Object Data (object-interp.js)
You can use either of the previously mentioned techniques (concatenation or interpolation) to create resultant strings when the data is in object form too. Here we will make use of string interpolation with object data.

Create a file called object-interp.js (using the kebab-case naming format). Type out the following code. Be careful to get the output message EXACTLY correct. Replace my data in the array with your own data.

Here the dollar sign and the curly braces ${} do not actually appear in the resulting string. The JavaScript expression inside them, however, is evaluated and injected (interpolated) into the string.

The expressions used in each of these cases is an example of object property access. You can access properties on objects in JavaScript using two distinct syntactical methods. The most commonly used method is via the object access operator (.). This allows you to access an object property by referencing the object, typing a ., then typing the property name.

A second method of property access is by way of square bracket accessors, in which we reference the object, then use square brackets similar to how we access array elements, but instead of an index we use a key or property name inside the brackets. Anything you can reference with the dot accessor syntax can also be referenced using the square bracket accessor syntax. Notice how we use both methods to access the email_address property on the object. This method is syntactically more verbose than using the dot accessor, but it has more versatility. Using the square bracket accessor syntax we can use key names that contain special characters like the hyphen (-) or the space (), which would not be allowed to be used in conjunction with the dot accessor syntax. This has to do with how the JavaScript engine parses the JavaScript code. In the code, if a hyphen is encountered (-) it is interpreted as a subtraction operator, which makes it impossible to have hyphenated names in code.

Also notice how we only use one console.log() function call here instead of the three calls in the previous program. This shows that we can use the string character escape sequence to include unusual and abstract characters like the Line Feed (newline \n) character or the Tab character (\t).

Grading (13pts)
(1pts) Program object-interp.js runs without errors.
(3pts) Program object-interp.js defines the variable data and assigns to it an object with three string properties, your first name with key firstName, your last name with key last-name, and your ISU email address with key email_address.
(2pts) Program object-interp.js uses string interpolation.
(1pts) Program object-interp.js uses the dot property accessor to display the data.firstName property.
(1pts) Program object-interp.js uses the square bracket accessor to display the data["last-name"] property.
(2pts) Program object-interp.js displays your email address twice by making use of each property access method (data.email_address and data["email_address"]).
(1pts) Program object-interp.js uses only 1 console.log() function call (must use 2 newline characters in the string \n\n).
(2pts) Program object-interp.js displays one line of output EXACTLY as described, one blank line, then a line printing only your email address. Make sure you have all the proper whitespace and/or special characters before and after you printed variables.
5) Program Arguments (args.js)
Program arguments allow us to pass data into our JavaScript programs when we run the program from the command line. This is the way all Linux commands are able to take in additional data you provide to them after typing the command name. For example, in the command cp prog.js prog.v1.js, there are 2 arguments, prog.js, and prog.v1.js. In is similar way, we can access these program arguments from out JavaScript programs.

Create a file called args.js. Place the following code in the file:

When you run this program without program arguments:

node args.js
you will see something like the following print to the terminal:

[ '/xsys/local/bin/node', '/u1/class/cs17000/args.js' ]
So by default in NodeJS when you access the argv property (which stands for argument vector) on the special process object, you'll see an array with at least 2 items. The first item is the path to the instance of node being used to run the program. The second item is the path to the program you are running.

Now if you run the program with command-line arguments like this:

node args.js apples oranges bananas
you will see something like the following print to the terminal:

[ '/xsys/local/bin/node', '/u1/class/cs17000/args.js', 'apples', 'oranges', 'bananas' ]
We usually you won't need those first two elements from process.argv, so I generally make another array and .slice() off those first two elements. Here is an explanation of how .slice() works from Mozilla Develpoer Network.

So if you change the code in args.js to this:

and then run it with these arguments:

node args.js apples oranges bananas
you should see output like this:

[ 'apples', 'oranges', 'bananas' ]
Now using that idea, modify your program to iterate through that list of arguments held in args using any means you like (for loop, while loop, etc). You're final program should print one argument per line. So for example, after you are done, if you run the program with the above arguments, you should see the output:

apples
oranges
bananas
Grading (8pts)
(1pts) Program args.js runs without errors with no arguments.
(1pts) Program args.js uses process.argv.
(2pts) Program args.js takes a .slice() from process.argv to remove the first two elements of that array.
(2pts) Program args.js prints out all arguments provided to the command.
(2pts) Program args.js prints out one argument per line (excluding the first two elements in process.argv), with no additional output.
6) Calculate the Average (avg.js)
Using what we know about arguments, we will now create a program that is actually useful. Create a file called avg.js. This program should take each of command-line arguments provided and convert them to the data type number by making use of the function parseFloat(). It should then sum these numbers, and divide by the number of arguments provided (args.length). The program should then output that one value with no other output.

Example execution:

node avg.js 10 10.5 11
should result in only the following line of output:

10.5
Your program should be able to handle bad data. You will want to track a total value and a count value as you loop through the arguments. If you encounter an argument value like "apple" that cannot be parsed with parseFloat(), you will get a result of "Not a Number" or NaN. In this case you should not increment the count, and obviously you cannot increase the total.

Example:

node avg.js 10 apple 10.5 11
Result:

10.5
If no valid numbers are provided as arguments, an error message should be logged, and then the program should exit with a status code 1:

Grading (15pts)
(1pts) Program avg.js runs without errors when provided a numeric argument.
(1pts) Program avg.js uses process.argv.
(2pts) Program avg.js takes a .slice() from process.argv to remove the first two elements of that array.
(3pts) Program avg.js converts all of the arguments (however many) to floating-point decimals using parseFloat(). You should probably use a loop of some kind.
(3pts) Program avg.js calculates the average by summing the floating point decimals, dividing the result by the number of arguments, and then displaying the resulting value with no other output.
(1pts) Program avg.js uses console.error() if no numeric arguments are provided.
(1pts) Program avg.js uses process.exit(1) if no numeric arguments are provided.
(3pts) Program avg.js ignores bad argument data.
