var fs = require("fs");
var inquirer = require("inquirer"); 
var ui = new inquirer.ui.BottomBar();
ui.log.write('README.md interactive generator will ask for the following inputs: Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, GitHub Username, and Email');

inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?"
      },
      {
        type: "input",
        name: "toc",
        message: "What is your README Table of Contents? (please number each entry (ex. 1. 2. 3. etc)"
      },
      {
        type: "input",
        name: "installation",
        message: "What are your project installation instructions?"
      },
      {
        type: "input",
        name: "usage",
        message: "What is your project usage informtion?"
      },
      {
        type: "input",
        name: "description",
        message: "What is your project description?"
      },
    {
      type: "list",
      message: "Please choose your licence from the list below:",
      name: "licence",
      choices: [
        "MIT",
        "licence",
        "licence2"
      ]
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines for your project?"
      },
      {
        type: "input",
        name: "tests",
        message: "What are the test instructions for your project?"
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email (Where people can reach you if they have questions RE this project)?"
      }
  ]).then(function(data) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
   
  });
  