#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let loop = true;
while (loop) {
    console.log(chalk.blue.bold("\tPROJECT" + chalk.red.bold(" 1 CAL") + chalk.yellow.bold("CULATOR")));
    let answer = await inquirer.prompt([
        {
            message: "Enter your no",
            type: "number",
            name: "num1"
        },
        {
            message: "Enter your second no",
            type: "number",
            name: "num2"
        },
        {
            choices: ["Add", "Subtract", "Multiply", "divide"],
            type: "list",
            name: "operator",
            message: "select operator",
        },
    ]);
    let { num1, num2, operator } = answer;
    if (answer.operator === "Add") {
        let sum = (answer.num1 + answer.num2);
        console.log(sum);
    }
    else if (answer.operator === "Subtract") {
        let sume = (answer.num1 - answer.num2);
        console.log(sume);
    }
    else if (answer.operator === "Multiply") {
        let sumw = (answer.num1 * answer.num2);
        console.log(sumw);
    }
    else if (answer.operator === "divide") {
        let sumr = (answer.num1 / answer.num2);
        console.log(sumr);
    }
    else {
        console.log("please select operator");
    }
    console.log(chalk.blue.bold("Your First No is") + chalk.yellow.bold(` (${answer.num1}) `) + chalk.blue.bold('Your operator is ') + chalk.yellow.bold(` (${answer.operator}) `) + chalk.blue.bold("Your Second No is") + chalk.yellow.bold(` (${answer.num2})`));
    let answers = await inquirer.prompt([
        {
            type: "confirm",
            name: "retry",
            message: "please select to retry",
            defult: false
        }
    ]);
    let { retry } = answers;
    loop = retry;
}
