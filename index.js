// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What is you project title?',
    'What is the description of your project?',
    'What are the installation instructions?',
    'What is the usage information?',
    'What are the Contribution guidelines?',
    'What are the test instructions?',
    'What licence do you want to choose?',
    'What is your GitHub username?',
    'What is your email address?'
];

// for(const question of questions)

//README file contents
function writeToFile() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: questions[0],
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'installation',
        message: questions[2],
      },
      {
        type: 'input',
        name: 'usageInformation',
        message: questions[3],
      },
      {
        type: 'input',
        name: 'contribution',
        message: questions[4],
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: questions[5],
      },
      {
        type: 'list',
        message: questions[6],
        name: 'Licences',
        choices: ['MIT', 'GPLv2', 'Apache', 'Other'],
      },
      {
        type: 'input',
        name: 'usernameGithub',
        message: questions[7],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[8],
      },
    ])

    .then((data) => {
        const ReadmeContent = generateReadme(data);

        fs.writeFile('README.MD', ReadmeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created Readme!')
        ); 
    })


const generateReadme = ({ name, description, installation, usageInformation, contribution, testInstructions, usernameGithub, Licences, email}) =>
`
# ${name}

${Licences} Licence

## Description
${description} 

## Table of Contents

-[Installation](#installation) <br />
-[Usage](#usage) <br />
-[Contributing](#contributing) <br />
-[Testing](#testing) <br />
-[Questions](#questions) <br />
-[Licence](#licence) <br />

## Installation
${installation}  

## Usage
${usageInformation}

## Contributing
${contribution}

## Testing
${testInstructions}

## Questions
For any additional questions, please reach out to me using one of the following mediums:

Github profile: https://github.com/${usernameGithub} <br />
Email: ${email}

## Licence
${Licences} Licence

Copyright (c) [2022]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

`

}


// Function to initialize app
function init() {
    writeToFile()
}


// Function call to initialize app
init();
