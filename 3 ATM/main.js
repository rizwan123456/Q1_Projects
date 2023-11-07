#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue.bold("\tPROJECT") + chalk.yellow.bold("  3 A") + chalk.white.bold("TM"));
let answer = await inquirer.prompt([
    {
        type: "input",
        name: "UseerId",
        message: "kindly Enter your Id"
    },
    {
        type: "number",
        name: "Useerpin",
        message: "kindly Enter your pin"
    },
    {
        name: "acounttype",
        type: "list",
        choices: ["Cureent", "Saving"],
        message: "Select Your Accoun Type"
    },
    {
        name: "transactiontype",
        type: "list",
        choices: ["fastcash", "Withdrow"],
        message: "Select Your Transaction",
        when(answer) {
            return answer.acounttype;
        }
    },
    {
        name: "amount",
        type: "list",
        choices: [1000, 2000, 5000, 10000, 20000],
        message: "Select Your Withdrow",
        when(answer) {
            return answer.transactiontype == "fastcash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "kindly Enter your amount",
        when(answer) {
            return answer.transactiontype == "Withdrow";
        }
    }
]);
let balance = Math.floor(Math.random() * 100000);
console.log("your Current balance is :", balance);
let Enteredamount = answer.amount;
if (balance > Enteredamount) {
    let remaining = balance - Enteredamount;
    console.log("your remaning Balance is:", remaining);
}
else {
    console.log("Insuficent balance");
}
