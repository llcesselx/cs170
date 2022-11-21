let userName = "Anonymous"

const emojisAsText = [
    ":dog:",
    ":cat:",
]
const emojisAsHtml = [
    '<img class="emoji" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/34cade57-6b95-4ec6-95db-65ebf8f6016b/dbkhtvz-6f6405de-82f2-41bf-8958-1e329ef90dc9.png"/>',
    '<img class="emoji" src="https://static.metafy.gg/uploads/store/collection_tag/6d0f7ef2-abe4-4a05-9159-b7355dce7de1/cutout/4e78443946555d39b1cced78aac77bbd.png"/>',
]

const ppAsText = [
    "/roll",
]
const ppAsHtml = [
    function() {
        const rollValue = Math.floor(Math.random() * 6) + 1;
        return `You rolled a ${rollValue}!`;
    },
]

function f() {
    console.log("JavaScript running...");
}
function enterName() {
    userName = document.getElementById("name").value;
    if (userName === "") {
        userName = "Anonymous";
    }
    document.cookie = "userName=" + userName + "; sameSite=Lax;";
    console.log('Username: ' + (userName));
    document.getElementById("nameForm").innerHTML = "Hello, " + (userName) +".";
}
//------------------------------------------------------------------------------------
// This code was gotten from W3 schools. I am trying to make a feature in the chat
// that lets you pick a name for using cookies. I still don't fully understand how
// this works or how cookies work in general but using it and watching it work is
// helping.
function getCookie(userName) {
    let name = userName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function getUserName() {
    let name = getCookie("userName");
    console.log("Username: " + name);
    return name;
}
function whoAmI() {
    let name = getCookie("userName");
    alert("Username: " + name);
}
//-----------------------------------------------------

function sendMessage() {
    const chatViewEl = document.getElementsByClassName("chat-view")[0];
    const messageBoxEl = document.getElementById("message-box");

    let user = getUserName();

    let newMessage = user + ": " + messageBoxEl.value + "\n"

    newMessage = cleanUpMessage(newMessage);
    newMessage = addEmojis(newMessage);
    newMessage = addPreprocessors(newMessage);

    messageBoxEl.value = "";
    messageBoxEl.focus();

    let chats = chatViewEl.innerHTML;
    chats+= newMessage;
    chatViewEl.innerHTML = chats;
    chatViewEl.scrollTop = chatViewEl.scrollHeight;
}
function cleanUpMessage(msg) {
    let foundIndex;

    foundIndex = msg.indexOf("&");
    while (foundIndex !== -1) {
        msg = msg.replace("&", "&amp;");
        foundIndex = msg.indexOf("&", foundIndex + 5)
    }

    foundIndex = msg.indexOf("<");
    while (foundIndex !== -1) {
        msg = msg.replace("<", "&lt;");
        foundIndex = msg.indexOf("&lt;", foundIndex + 4)
    }

    foundIndex = msg.indexOf("\n");
    while (foundIndex !== -1) {
        msg = msg.replace("\n", "<br/>");
        foundIndex = msg.indexOf("\n", foundIndex + 5)
    }
    return msg;
}
function addEmojis(msg) {
    let foundIndex;

    for (let i=0; i<emojisAsHtml.length; i++) {
        const searchFor = emojisAsText[i];
        const replaceWith = emojisAsHtml[i];

        foundIndex = msg.indexOf(searchFor);
        while (foundIndex != -1) {
            msg = msg.replace(searchFor, replaceWith);
            foundIndex = msg.indexOf(searchFor, foundIndex + replaceWith.length);
        }
    }
    return msg;
}

function addPreprocessors(msg) {
    let foundIndex;

    for (let i=0; i<ppAsText.length; i++) {
        const searchFor = ppAsText[i];
        const replaceWith = ppAsHtml[i]();

        foundIndex = msg.indexOf(searchFor);
        while (foundIndex != -1) {
            msg = msg.replace(searchFor, replaceWith);
            foundIndex = msg.indexOf(searchFor, foundIndex + replaceWith.length);
        }
    }
    return msg;
}
function detectEnter() {
    const ev = window.event;
    if (ev.keyCode == 13 && !ev.shiftKey) {
        ev.preventDefault();
        sendMessage();
    }
}
