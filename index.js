const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const valCheck = (value) => { if(value){return true} else {return 'Please enter a value.'}};
let path = './demo/demoREADME.md';

try {
    if (fs.existsSync(path)) {
        inquirer
        .prompt(
          {
            type: "list",
            message: "Overwrite existing demoREADME.md?",
            name: "overwrite",
            choices: ["yes", "no", "cancel"]
          })
        .then(function (response) {
          if (response.overwrite === "no") {
            path = './demo/demoREADME1.md';
            init();
          } 
          else if (response.overwrite === "yes") {
            init();
          };
        })
    } 
    else { init(); }
} 
catch (err) {
    console.error(err);
}

const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (w/o @)",
        name: 'git',
        default: 'MissNG-Git',
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
        message: "Give some usage examples of your project.",
        name: 'usage',
        validate: valCheck
    },

    {
        type: 'input',
        message: "Provide instructions on how to use your project.",
        name: 'instructions',
        validate: valCheck
    },

    {   
        type: 'list',
        message: "Choose a license for your project.",
        name: 'license',
        choices: [
            'GNU AGPLv3', 
            'GNU GPLv3', 
            'GNU LGPLv3', 
            'Mozilla Public License 2.0', 
            'Apache License 2.0', 
            'MIT License', 
            'Boost Software License 1.0', 
            'The Unlicense', 
            'N/A'
        ],
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

function writeToFile(path, data) {
    fs.writeFile(path, data, err => {
        if(err){
            console.log(err)
        }
        else{console.log('Your README has generated successfully!')}
    })
}

async function init() {
    await inquirer
    .prompt(questions)
    .then(response => {
        writeToFile(path, generateMarkdown(response));
        console.log("Thank you for using the MissNG README generator! :)");
    });    
}