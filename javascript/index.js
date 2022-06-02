// TODO: Include packages needed for this application

// Need the File System module built into Node.js
const fs = require('fs');

//Need Inquirer module that is part of npm project
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// Started writing questions using the syntax required by Inquirer
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Who is the author(s) of this project?',
      name: 'author',
    },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
