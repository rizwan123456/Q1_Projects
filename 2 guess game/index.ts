#! /usr/bin/env node



import chalk from 'chalk';



import inquirer from 'inquirer';
import InputPrompt from 'inquirer/lib/prompts/input.js';
type ansType ={
    [x: string]: any;
    userguess:number
}
let loop=true

while(loop){
let sys=Math.floor(Math.random()*10)

console.log(chalk.blueBright('                Guess') + chalk.yellowBright('Game'))

console.log(chalk.yellow(`           Level 1         `))

const answer : ansType = await inquirer.prompt([
    {
        choices:[1,2,3,4,5,6,7,8,9,10],
        type:"list",
        name:"userguess",
        message:chalk.blue("                Enter your guess:b/w 1 to 10"),
    },
    
])


 const {userguess}=answer;
 
if(userguess===sys){
   console.log(chalk.blueBright(`\n\t\t\tguess no = ${userguess} game genrated no =${sys}`))
    console.log(chalk.blueBright("\n\t\t\tyou are win the level 1"))
}

else{
    console.log(chalk.redBright(`\n                  guess no = ${userguess} game genrated no =${sys} `))
    console.log(chalk.redBright(`\n                  you are a loser`))
}

const answers  = await inquirer.prompt([
    {
        type:"confirm",
        name:"retry",
        message:"please select to retry",
        default:false,
     }
])

loop=answers.retry
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
