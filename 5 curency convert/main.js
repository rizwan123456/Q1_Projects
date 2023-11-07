#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue.bold("\tPROJECT  5 CURRENCY CONVERT"));
let convertion = {
    'PKR': {
        'USD': 0.333,
        'GBP': 0.0037,
        'PKR': 1
    },
    'GBP': {
        'PKR': 271.79,
        'USD': 1.213,
        'GBP': 1
    },
    'USD': {
        'PKR': 300,
        'GBP': 0.83,
        'USD': 1,
    }
};
let answer = await inquirer.prompt([
    {
        type: "list",
        name: "currency",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Convertion Currency"
    },
    {
        type: "number",
        name: "from",
        message: "Enter Your Convertion Amount"
    },
]);
let { currency, to, from } = answer;
if (currency && to && from) {
    let result = convertion[currency][to] * from;
    console.log(`Your Convertion From ${currency} is ${to} is ${result}`);
}
else {
    console.log('Invalides Input');
}
