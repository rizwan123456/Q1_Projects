#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue.bold("\t PROJECT 6 WORD COUNTER\n"));
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: 'input',
        message: 'Enter your sentence to count the word:'
    }
]);
const count = answer.sentence.trim().split(" ");
console.log(`your word count is${count.length}`);
