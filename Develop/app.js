const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateHTML = require("./generateHTML");

const writeFileAsync = util.promisify(fs.writeFile);

const writeHTML = function(generateHTML) {
  writeFileAsync("./output/team.html", generateHTML);
};

const managerArr = [];
const enginArr=[];
const internArr = [];

//the main function of the app (and the one that triggers on app launch), this function collects the data on the office manager (the first member to be inputed), it then creates a new Manager instance with the collected information, pushes that instance to the team array, and fires the more function.

const teamMaker = () => {
  console.log(
    "Welcome. This app will ask you to input various information about a team, and create an HTML file that will showcase that information. Because we live in a hierarchical society, we will start with the team manager."
  );
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name"
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
    ])
    .then(function(data) {
      const teamManager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber,
        "Manager"
      );
      managerArr.push(teamManager);
    })
    .then(function() {
      more();
    });
};

//a function that collects information for inputed interns, creates a new Intern instance, and adds them to the team array. Then fires the "more" callback function that allows adding more users.

const newIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this member's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is this member's ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is this member's email address?",
        name: "email"
      },
      {
        type: "input",
        message: "Which school did this member go to?",
        name: "school"
      }
    ])
    .then(function(res) {
      const member = new Intern(
        res.name,
        res.id,
        res.email,
        res.school,
        "Intern"
      );
      internArr.push(member);
    })
    .then(function() {
      more();
    });
};

//a function that collects information for inputed engineers, creates a new Engineer instance, and adds them to the team array. Then fires the "more" callback function that allows adding more users.

const newEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this member's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is this member's ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is this member's email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is this member's GitHub username?",
        name: "github"
      }
    ])
    .then(function(res) {
      const member = new Engineer(
        res.name,
        res.id,
        res.email,
        res.github,
        "Engineer"
      );
      enginArr.push(member);
    })
    .then(function() {
      more();
    });
};

//a function that fires once all information has been collected. Currently only prints team array, will fire the generateHTML function eventually.

async function done(managerArr, enginArr, internArr)  {
  
  console.log(
    "Thank you for adding all your team members. With use of magic, we will now create a webpage displaying this info in shining colors! You will find the new HTML file in the 'output' folder. How exciting."
  ); 
  
    generateHTML(managerArr, enginArr, internArr);
   writeHTML(generateHTML(managerArr, enginArr, internArr));
};

//a function that asks the user if they would like to input an additional team member. Depending on response, either fires the addAnother function, or the done function

const more = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to enter another team member?",
        name: "add",
        choices: ["yes", "no"]
      }
    ])
    .then(function(res) {
      if (res.add == "yes") {
        addAnother();
      } else done(managerArr, enginArr, internArr);
        
    })
};

//a function that determines if the next team member to be added is an intern or an engineer, that triggers the appropriate "new" function

const addAnother = () => {
  console.log(
    "How fun. Please enter information for the next team member."
  );
  inquirer
    .prompt([
      {
        type: "list",
        message: "Is this team member an engineer or an intern?",
        name: "job",
        choices: ["engineer", "intern"]
      }
    ])
    .then(function(res) {
      if (res.job == "engineer") {
        newEngineer();
      } else newIntern();
    });
};

teamMaker();
