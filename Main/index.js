// TODO: Include packages needed for this application
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
      name: 'projectSummary',
      message: 'What is your Project Summary?',
    },
    {
      type: 'input',
      name: 'builtWith',
      message: 'What did you build your project with?',
    },
    {
      type: 'input',
      name: 'prerequisites',
      message: 'What do you need before installing the software?',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
    {
        type: 'input',
        name: 'projectLink',
        message: 'What is the link to your project?',
      },
  ])

// TODO: Create a function to write README file
const writeToFile = ({fileName, projectTitle, projectSummary,builtWith, prerequisites,data}) => 
`
# ${projectTitle}
A short description about the project and/or client.

## Project Summary
${projectSummary}

## Built With
This section should list any major frameworks/libraries used to bootstrap your project. 
Leave any add-ons/plugins for the acknowledgements section. 
${builtWith}

## Getting Started
This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

## Prerequisites
The things you need before installing the software.
${prerequisites}

## Installation
A step by step guide that will tell you how to get the development environment up and running.


`;

// TODO: Create a function to initialize app
function init() {
    console.log("Hello world!");
}

// Function call to initialize app
init();
