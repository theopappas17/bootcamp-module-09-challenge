// Need the File System module built into Node.js
const fs = require("fs");

module.exports = ({author, project, gitaddress, emailaddress, license}) => {
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
fs.writeFile("GENERICREADME.md", md, (err) => {
  if (err) throw err;
  console.log("README generated.");
});
}