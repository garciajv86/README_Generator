// TODO: Create a function that returns a license badge based on which license is passed in
//* If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache-2.0":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "GPL-3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  return license
    ? `https://choosealicense.com/licenses/${license.toLowerCase()}/`
    : "";
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  const licenseBadge = renderLicenseBadge(license);
  return `## License\n\n${licenseBadge}\n\nThis project is licensed under the [${license}](${licenseLink}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const template = `
# ${answers.projectTitle} 

${renderLicenseBadge(answers.license)}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

${renderLicenseSection(answers.license)}
     
## Contributing

${answers.contributingContent}

## Tests

${answers.testContent}

## Questions

- [My GitHub Profile](https://github.com/${answers.gitHubUserName})
- ${answers.emailAddress}

  `;
  return template;
}

//* Export the function so I can Import in to my index.js
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};
