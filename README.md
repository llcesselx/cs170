# Create a Website

## Background Information
### What is an Index Page?
An `index.html` page is generally considered to be the table of contents for a directory of documents. The highest level `index.html` page in your directory structure is your site's homepage. for this lab, the path to this homepage on the CS Server will be:
```
/u1/class/cs170XY/public_html/site/index.html
```
which will be available on the Internet via the URL:
```
https://cs.indstate.edu/~cs170XY/site/index.html
```
Now let's consider a scenario in which the browser makes a URL request to retrieve a document from the CS Server. The CS-Server is running software called Apache, which is a web-service, to respond to web requests. These web requests are usually HTTP GET requests, which essentially amounts to document retrieval from the CS Server to the Browser.

Normally a web address URL specifies the domain name of the server followed by the path to the document it is requesting.
```
https://cs.indstate.edu/~lmay1/index.html
```
However, sometimes URL will not specify a file, and instead, only a directory.
```
https://cs.indstate.edu/~lmay1
```
In this case, the Apache web-service will automatically look in that directory for a file named `index.html` and serve that document to satisfy the request. So the above 2 URLs will retrieve the same document if Apache is the web-service running on the server. This is why both of the following URLs will work from a browser to access your site homepage:
```
https://cs.indstate.edu/~cs170XY/site
https://cs.indstate.edu/~cs170XY/site/index.html
```
The document retrieved in both of these instances is the file located on the CS Server in:
```
/u1/class/cs170XY/public_html/site/index.html
```
So we see that the internet facing URL up to this point:
```
https://cs.indstate.edu/~cs170XY/
```
is equivalent to the internal CS Server path:
```
/u1/class/cs170XY/public_html/
```
and then anything that follows in the URL is just the exact same as directory structure on the CS Server from that point.

So in conclusion, if we have the following web URL:
```
https://cs.indstate.edu/~cs170XY/dogs/breeds/golden-retrievers.html
```
this would be equivalent to the internal CS Server path to the following document:
```
/u1/class/cs170XY/public_html/dogs/breeds/golden-retrievers.html
```

## 1) Site Map (`index.html` and all other files)
For this assignment you will be creating 7 HTML pages and 1 CSS file. You may also use a separate JavaScript file or files if you like. Remember, all of these files and directories will be turned-in in `~/public_html/site` on the CS server.
```
.
├── about-me.html
├── index.html
├── main.js
├── main.css
├── notes
│   ├── css.html
│   ├── html.html
│   ├── index.html
│   └── javascript.html
└── projects.html
```

Create the `notes/` directory, and then create each of the above files, each with the basic HTML document structure. For HTML file each include:
1. Title tag (`<title>`) specific to that page within the `<head>`.
2. Heading tag (`<h1>`, `<h2>`, etc.) withing the (`<body>`) specific to that page.
3. Content section of the page, centered horizontally, that scrolls as content is added to it.
4. Each of these 7 pages will display a navigation menu with links to the following pages (even if the link is to the current page itself):
    * Home - linking to `index.html`
    * About - linking to `about-me.html`
    * Projects - linking to `projects.html`
    * Notes - linking to `notes/index.html`

The navigation menu should look consistent across all the pages, but you may decide it's location and what it looks like.

**Important Note** - Make sure all files that you place in `public_html` have the `+r` permissions set on the **Others** entity, so that Apache can read the data to host it onto the web. Similarly, make sure all your directories have `+rx` set for the **Others** entity.
```
chmod -R +r ~/public_html/*
```

## 2) Index Pages (`index.html`, `notes/index.html`)
The homepage for your entire site should be placed in your `~/public_html/site` folder.

Similarly there is a `notes/index.html` accessible from the following URLs (if placed in your `~/public_html/site` directory):
```
https://cs.indstate.edu/~cs170XY/site/notes/
https://cs.indstate.edu/~cs170XY/site/notes/index.html
```
The idea of an index page is a common theme in web programming, so be sure you understand it. An ***index page*** is called "index" because the idea is for it to be a way for users to find and access other pages in that directory (sort of like the index of a text book). But if we make the page stylish with CSS, we can make it feel more like a table of contents (which are usually more readable). If we do even more styling we will have something that looks more like a website home page.

There are 2 index pages in this assignment:

1. `index.html`, which is meant to be the table of contents for the whole site.
2. `notes/index.html`, which is meant to be the table of contents for the pages in the `notes` directory.

In the body of your homepage (`index.html`) you should showcase the main areas of your website:

1. `about-me.html`
2. `projects.html`
3. `notes/index.html`

