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
//* If there is no license, return an empty string
function renderLicenseLink(license) {
  return license
    ? `https://choosealicense.com/licenses/${license.toLowerCase()}/`
    : "";
}

// TODO: Create a function that returns the license section of README
//* If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  const licenseBadge = renderLicenseBadge(license);
  return `## License {#license}\n\n${licenseBadge}\n\nThis project is licensed under the [${license}](${licenseLink}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const template = `
# ${data.projectTitle}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation {#installation}

${data.installation}

## Usage {#usage}

${data.usage}

//! This is the license section it will be rendered by my function above
${renderLicenseBadge(data.license)}
      
## Contributing {#contributing}

${data.contributingContent}

## Tests {#tests}

${data.testContent}

## Questions {#questions}

//* Github user name with a link to the users Github profile
- [My GitHub Profile](https://github.com/${data.gitHubUserName})
//* Email address with instructions how to reach user with additional questions
- ${data.emailAddress}

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
