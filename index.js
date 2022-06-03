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
    {
        type: "input",
        message: "What is the name of this project?",
        name: "project",
      },
      {
        type: "input",
        message: "What is your github address?",
        name: "gitaddress",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "emailaddress",
      },
      {
        type: "input",
        name: "license",
        message: "What license shall you use?",
      },
  ])
  .then((data) => {
    writeToFile(data);
  });

// TODO: Create a function to write README file
fs.writeToFile("GENERICREADME.md", md, (err) => {
    if (err) throw err;
  console.log("README generated.")
})

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
