// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "GPL 3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const template = `
  # ${data.projectTitle}

## Description

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation


## Usage

//* Provide instructions and examples for use. Include screenshots as needed.

      //? ![alt text](assets/images/screenshot.png)

## License
      
## Contributing

//* List your collaborators, if any, with links to their GitHub profiles.
[My GitHub Profile](https://github.com/${data.gitHubUserName})
${data.emailAddress}
//* If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

## Tests

//* Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

//* Github user name with a link to the users Github profile

//* Email address with instructions how to reach user with additional questions

  `;
  return `# ${data.projectTitle}

`;
}

//* Export the function so I can Import in to my index.js
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};
