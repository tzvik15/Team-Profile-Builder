const Employee = require("./lib/Employee");
const Intern    = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateHTML = require("./generateHTML");

const writeFileAsync = util.promisify(fs.writeFile);

const writeHTML = function(generateHTML){
    writeFileAsync("index.html", generateHTML);
    }

const team = [];

// async function init() {

//     try {
//         const teamMake = teamMaker();
        
//     }
//     catch (error) {
//         console.log("our error");
//     }

// }

//init();

const teamMaker = ()=>{
    console.log("Welcome. This app will ask you to input various information about a team, and create an HTML file that will showcase that information. Because we live in a hierarchical society, we will start with the team manager.")
    inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "managerName"
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your ID number?",
        name: "id"
      }
    ]).then(function(data){
        const teamManager = new Manager(data.managerName, data.id, data.email, data.officeNumber, "Manager")
          
        
        team.push(teamManager);
        return console.log(team);
    }).then(function(){
        inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to enter another team member?",
                name:"add",
                choices: ["yes", "no"]
            }

        ]).then(function(res){
            if (res.add=="yes") {
                console.log("cool, we will continue. Please enter information for the next team member.");
            inquirer
            .prompt([{
                type: "list",
                message:"Is this team member an engineer or an intern?",
                name:"job",
                choices: ["engineer", "intern"]
            }
        ]).then(function(res){
            if (res.job == "engineer"){
                newEngineer()
            } else newIntern()
        })
            
            
            
            
            
            
            
            }
                else return console.log("ok, thanks");
            })
        })
    




}

teamMaker()

const newEngineer = ()=>{
    inquirer.prompt([{
        type:"input",
        message:"What is your name?",
        name:"name"
    },
    {
        type:"input",
        message:"What is your ID number?",
        name:"id"
    },
    {
        type:"input",
        message:"What is your email address?",
        name:"email"
    },
    {
        type:"input",
        message:"What is your GitHub username?",
        name:"github"
    }
]).then(function(res){
    const member = new Engineer(res.name, res.id, res.email, "Engineer", res.github);
    team.push(member);
    return console.log(team);
})
}