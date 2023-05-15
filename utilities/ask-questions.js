// TODO: Include packages needed for this file
const inquirer = require("inquirer");
const questions = require("./questions");
const generateMarkdown = require("./generateMarkdown");
const writeToFile = require("./writeToFile");

// TODO: Create a function to ask the questions
function askQuestions() {
  inquirer.prompt(questions).then((answers) => {
    let markDown = generateMarkdown(answers);
    writeToFile("./Output/SAMPLE-README.md", markDown);
  });
}

module.exports = askQuestions;