// TODO: Include packages needed for this application
const questions = require("./questions");
const {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  askQuestions,
} = require("./ask-questions");
const generateMarkdown = require("./utilities/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// function askQuestions() {
//   inquirer.prompt(questions).then((answers) => {
//     console.log(answers);
//? Should I use the below syntax?
//?  fs.appendFile("test.md", JSON.stringify(answers), "utf-8", (err) => {
//?    if (err) console.log(err);
//?  })
//   });
// }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  console.log(questions);
  askQuestions();
}

// Function call to initialize app
init();
