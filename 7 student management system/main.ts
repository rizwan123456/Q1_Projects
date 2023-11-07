import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.blue.bold("\tPROJECT 7 STUDENT MANAGEMENT SYSTEM"))
class Detail{
    yourstudentname:string
    Yourstudentclass:string
    yourstudentRollno:number
    Yourfees:string
    Yourstudentfeeamount:number
   constructor(gt:string,fr:string,sw:number,fdff:string,nt:number){
    this.yourstudentname =gt
    this.Yourstudentclass=fr
    this.yourstudentRollno=sw
    this.Yourfees=fdff
    this.Yourstudentfeeamount=nt
   }
}
   
let  answer:{
    name:string,
        student:string,
   rollno:number,
   fee:string,
   amount:number
}=await inquirer.prompt([

    {
        types:"input",
        name:"name",
        message:"Enter your student name: "
    },
    {
        name:"student",
        type:"list",
        choices:["1","2","3","4","5","6","7","8","9","10"],
        message:"Select Your student class",
    },
    {
        types:"number",
        name:"rollno",
        message:"Enter your student Rollno: "
    },
    {
        name:"fee",
        type:"list",
        choices:["Paid","NoPaid"],
        message:"Select Your fees",
    },
    {
        name:"amount",
        type:"list",
        choices:[1000,2000,5000,10000,20000],
        message:"Select Your student fee amount",
        when(answer) {
            return answer.fee == "Paid"
    }
}
])

let{name, student, rollno,fee, amount}=answer
   console.log(chalk.yellow.bold("your student management list is"));
   
 let ngr =new Detail(name, student, rollno,fee, amount)
 console.log(ngr)
