#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue.bold("\tPROJECT 4 tODO LIST"));
let todos = [];
let todos1 = [];
let loop = true;
while (loop) {
    let answer = await inquirer.prompt([
        {
            types: "input",
            name: "todo",
            message: "enter your Todo"
        },
    ]);
    let { todo } = answer;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("kindly enter your todo");
    }
    if (todos.length > 0) {
        console.log('your todo list is');
        todos.forEach(todo => {
            console.log(chalk.yellow.bold(todo));
        });
    }
    else {
        console.log('no todo found');
    }
    let answers = await inquirer.prompt([
        {
            type: "confirm",
            name: "retry",
            message: "you enter more todo ?",
            defult: false
        }
    ]);
    let { retry } = answers;
    loop = retry;
}
