"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var names = prompt("Enter your name ?");
console.log(names);
setTimeout(function () {
    var father = prompt("enter your father name:");
    console.log(father);
}, 4000);
var mother = prompt("enter your mother name:");
console.log(mother);
