// TODO: Include packages needed for this application

//Need Inquirer module that is part of npm project
const inquirer = require("inquirer");

//Need my generateMarkdown.js
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
// Started writing questions using the syntax required by Inquirer
inquirer
  .prompt([
    {
      type: "input",
      message: "Who is the author(s) of this project?",
      name: "author",
    },
  ])
  .then((data) => {
    writeToFile(data);
  });

// TODO: Create a function to write README file
function writeToFile("README.md", md, () => {
  console.log(data);
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
