#! /usr/bin/env node 

import inquirer from "inquirer";

let paragraph: {
    Sentence: string
} = await inquirer.prompt([{
    name: "Sentence",
    message: "Enter Your Sentence To Count The Words: ",
    type: "input",
}]);    

let words = paragraph.Sentence.trim().split(" ");
console.log(words);
console.log(`This paragraph contains ${words.length} words.`)