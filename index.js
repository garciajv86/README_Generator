// TODO: Include packages needed for this application
//* const questions = require("./questions");
//* const inquirer = require("inquirer");
//* const fs = require("fs");
const askQuestions = require("./utilities/ask-questions");
const {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
} = require("./utilities/generateMarkdown");

// TODO: Create a function to initialize app
function init() {
  askQuestions();
}

//* Function call to initialize app
init();
