#! /usr/bin/env node


import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue.bold("\tPROJECT 4 tODO LIST"))

let todos:string[]=[]
let todos1:string[]=[]
let loop=true;

while(loop){
let  answer:{
    todo:string,

}=await inquirer.prompt([

    {
        types:"input",
        name:"todo",
        message:"enter your Todo"
    },
  
   
])

let{todo}=answer
 
if(todo){
 todos.push(todo)
}else{
    console.log("kindly enter your todo")
}

if(todos.length>0){
console.log('your todo list is')
    todos.forEach(todo => {
        console.log(chalk.yellow.bold(todo))
    });
}else{
    console.log('no todo found')
}




 
let answers:{
    retry:boolean,
} = await inquirer.prompt([

    {
        type:"confirm",
        name:"retry",
        message:"you enter more todo ?",
        defult:false
     }


])
let{retry}=answers
loop=retry
}