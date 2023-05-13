// TODO: Create a function to ask the questions
function askQuestions() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    //? Should I use the below syntax?
    //?  fs.appendFile("test.md", JSON.stringify(answers), "utf-8", (err) => {
    //?    if (err) console.log(err);
    //?  })
  });
}

module.exports = askQuestions;
