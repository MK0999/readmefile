 // packages needed for this application


const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
 //Created an array of questions for user input

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
        choices: [{name:'MIT', value: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s.As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.
          Unlike copyleft software licenses, the MIT License also permits reuse within proprietary software, provided that all copies of the software or its substantial portions include a copy of the terms of the MIT License and also a copyright notice.`}, 
        {name:'isc',value:`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)The ISC license is a permissive free software license published by the Internet Software Consortium, now called Internet Systems Consortium (ISC). It is functionally equivalent to the simplified BSD and MIT licenses, but without language deemed unnecessary following the Berne Convention. Originally used for ISC software such as BIND and dig, it has become the preferred license for contributions to OpenBSD and the default license for npm packages. The ISC license is also used for Linux wireless drivers contributed by Qualcomm Atheros.`},
        {name:'IBM',value:`[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)IBM has one of the largest and most diversified software portfolios in the world and we continue to build it out by developing and adding innovative technologies that matter for our clients. IBM does not “sell” its software but grants clients certain rights to use its technology for a fee, subject to terms set out in software license agreements. These terms describe the charging mechanism, duration, permitted uses and other aspects of the relationship.`},
        {name:'Mozilla',value:`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)The MPL license is developed and maintained by Mozilla, which seeks to balance the concerns of both open-source and proprietary developers; it is distinguished from others as a middle ground between the permissive software BSD-style licenses and the General Public License.`}],
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
        message: 'Please enter your github name',
        name: 'github',

    },
   
   

]

//Created a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))
}


// Created a function to initialize app
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
