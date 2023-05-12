// TODO: Include packages needed for this application
const { questions } = require("./questions");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
//const questions = [];

function askQuestions() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  console.log(questions);
  askQuestions();
}

// Function call to initialize app
init();
