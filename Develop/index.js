// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const template = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username.'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.'
  },
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Please enter the name of your project.'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project.',
    choices: ['MIT', 'GNUv2.0', 'ISC', 'SIL1.1', 'None']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Run (npm i) or (npm install).',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Run (npm test) for testing',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Describe the usage of this repo.'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
