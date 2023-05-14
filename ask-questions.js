// TODO: Include packages needed for this file
const questions = require("./questions");
const inquirer = require("inquirer");

// TODO: Create a function to ask the questions
function askQuestions() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Answers:", answers);
    
  });
}

module.exports = askQuestions;
