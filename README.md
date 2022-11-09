# Dice and Cards with HTML

## 1) Roll a Die (`roll.html`)

Create a file called `roll.html`. In this program we will roll a die using the JavaScript from the last lab.

### Image Assets
You may reference the image assets using absolute URLS of the images hosted from the lmay1 account on the CS Server. There URLS are as follows:
 > https://cs.indstate.edu/~lmay1/assets/dice/1.png
 > https://cs.indstate.edu/~lmay1/assets/dice/2.png
 > https://cs.indstate.edu/~lmay1/assets/dice/3.png
 > https://cs.indstate.edu/~lmay1/assets/dice/4.png
 > https://cs.indstate.edu/~lmay1/assets/dice/5.png
 > https://cs.indstate.edu/~lmay1/assets/dice/6.png

### Design and Layout (HTML and JavaScript)

In `roll.html`, create your standard HTML starting template. An example might look something like this:
```
<!doctype html>
<html>
  <head>
    <title>Tab Title</title>
  <style>
body {
  background-color: #bbbbbb;
}
  </style>
  </head>
  <body>
    <h1>Page Title</h1>
    <script>
console.log("Starting JavaScript...");
    </script>
  </body>
</html>
```
Now the idea here is to have an image of a die roll result in the main area of the page, just below the `<h1>` heading. We can call this the **stage** `<div>`, and as such, we can set the `id` attribute to `"stage"`. Under this stage `<div>` we will have **controls** `<div>` that contain controls to manipulate the items on the stage. In our case that will just be a button to click that will simulate the random rolling of one die. Then using that randomly selected value we will select the appropriate image to display. Select one of the die faces to display by default and use the path that image as the value of the `src` attribute on the `<img>` tag. Remember the `<img>` tag is a **void element**, so it can have no children, and therefor doesn't require a closing tag. You may self-close the opening tag if you wish (I normally do, but it isn't required). We are going to need to access this element later to chage the `src` attribute to a different image, so make sure you set an `id` attribute on it as well.

So in the body tag, setup the basic structure described above: 
```
<body>
    <h1>Roll a Die!</h1>
    <div id="stage">
        <img id="die" src="https://cs.indstate.edu/~lmay1/assets/dice/5.png"/>
    </div>
    <div id="controls">
        <button>Roll the Die!</button>
    </div>
    <script>// JavaScript </script>
</body>
```
Next we have to define some JavaScript. We will start with a simple funciton to just make sure everything is working. We will define simple function called `clickRoll()` and then tell the browser to run that function when our button is clicked (click event) by setting the `onclick` attribute on the button element. 
```
function clickRoll() {
    console.log("Roll was clicked!!!");
    window.alert("Roll was clicked!!!");
    // We will add more code here later.
}
```
```
<button onclick="clickRoll();>Roll the Die!</button>
```
Now open the page in a browser and click the button. You should see a console message appear and also the alert box dialogue appear. This means you have things working so far. 

Next we need to try to modify `img` element's `src` attribute so it will display a different image. Once we make that change to the element, the browser will automatically try to load the new image. So let's modify `clickRoll()`:
```
function clickRoll() {
    let imgEl = document.getElementByID("die");
    let imageUrl = "https://cs.indstate.edu/~lmay1/assets/dice/6.png";
    imgEl.setAttribute("src", imageUrl); 
}
```
Save the file, refresh the browser page, and click the button. You should see the image change. 

Now make a function that will generate a random integer corresponding to numbers on the side of a die (make a `roll()` function). Then you can call that `roll()` function to get a random number. With that random number you can construct the path to that number's image. Once you have the path, you can modify the `<img>` tag's `src` attribute to the new path, and the browser will render the new image, making it appear as though you are rolling a die. 
```
function clickRoll() {
    
    let num = roll();
    let imageUrl = `https://cs.indstate.edu/~lmay1/assets/dice/${num}.png`;
    
    // Get the `<img>` element and set the `src` attribute to path.
}
```
You can place the `onclick` attribute on more HTML elements than just the `<button>`. For example, we could make it so that if you click the image it would roll the die too. Just the attribute value pair: `onclick="clickRoll();"`. Now you will notice that usually when something is clickable on the page, the cursor changes from a normal mouse cursor, to a hand with a finger out. You may not have even realized this, but it is a visual cue for you to know what is clickable on a page. So we will make sure we change the cursor when the mouse hovers over the image. This is important for your page to have a good user experience. Simply apply the CSS property to the image element: `cursor: pointer;`. You can look up all the different cursors or even make your own. 

### Sylistic Improvements

The last several steps will just be formatting and style:
1. Make sure the `<title>` tag holds an appropriate title for the page. The child text of this tag is what is displayed in the browser tab.
2. Choose a unique background color (hex, rgb, or rgba color codes only!) and/or an image for the background of the page.
3. Change the text color of the title. You may use black only if you explicitly set the color to black using the hex color codes (`#RRGGBB`, black is `#000000`).
4. Center the heading text, and increase the font-size.
5. Center teh image in the stage section and add some padding so it looks nice. 
6. Change the size for the image to be smaller (maximum of 400 pixels, but something smaller would look more like a real die.)
7. Center the contents of the controls section. Add a translucent background to the controls `<div>` using the CSS **rgba color code** (value ranges: `rgba(0-255, 0-255, 0-255, 0.0-1.0)`). You can use black as the base ccolor to darken the background (`background-color: rgba(0, 0, 0, 0.2);`), or you can use white as the color to lighten it (`background-color: rgba(255, 255, 255, 0.2);`). Add some padding so the controls section has an aesthetically pleasing thickness.
8. Increase the height and width of the button. Increase the font-size of the text in the button too. You may change the background-color of the button too if you like (not required). 
9. When the mouse is over the image it should change the `pointer` cursor.

