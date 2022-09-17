const fs = require('fs');
const inquirer = require('inquirer');
const figlet = require('figlet');
const path = require('path');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require('./src/generateHtml');
const newTeamArray = [];

// function asciText() {
//   figlet('Team Profile\n\n Generator', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
//     promptMenu();

//   });
//   }
  
//   asciText()

  function createManager() {
    inquirer.prompt([
      {
        type: "input",
        message: "Please enter the manager name",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter the manager's ID",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the manager's office number",
        name: "officeNumber",
      },
    ])
    .then((response) => {
      console.log(response)
      const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
    })
  }



























  

