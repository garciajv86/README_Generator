// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the name of your project?",
    default: "README GENERATOR",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project:",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Please provide instructions on how to use the package or application:",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use for your project?",
    choices: ["MIT", "Apache-2.0", "GPL-3.0"],
  },
  {
    type: "input", //? Maybe use the editor type
    name: "contributingContent",
    message: "Enter the content for the contributing section:",
  },
  {
    type: "input", //? Maybe use the editor type
    name: "testContent",
    message: "Enter the content for the test section:",
  },
  {
    type: "input",
    name: "gitHubUserName",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "Enter your email address:",
  },
];

module.exports = questions;
