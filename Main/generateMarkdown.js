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

function generateMarkdown({ projectTitle, projectDescription, installation, usage, license, contributors, github, email}) {
  return `
  # Project Title: ${projectTitle}
 
  ## Project Description
  ------
  ${projectDescription}

  ## Table of Contents
  ------  
  - [Setup](#setup)
  - [Usage](#usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Questions](#Questions)
  - [Tests](#Tests)
  

  ## Setup 
  ------

  The below information is for the lists of setup instructions:\
  ${installation}
  

  
  ## Usage 
  ------

  The section below is for code samples so that you can copy and paste the snippets into your project:\
  ${usage}
  


  ## License
  ------

  ${renderLicenseSection(license)}\
  ${renderLicenseBadge(license)}\
  ${renderLicenseLink(license)}\
  

  
  ## Contributors
  ------

  Below are the names of all the people who gave something to the project and made it what it is today:<br>
  ${contributors}


  
  ## Questions
  ------
  
  If you have addtional questions, feel free to reach me on Github or via email.
  * Github Profile:  https://github.com/${github} 
  * Email: ${email}
  

 
  ## Tests
  ------
  `
}

module.exports = generateMarkdown;
