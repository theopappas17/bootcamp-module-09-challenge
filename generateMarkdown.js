// Need the File System module built into Node.js
const fs = require("fs");

module.exports = (author, project, gitaddress, emailaddress, license) => {
  const md = `
 #README
 #THE ${project} PROJECT
    
##Table of Contents
    
    
###About
Hello. My name is ${author}. I have created the ${project} project. 
    
    
###Questions
If you have any questions about my project, you can reach me through github at ${gitaddress} or through e-mail at ${emailaddress}.
    
###Licenses
The following license is in force for this project: ${license}.
    `;
// TODO: Create a function to write README file
fs.writeToFile("GENERICREADME.md", md, (err) => {
  if (err) throw err;
  console.log("README generated.");
});

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
// }
