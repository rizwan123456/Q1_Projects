import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue.bold("\tPROJECT 8 ADVENTURE GAME"))
class Player{
   name: string
   fuel:number=100
   constructor(name:string){
    this.name=name
   }
  fuelDecrease(){
   let fuel=this.fuel-25;
   this.fuel= fuel
  }
  fuelIncrease(){
   this.fuel=100
  }

}
class Opponent{
    name: string
    fuel:number=100
    constructor(name:string){
     this.name=name
    }
    fuelDecrease(){
      let fuel=this.fuel-25;
      this.fuel= fuel
     }
 
 
 }
 let player=await inquirer.prompt({
    type:"input",
    name:"hello",
    message:"Enter your Name : "
 })

 const opponent=await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Select your opponent : ",
    choices:["Skeleton","Zombie","Assasian"]
 })
 let p1=new Player(player.hello);
 let O1=new Player(opponent.select);
 

console.log(`${chalk.bold.green(p1.name)}  VS   ${chalk.bold.red(O1.name)}`)
do{
   
   let ask =await inquirer.prompt({
     type:"list",
     name:"opt",
     message:"Select your opponent : ",
     choices:["Attack to win","Drink portion","Run to defence.."]
   })
  if(ask.opt=="Attack to win"){
    let num=Math.floor(Math.random()*2)
    if(num >0){
      p1.fuelDecrease()
      console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}\n`))
      console.log(chalk.bold.green(`${O1.name}fuel is ${O1.fuel}\n`))

      if(p1.fuel<= 0){
         console.log(chalk.bold.red(`you are loser better luck next time`))
         process.exit()
      }
    }
    if(num <= 0){
     O1.fuelDecrease()
     console.log(chalk.bold.red(`${O1.name}fuel is ${O1.fuel}\n`))
     console.log(chalk.bold.green(`${p1.name}fuel is ${p1.fuel}\n`))
      if(O1.fuel<= 0){
   console.log(chalk.bold.green.italic(`Congratulation you are Win  `))
   process.exit()
}
  
    }

}
  if(ask.opt=="Drink portion"){
     p1.fuelIncrease();
     console.log(chalk.bold.green.italic(`you Drink the portion your fuel is ${p1.fuel}`))
  }
  if(ask.opt=="Run to defence.."){
     console.log (chalk.bold.green('you are a losser better luck next time'))
     process.exit()
  }
  
  

  }


while(true)



