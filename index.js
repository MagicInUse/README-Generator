// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateLicense = require('./utils/generateLicense.js');


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, (err) =>
        err ? console.error(err) : console.log('README.md generation Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for your project.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guidelines for your project.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test instructions for your project.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project.',
            choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])
        .then((data) => {
            const licenseSection = generateLicense(data.license);
            const markdown = `
# ${data.title}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)
- [License](#license)
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Test
${data.test}
## License
${licenseSection}
## Questions
If you have any questions, please feel free to reach out to me at [${data.email}](mailto:${data.email}). You can also find me on GitHub: [${data.github}](${data.github}).`;
            writeToFile(markdown);
        });
}

// Function call to initialize app
init();