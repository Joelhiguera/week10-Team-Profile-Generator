const fs = require('fs');
const inquirer = require('inquirer');
const figlet = require('figlet');
const path = require('path');
const manager = [];
const engineers = [];
const interns = [];
const generateHtml = require('./src/generateHtml')

function asciText() {
  figlet('Team Profile\n\n Generator', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    promptMenu();

  });
  }
  
  asciText()

  


function promptMenu() {
  function createManager() {
    inquirer.prompt ([
      {
        type: 'input',
        message: 'Please enter name',
        name: 'name',
      },
    ])
    
    .then(response => {
      console.log(response)
    });
  }

  function createEngineer(){

  }

  function createIntern(){

  }

  function createTeam() {
    inquirer.prompt ([
      {
        type: 'list',
        message: 'What team member would you like to add?',
        name: 'choice',
        choices: ["Engineer", "Intern", "Im done"]
      },
    ])
    
    .then(response => {
      if (response.choice === "Engineer") {
        createEngineer()
      } else if (response.choice === "Intern") {
        createIntern();
      } else {
        fs.writeFileSync(path.join(__dirname, "/dist/team.html"), generateHtml(manager, engineers, interns))
      }
    });
  }

   createManager()
  
}
