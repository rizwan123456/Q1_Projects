#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var inquirer_1 = require("inquirer");
var loop = true;
while (loop) {
    var sys = Math.floor(Math.random() * 10);
    console.log(chalk_1.default.blueBright('                Guess') + chalk_1.default.yellowBright('Game'));
    console.log(chalk_1.default.yellow("           Level 1         "));
    var answer = await inquirer_1.default.prompt([
        {
            choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            type: "list",
            name: "userguess",
            message: chalk_1.default.blue("                Enter your guess:b/w 1 to 10"),
        },
    ]);
    var userguess = answer.userguess;
    if (userguess === sys) {
        console.log(chalk_1.default.blueBright("\n\t\t\tguess no = ".concat(userguess, " game genrated no =").concat(sys)));
        console.log(chalk_1.default.blueBright("\n\t\t\tyou are win the level 1"));
    }
    else {
        console.log(chalk_1.default.redBright("\n                  guess no = ".concat(userguess, " game genrated no =").concat(sys, " ")));
        console.log(chalk_1.default.redBright("\n                  you are a loser"));
    }
    var answers = await inquirer_1.default.prompt([
        {
            type: "confirm",
            name: "retry",
            message: "please select to retry",
            default: false,
        }
    ]);
    loop = answers.retry;
}
// interface ansType2 {
//     userguess2:InputPrompt
// let answer2  = await inquirer.prompt([
//     {
//         message:chalk.blue("\n                   please select y to next level & n for ex"),
//         type:"input",
//         name:"userguess1"
//     }
// ])
// let {userguess1}=answer2;
// if(userguess1==="n"){
//     console.log(chalk.blueBright("                   Thanks to use my guess game"))
// }
// if(userguess1==="y"){
//     type ansType ={
//         userguess2:number
//     }
//     let sys1=Math.floor(Math.random()*10)
//     console.log(chalk.blueBright('                Guess') + chalk.yellowBright('Game'))
//     console.log(chalk.yellow(`           Level 2         `))
//    let answer : ansType = await inquirer.prompt([
//         {
//             message:chalk.blue("\n        Enter your guess:b/w 1 to 10"),
//             type:"number",
//             name:"userguess2"
//         } 
//     ]) 
//     if(answer.userguess2===sys1){
//      console.log (chalk.bold.yellow(`\n         guess no= ${answer.userguess2} game genrated no =${sys1}` ))
//         console.log(chalk.bold.yellow("\n          you are win the level 1"))
//      }
// else{
//         console.log (chalk.bold.red(`\n           guess no = ${answer.userguess2} game genrated no =${sys1}` ))
//         console.log(chalk.bold.redBright(`\n           you are a loser`))
//     }
// }
