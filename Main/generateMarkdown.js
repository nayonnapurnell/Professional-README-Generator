function renderLicenseBadge(license) {
  if(license === 'MIT License'){
    return `![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)`
  } else if (license === 'GNU GPLv3 License'){
    return `![GNU GPLv3 License](https://img.shields.io/badge/license-GNU-brightgreen)`
  } else if (license === 'Mozilla Public License 2.0'){
    return `![Mozilla Public License 2.0](https://img.shields.io/badge/license-MPL-brightgreen)`
  } else{
    return `![Apache License 2.0](https://img.shields.io/badge/license-APACHE%202.0-brightgreen)`
  }
}

function renderLicenseLink(license) {
  if(license === 'MIT License'){
    return `[MIT License](https://choosealicense.com/licenses/mit/)`
  } else if (license === 'GNU GPLv3 License'){
    return `[GNU GPLv3 License]( https://fsf.org/ )`
  } else if (license === 'Mozilla Public License 2.0'){
    return `[Mozilla Public License 2.0](http://mozilla.org/MPL/2.0/)`
  } else{
    return `[Apache License 2.0](http://www.apache.org/licenses/)`
  }
}

function renderLicenseSection(license) {
 if(license === 'MIT License'){
  return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
 } else if (license === 'GNU GPLv3 License'){
  return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
 } else if (license === 'Mozilla Public License 2.0'){
  return `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`
 } else {
  return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
 }
}

function generateMarkdown({ projectTitle, projectDescription, installation, usage, license, contributors}) {
  return `
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
  ${renderLicenseSection(license)}
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  
  ## Contributors
  This section should cover the basics and then link out to your CONTRIBUTING file if you have one.
  This is also where you should add a link to your code of conduct, if you have one. 
  You can make new contributors feel more comfortable, and assure them that any issues they have will be resolved. 
  A good code of conduct to use is the Contributor Covenant.(https://www.contributor-covenant.org/)
  ${contributors}
  
  ## Tests
  `
}

module.exports = generateMarkdown;