### An Optional and Acceptable Example
So in the main content area of your homepage, display sub-headings for each of these main areas of your website, with a title (maybe `<h3>`?), image, description, and link (separate from the navigation menu links) to each. So some example code for one of these might look like this:
```
<div class="section">
    <h3>
        <a href="about-me.html">
            About Me
        </a>
    </h3>
    <a href="about-me.html">
        <img class="section-thumbnail" src="picture-of-me.png"/>
    </a>
    <p class="section-description">
        Discover more about the wonderful author of this site! In this section you can learn about my favorite activities and see links for some of my favorite places on the web! I hope you enjoy your experience on this site!  Blah blah blah blah blah blah blah blah blah blah blah blah blah... (don't use the &quot;blah&quot; stuff).
    </p>
</div>
<!-- Other Sections -->
```
With the CSS: 
```
.section {
    /* outline: solid 1px magenta; */
    padding: 5px 20px 5px 20px;
    height: 175px;
    width: 80%;
    margin: 10px auto 10px auto;
}
.section-thumbnail {
    width: 100px;
    float: left;
    padding: 5px 20px 5px 5px;
}
.section-description {
    font-family: cursive;
}
```
Similarly, there are three pages withing the `notes` directory that `notes/index.html` should present or showcase in a similar fashion:

1. `notes/javascript.html`
2. `notes/html.html`
3. `notes/css.html`

You do not have to use my example code, but each index page should, in the body of the page, present each of the specified links with a sub-heading, image, description, and of course a link.

## 3) About Me (`about-me.html`)
Create a page about you. This page should have a description, a picture, and at least 2 working web links to web pages you like to visit with appropriate descriptions for each. If you do not want to share about yourself (public Internet page), you do not need to have the description or image be about you, but instead it can be about a person you admire.

## 4) Projects (`projects.html`)
Create a page that has links to your projects. You should have 3 projects that we have done so far:

1. `roll.html`
2. `pick.html`
3. `css-position.html`

On this page you should find a stylish way to present at least links to these 3 projects, with simple descriptions. You will likely want to put these files in a directory called `~/public_html/projects` with the proper permissions (`+r` for files and `+rx` for directories). Then you will be able to use an absolute URL to reference them. This will allow you to access these links no matter where your website files are located (local desktop or CS Server).
```
<a href="https://cs.indstate.edu/~cs170XY/site/projects/roll.html">Roll some Dice!</a>
```
Do not worry if those assignments of yours were not completed and do not function properly. Just make sure the link to them does work (actually takes you to those pages, even if they are not functioning).

## 5) Notes Pages (`javascript.html`, `html.html`, `css.html`)
For each of these notes pages in your `notes/` directory, create page content that uses either the ordered list (`<ol>`) or unordered list (`<ul>`) tags and the associated list item (`<li>`) tags to list out 3 interesting things about each subject that you have learned. For the HTML notes, each could be an interesting HTML element and how it works. For CSS, each could be a CSS property you find interesting (or just notes on how selectors work. For JavaScript, this could be notes on some built-in functions and how they work. Anything reasonable works here, because the point is not really the quality of your notes, but that you can construct HTML pages.

### HTML Entities
Be sure you understand how to render special HTML characters called **HTML Entities** (`<`, `>`, `&`, etc.). It isn't obvious how we can do this because those characters are actually part of the HTML language, so if you specify a less than sign (`<`) in the code, how can the browser know if you are creating HTML or if you actually want to display a less than symbol? The answer is HTML Entities. To display special characters like these there is a special HTML syntax with character codes to designate several of these symbols and more.
|Character|HTML Syntax|
|---|---|
|`<`|`&lt;`|
|`>`|`&gt;`|
|`&`|`&amp;`|
|` `|`&nbsp;`|

The `&nbsp;` entity stands for non-breaking space, and it is useful when you specifically need multiple spaces between characters instead of just one. By default HTML collapses all whitespace into one single character, which is usually nice, but if you want more than one space, you will have to use a `&nbsp`;. Here is an [extensive list of the most common HTML Entities.](https://html.spec.whatwg.org/multipage/named-characters.html)

### Optional `<pre><code>` Formatting Technique

If you would like to play around with displaying code in HTML, look into the `<pre>` and `<code>` tags. This is not required, but it is how you can display better looking code blocks in HTML. There is an example below, but notice that you cannot format the HTML with pleasing whitespace because of the `<pre>` tag. Here is a link with more information on [`<pre>` and `<code>` tags.](https://www.sitepoint.com/everything-need-know-html-pre-element/)
```
<pre><code>console.log("Running JavaScript...");
function foo(s) {
    return `Foo ${s}!`;
}
foo()</code></pre>
```
