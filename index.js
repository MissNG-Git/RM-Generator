// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const valCheck = (value) => { if(value){return true} else {return 'Please enter a value.'}};


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (w/o @)",
        name: 'git',
        default: 'MissNG-Git',
        // validate, link to GH profile
        validate: valCheck
    },

    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        default: 'test@nonymous.com',
        validate: valCheck
    },

    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: valCheck
    },

    {
        type: 'input',
        message: "Write a short description for your project.",
        name: 'description',
        validate: valCheck
    },

    {
        type: 'input',
        message: "What steps are required to install your project?",
        name: "installation",
        validate: valCheck
    },

    {
        type: 'input',
        message: "Provide instructions and usage examples of your project.",
        name: 'usage',
        validate: valCheck
    },

    {   
        type: 'list',
        message: "Choose a license for your project.",
        name: 'license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'N/A'],
        validate: valCheck
    },

    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributions',
        default: 'N/A'
    },

    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'testing',
        default: 'N/A'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./demo/'+fileName, data, err => {
        if(err){
            console.log(err)
        }
        else{console.log('Your README has generated successfully!')}
    })
}

// TODO: Create a function to initialize app
async function init() {
    await inquirer
    .prompt(questions)
    .then(response => {
        // Write markdown to file
        writeToFile('demoREADME.md', generateMarkdown(response));
        console.log("Thank you for using the MissNG README generator! :)");
    });    
}

// Function call to initialize app
init();