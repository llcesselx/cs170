#!/usr/bin/env node

function addUnique(arr, value){
    if (arr.includes(value)){
        return false;
    }
    arr.push(value);
}

let pets = [];
console.log(addUnique(pets, "cats"));
console.log(addUnique(pets, "dogs"));
console.log(addUnique(pets, "birds"));
console.log(addUnique(pets, "cats"));

console.log(pets);