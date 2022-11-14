const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;







// // // TODO: Create a function to write README file
// fs.writeToFile = ("genearateMarkdown.js", projectTitle, projectDescription,table_of_contents, github, email, (err) => {
//   if(err)
//   console.log(err);
//   else {
//     `
// # Project Title: ${projectTitle}

// ## Project Description
// ${projectDescription}

// ## Table of Contents
// This section should list any major frameworks/libraries used to bootstrap your project. 
// Leave any add-ons/plugins for the acknowledgements section. 
// ${table_of_contents}

// ## Getting Started
// This is an example of how you may give instructions on setting up your project locally.
// To get a local copy up and running follow these simple example steps.

// ## Installation
// A step by step guide that will tell you how to get the development environment up and running.

// ## Usage

// ## License

// ## Contributing

// ## Tests

// ## Questions
// ${github}
// ${email}
// `
//   }
// });


// {
//   type: 'input',
//   name: 'table_of_contents',
//   message: 'What is your Table of Contents?',
// },
// {
//   type: 'input',
//   name: 'installation',
//   message: 'What do you need before installing the software?',
// },
// {
//     type: 'input',
//     name: 'usage',
//     message: 'What do you need before installing the software?',
//   },
// {
//     type: 'input',
//     name: 'license',
//     message: 'What do you need before installing the software?',
// },
// {
//     type: 'input',
//     name: 'contributing',
//     message: 'What do you need before installing the software?',
// },
// {
//     type: 'input',
//     name: 'tests',
//     message: 'What do you need before installing the software?',
// },
// {
//     type: 'input',
//     name: 'github',
//     message: 'What is your github username?',
// },
// {
//     type: 'input',
//     name: 'email',
//     message: 'What is your email?',
// },
// ])
// }

const promptUser = () => {
  return inquirer.prompt([
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
  name: 'installation',
  message: 'List out the installation instructions if you have any.',
},
{
  type: 'input',
  name: 'usage',
  message: 'List out any useful links to prevent your users from getting stuck.',
},
  ]);
};

const generateMarkdown = ({ projectTitle, projectDescription, installation, usage }) =>
`
# Project Title: ${projectTitle}

## Project Description
${projectDescription}

## Setup/Installation Requirements
This is a great place to list setup instructions in a simple easy-to-understand format.
Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. 
Do I need to run a server? How should I set up my databases? Is there other code this application depends on? 
${installation}

## Usage
Your usage documentation is probably the most important part of your README, without it very few people are going to trawl through your code to get it working.
Firstly we need to mention how to get hold of the code, whether it’s by cloning the repo or installing through a package manager. 
Don’t forget to link out to anything useful, to prevent anyone from getting stuck.
${usage}

## License

## Contributors
This section should cover the basics and then link out to your CONTRIBUTING file if you have one.
This is also where you should add a link to your code of conduct, if you have one. 
You can make new contributors feel more comfortable, and assure them that any issues they have will be resolved. 
A good code of conduct to use is the Contributor Covenant.(https://www.contributor-covenant.org/)

## Tests

`

const init = () => {
  promptUser()
    .then((answers) => writeFile('generateMarkdown.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to generateMarkdown.md'))
    .catch((err) => console.error(err));
};

init();

