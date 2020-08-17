var fs = require("fs");
var makeMD = require("./utils/generateMarkdown");
var inquirer = require("inquirer"); 
const { error } = require("console");
var ui = new inquirer.ui.BottomBar();
ui.log.write('README.md interactive generator will ask for the following inputs: Title, Description, Installation, Usage, License, Contributing, Tests, GitHub Username, and Email');


  // array of questions for user
  const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the name of your project repo?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?"
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
      type: "list",
      message: "Please choose your licence from the list below:",
      name: "license",
      choices: [
        "MIT",
        "Apache v2.0",
        "GNU GPL v3.0"
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
      },
      {
        type: "confirm",
        name: "finalconfirm",
        message: "Does this entry look correct to you? (You can always edit the README.md file directly after it has been generated)",
      },
  ];

  

// function to write README file
function writeToFile(fileName, data) {
let markdown = makeMD(data);
fs.writeFile(`./output/${ fileName }`, markdown,  function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Success! Your README.md file can be found in the output folder.");

});

}

inquirer.prompt(questions)
  .then(data => {
    if (data.finalconfirm === true) {
    var fileName = "README.md"
    writeToFile(fileName, data);
    }
    else {
      console.log("Your README.md file was not generated. Rerun the program to start again.");
    }
  });

