import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue.bold("\t PROJECT 9 QUIZ"))

let Quiz:{
    quiz:string
    quiz10:string
}=await inquirer.prompt([
    {
        type:"list",
        name:"quiz",
        choices:["start","No"],
        message:"You are ready to start for Quiz test : ",
   
    },
    {
        type:"list",
        name:"quiz1",
        choices:["a) HyperText Markup Language", "b) HyperText Machine Language", " c) HyperText Marking Language","d) HighText Marking Language"],
        message:" HTML stands for __________ ",
   
        when(Quiz){
            return Quiz.quiz=="start"
        },
        
    },
    {
        type:"list",
        name:"quiz2",
        choices:["var","let","Both A and B","NONE of the Above"],
        message:"Which of the following keywords is used to define a variable in Javascript  :  ",
        when(Quiz){
            return Quiz.quiz1=="a) HyperText Markup Language"
        },
    },
    {
        type:"list",
        name:"quiz3",
        choices:["Object,string,number","Bollean,string,Number","object,Array,Symbol"],
        message:"What are the three main 'simple types' in TypeScript?",
        when(Quiz){
            return Quiz.quiz2=="Both A and B"
        },
    },
 
    {
        type:"list",
        name:"quiz4",
        choices:[" a) .hl"," b) .hm"," c) .htl", "d) .html"],
        message:"35. Which of the following extension is used to save an HTML file? ",
        when(Quiz){
            return Quiz.quiz3=="Bollean,string,Number"
        },
    },
    {
        type:"list",
        name:"quiz5",
        choices:["  a) </doctype html> ","b) <doctype html> ","c) <doctype html!>"," d) <!doctype html>"],
        message:"4. What is the correct syntax of doctype in HTML5?",
        when(Quiz){
            return Quiz.quiz4==" d) .html"
        },
    },    
       {
        type:"list",
        name:"quiz6",
        choices:["a) head ","b) <h1>"," c) <h6>","d) heading"],
        message:"7. Which of the following tag is used for inserting the largest heading in HTML? ",
        when(Quiz){
            return Quiz.quiz5==" d) <!doctype html>"
        },
    },
    {
        type:"list",
        name:"quiz7",
        choices:[" a) CSS ','b) jQuery',' c) JavaScript"," d) PHP"],
        message: "15. Which element is used for or styling HTML5 layout?",
        when(Quiz){
            return Quiz.quiz6=="b) <h1>"
        },
    },
   
    {
        type:"list",
        name:"quiz8",
        choices:[" a) <u>content</u>',' b) <b>content</b> ','c) <br>content</br> ','d) <i>content</i> "],
        message:"16. Which HTML tag is used for making character appearance bold? ",
        when(Quiz){
            return Quiz.quiz8=="   a) CSS "
        },
    },
     {
        type:"list",
        name:"quiz9",
        choices:[" a) <img url=”htmllogo.jpg” /> ','b) <img alt=”htmllogo.jpg” /> ',' c) <img src=”htmllogo.jpg” />',' d) <img link=”htmllogo.jpg” />"],
        message:"17. Which HTML tag is used to insert an image?  ",
        when(Quiz){
            return Quiz.quiz7==" b) <b>content</b> "
        },
    },
    {
        type:"list",
        name:"quiz10",
        choices:["   a) # ',' b) !  ','c) /  "," d) \ "],
        message:"19. Which character is used to represent when a tag is closed in HTML?",
        when(Quiz){
            return Quiz.quiz9==" c) <img src=”htmllogo.jpg” />"
        },
    },
 
])
if(Quiz.quiz==="No"){
    console.log("ok Thanks Byy")
}if(Quiz.quiz10){
 console.log('You are inteligent')
}else{
   console.log(' you are a loser')
}