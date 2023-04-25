
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of this project?"
  },

  {
    type: "input",
    name: "description",
    message: "Please provide concise details of your project"
  },

    {
    type: "list",
    name: "license",
    message: "Which license will your project use?",
    choices: ["Apache", "MIT", "none"],
  },

  {
    type: "input",
    name: "install",
    message: "What are the installation instructions?"
  },
  
  {
    type: "input",
    name: "usage",
    message: "Please provide the languages that will be used within this project?"
  },
  {
    type: "input",
    name: "contributor",
    message: "Please provide all contributors of the project"
  },

  {
    type: "input",
    name: "username",
    message: "What is your gitHub user name?"
  },
  
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
];


function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
    console.log ("Create README.md file...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses}));
  });
}


init();
