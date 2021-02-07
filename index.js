// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'Username'
        // validate, link to GH profile
        validate: (value) => { if(value){return true} else {return 'I need a value to continue.'}}
    },

    {
        type: 'input',
        message: "What is your email address?",
        name: 'Email'
        validate: (value) => { if(value){return true} else {return 'I need a value to continue.'}}
    },

    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'Title',
        validate: (value) => { if(value){return true} else {return 'I need a value to continue.'}}
    },

    {
        type: 'input',
        message: "Write a description for your project.",
        name: 'Description',
        validate: (value) => { if(value){return true} else {return 'I need a value to continue.'}}
    },

    {
        type: 'input',
        message: "Create a Table of Contents for your README.",
        name: 'Contents',
        validate: (value) => { if(value){return true} else {return 'I need a value to continue.'}}

    },

    {
        type: 'input',
        message: "Describe the steps required to install your project for the Installation section.",
        name: "Installation",
        validate: (value) => { if(value){return true} else {return 'I need a value to continue.'}}
    },

    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'Usage_&_Instructions',
        validate: (value) => { if(value){return true} else {return 'I need a value to continue.'}}
    },

    {   
        type: 'list',
        message: "Choose a license for your project.",
        name: 'License',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'N/A'],
        validate: (value) => { if(value){return true} else {return 'I need a value to continue.'}}
    },

    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'Contributions'
    },

    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'Testing'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
async function init() {
    await inquirer
    .prompt(questions)
    .then(response => {
        console.log(response);
        console.log("Thank you for using the MissNG README generator! :)");
    });
}

// Function call to initialize app
init();