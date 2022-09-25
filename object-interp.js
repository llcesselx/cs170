#!/usr/bin/env node

let data = {
    firstName: "L",
    "last-name": "T",
    email_address: "lt@syc.ind.ed",
};

console.log(`My name is ${data.firstName} ${data["last-name"]}, and my email address is ${data["email_address"]}.\n\n${data.email_address}`);
