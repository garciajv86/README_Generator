// TODO: Include packages needed for this application
const fs = require("fs");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`File ${fileName} has been saved!`);
    }
  });
}

module.exports = writeToFile;
