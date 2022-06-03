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
      name: "author",
      message: "Who is the author(s) of this project?",
    },
    {
      type: "input",
      name: "project",
      message: "What is the name of this project?",
    },
    {
      type: "input",
      name: "gitaddress",
      message: "What is your github address?",
    },
    {
      type: "input",
      name: "emailaddress",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "license",
      message: "What license shall you use?",
    },
  ])
  .then((answers) => {
    generateMarkdown(answers);
  });
