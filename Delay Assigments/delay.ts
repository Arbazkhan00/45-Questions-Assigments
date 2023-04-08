import * as promptSync from 'prompt-sync';
const prompt=promptSync();
let names= prompt("Enter your name ?");
console.log(names);
setTimeout(()=>{
    let father=prompt("enter your father name:");
    console.log(father);
    
},4000)
let mother=prompt("enter your mother name:");
console.log(mother);