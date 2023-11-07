import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\t project 10 count down timer"))
differenceInSeconds
let answer=await inquirer.prompt({
    type:"number",
    name:"timer",
    message:"Please enter the count down in second",
    validate:(input)=>{
        if(isNaN(input)){
            return 'please enter valid number' +process.exit()
        
        }else if(input>60){
            return 'please Enter number in 60 '
            +process.exit()
        }else{
            return true;
        }
    }
})
let input=answer.timer;
function count(val:number) {
    let down=new Date().setSeconds(new Date().getSeconds()+val)
    let date=new Date(down)
    setInterval(()=>{
        let cureenttime=new Date()
        let timediff=differenceInSeconds(date,cureenttime  )
        if (timediff<=0) {
            console.log('Time has Expired')
            process.exit()
        }
        let min=Math.floor((timediff%(3600*24))/3600)
        let sec=Math.floor(timediff%60)
        console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`);
        
    },1000)
}

count(input)
