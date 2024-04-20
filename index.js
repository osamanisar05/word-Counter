#! /usr/bin/env node
import inquirer from "inquirer"; //inquirer: command line interface for node js 
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        message: "Enter your sentence to count words",
        type: "input"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words); // print arrays of words
console.log(`your sentence word count is ${words.length}`); // print word count of your sentence
