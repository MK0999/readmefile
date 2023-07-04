// TODO: Include packages needed for this application


const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
    {
        type : 'input',
        message: 'Enter title of Project',
        name: 'title',
    },
    
    {
        type : 'list',
        message: 'select from table of contents',
        name: 'Table of contents',
        choices: ['Description', 'Installation', 'Usage', 'Contribution', 'Tests', 'Licences'],
    },

    {
        type : 'input',
        message: 'Enter description of Project',
        name: 'description',
    },
    {
        type : 'input',
        message: 'Enter installation guidelines of Project',
        name: 'installation',
    },
    {
        type : 'input',
        message: 'Enter Usage of Project',
        name: 'usage',
    },
    {
        type : 'input',
        message: 'Enter contribution to the Project',
        name: 'contribution',
    },
    {
        type : 'input',
        message: 'Enter tests of Project',
        name: 'tests',
    },
    {
        type : 'list',
        message: 'Select Licence for  Project',
        name:'license',
        choices: [{name:'MIT', value: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`}, 
        {name:'isc',nalue:`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`},
        {name:'IBM',value:`[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`},
        {name:'Mozilla',value:`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`}],
    },
    {
        type : 'input',
        message: 'Enter username',
        name: 'username',

    },
    
    {
        type : 'input',
        message: 'How to reachme',
        name: 'gmail',

    },
    {
        type : 'input',
        message: 'Please enter your github repository',
        name: 'github',

    },
   
   

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))
}


// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        writeToFile("README.md", data)
        const fileName =`${data.title.toLowerCase().split(' ').join('')}.json`;
    })
}

// Function call to initialize app
init();
