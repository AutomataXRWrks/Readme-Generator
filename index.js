// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gMarkDown = require('./utils/generateMarkdown.js');
const readmeContent = {};
const markdownContent  = ``;


// TODO: Create an array of questions for user input
const questions = ['What is your user name?'];

function createPrompts(){
    inquirer.prompt([
        {
          type: 'input',
          message: 'What is the title of the README file',
          name: 'title',
        },
        {
          type: 'input',
          message: 'What is the description of the project',
          name: 'description',
        },
        {
          type: 'input',
          message: 'What are the installation instructions',
          name: 'installInstructions',
        },
        {
            type: 'input',
            message: 'What is usage information',
            name: 'usageInformation',
          },
          {
            type: 'input',
            message: 'What are the contribution guidelines',
            name: 'contributionGuidelines',
          },
          {
            type: 'input',
            message: 'What are the test instructions',
            name: 'tests',
          },
          {
            type: 'rawlist',
            message: 'Select a license',
            name: 'license',
            choices: ['Apache', 'MIT', 'Open Data Commons'],
          },
          {
            type: 'input',
            message: 'What is your github username',
            name: 'gitusername',
          },
          {
            type: 'input',
            message: 'What is your email address',
            name: 'email',
          },


      ])
      .then((response) => saveData(response));
      //writeToFile("readme.me", readmeContent); 
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) =>
err ? console.error(err) : console.log('Success!')
);
}

function saveData(data){
  readmeContent.title = data.title;
  readmeContent.description = data.description;  
  readmeContent.installInstructions = data.installInstructions;  
  readmeContent.usageInformation = data.usageInformation;  
  readmeContent.contributionGuidelines = data.contributionGuidelines;
  readmeContent.tests = data.tests;    
  readmeContent.license = data.license;
  readmeContent.gitusername = data.gitusername;    
  readmeContent.email = data.email;         
  //console.log(readmeContent);
  writeToFile("README.md", gMarkDown.generateMarkdown(readmeContent));
}

// TODO: Create a function to initialize app
function init() {
    createPrompts();   
}

// Function call to initialize app
init();


 
