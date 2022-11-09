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
Now the idea here is to have an image of a die roll result in the main area of the page, just below the `<h1>` heading. We can call this the **stage** `<div>`, and as such, we cna set the `id` attribute to `"stage"`. Under this stage `<div>` we will have **controls** `<div>` that contain controls to manipulate the items on the stage. In our case that will just be a button to click that will simulate the random rolling of one die. Then using that randomly selected value we will select the appropriate image to display. Select one of the die faces to display by default and use the path that image as the value of the `src` attribute on the `<img>` tag. Remember the `<img>` tag is a **void element**, so it can have no children, and therefor doesn't require a closing tag. You may self-close the opening tag if you wish (I normally do, but it isn't required). We are going to need to access this element later to chage the `src` attribute to a different image, so make sure you set an `idd` attribute on it as well.