Play with some additional CSS styles if you like. There is an incredible number of styles you can modify using CSS. 

### Answer the Question
Now you may have notices that the button doesn't always seem to change the die number. What do you think is causing that behavior? Write your answer centered at teh bottom of your HTML page in a paragraph tag (`<p>`).

### Grading(21pts)
1. **(8pts)** - File `roll.html` exists and simulates the rolling of a die.
2. **(2pts)** - `roll.html` - Clicking either the button or the image will roll the die.
3. **(9pts - 1pt each)** - `roll.html` - Each of the above numbered stylistic improvements are addressed.
4. **(2pts)** - `roll.html` - Answer the question as described above. 

## 2) Pick a Card (`pick.html`)
    
Create a file called `pick.html`. In this program we will randomly select one cards from a deck of cards and display it on an HTML page.

### Image Assets
You may reference the image assets using absolute URLS of the images hosted from the lmay1 account on the CS Server. There URLS are as follows:

https://cs.indstate.edu/~lmay1/assets/cards/ace_of_clubs.png

https://cs.indstate.edu/~lmay1/assets/cards/2_of_clubs.png

https://cs.indstate.edu/~lmay1/assets/cards/3_of_clubs.png

... etc ...

https://cs.indstate.edu/~lmay1/assets/cards/black_joker.png

https://cs.indstate.edu/~lmay1/assets/cards/black_joker.png

https://cs.indstate.edu/~lmay1/assets/cards/red_joker.png

https://cs.indstate.edu/~lmay1/assets/cards/back.png

If you want to download all the images for your own use you can do so.

### Design and Layout (HTML and JavaScript)
This will be very similar to `roll.html`, but with playing cards instead. There are some differences though, as you may notice, the image files have a transparent background. This is so you can set a background-color to make the cards whatever color you like. The backside of the card is not transparent however. So make sure you select a nice color for the back-side of the card and a nice color for the front (white or off-white is fine for the front, but you can use anything as long as I can see the numbers and suits easily). You will also need to place a border on the cards using CSS.

Your program should start with a similar layout as `roll.html` but with a card in the center instead of a die. The initial image showing should be the backside of the card (with the CSS properties `background-color`, `border`, and `border-radius` set). Change all the text to appropriately match the theme of picking a card rather than rolling the die.

### Answer the Question
Now you may have noticed that the button doesn't always seem to change the card. However here, this happens far less frequently than with `roll.html`. What do you think is causing that behavior? Write your answer centered at the bottom of your HTML page in a paragraph tag (`<p>`).

### Grading (21pts)
1. **(8pts)** - File `pick.html` exists and simulates the picking of a card from a deck.
2. **(2pts)** - `pick.html` - Clicking either the button or the image will pick a card.
3. **(9pts - 1pt each)** - `pick.html` - Each of the above numbered stylistic improvements from roll.html are addressed in this program too.
4. **(2pts)** - `pick.html` - Answer the question as described above.

## CSS Position (`css-position.html`)

### The CSS Position Property Video

Follow along with the vide from the lecture material about creating and Interactive Demo of teh CSS Position Property. Below I have linked the video for convenience. 

[![CSS Position - Interactive JavaScript Demo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8C9W9wMSVzSi3Klyu09cvGw479QZaANJMw&usqp=CAU)](https://youtu.be/ACN2W8iOqrc)

Create a file named `css-position.html`. This file can be created by following along with the lecture video above on the CSS Position Property (it will not be considered plagiarism). Change the color scheme to your liking using hex color codes `#RRGGBB`. 

### Grading(20pts)
1. **(16pts)** - File `css-position.html` exists and functions as the interactive demo in the video does. 
2. **(4pts)** - File `css-position.html` has a unique color scheme using hex color codes. 
