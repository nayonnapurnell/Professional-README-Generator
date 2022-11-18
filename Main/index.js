const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./generateMarkdown.js');

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
{
  type: 'list',
  name: 'license',
  message: 'What license do you want for your project?',
  choices: ['MIT License', 'GNU GPLv3 License', 'Mozilla Public License 2.0', 'Apache License 2.0'],
  filter(val) {
    return val.toLowerCase();
  },
},
{
  type: 'input',
  name: 'github',
  message: 'What is the Github username you want to add to the README?',
},
{
  type: 'input',
  name: 'email',
  message: 'What is the email address to add to the README?',
},
{
  type: 'input',
  name: 'contributors',
  message: 'List the names of your contributors.',
},
  ]);
};

const init = () => {
  promptUser()
    .then((answers) => writeFile('generateMarkdown.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to generateMarkdown.md'))
    .catch((err) => console.error(err));
};

init();

