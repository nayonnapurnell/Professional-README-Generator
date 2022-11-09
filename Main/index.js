// Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs');

// An array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'What is your Project Description?',
    },
    {
      type: 'input',
      name: 'table_of_contents',
      message: 'What is your Table of Contents?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What do you need before installing the software?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What do you need before installing the software?',
      },
    {
        type: 'input',
        name: 'license',
        message: 'What do you need before installing the software?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What do you need before installing the software?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What do you need before installing the software?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
  ])

// TODO: Create a function to write README file
const writeToFile = ({fileName, projectTitle, projectDescription,table_of_contents, github, email, prerequisites,data}) => 
`
# Project Title: ${projectTitle}

## Project Description
${projectDescription}

## Table of Contents
This section should list any major frameworks/libraries used to bootstrap your project. 
Leave any add-ons/plugins for the acknowledgements section. 
${table_of_contents}

## Getting Started
This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

## Installation
A step by step guide that will tell you how to get the development environment up and running.

## Usage

## License

## Contributing

## Tests

## Questions
${github}
${email}
`;

// TODO: Create a function to initialize app
function init() {
    console.log("Hello world!");
}

// Function call to initialize app
init();
