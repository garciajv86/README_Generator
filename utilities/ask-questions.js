// TODO: Include packages needed for this file
const questions = require("./questions");
const generateMarkdown = require("./generateMarkdown");
const writeToFile = require("./writeToFile");
const inquirer = require("inquirer");

// TODO: Create a function to ask the questions
function askQuestions() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Answers:", answers);
    let markDown = generateMarkdown.generateMarkdown(answers);
    writeToFile('Sample.md', markDown);
  });
}

module.exports = askQuestions;
