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
    .then((managerData) => {
      console.log(managerData)
      const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber)

      newTeamArray.push(manager)
    });
  };

  function addEmployee() {
    inquirer.prompt([
      {
        type: "list",
        message: "Please choose the employees role",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        message: "Please enter the employees name",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter the employees ID",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the employees email",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter the employees github username",
        name: "github",
      },
      {
        type: "input",
        message: "Please enter the intern's school",
        name: "school",
      },
    ])
    .then((employeeData) => {
      console.log(employeeData)
      let employee

      if (employeeData.role === "Engineer") {
        employee = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github)
      } else if (employeeData.role === "Intern") {
        employee = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school)
      }

      newTeamArray.push(employee)
    })
  }





























  

