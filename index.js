const inquirer = require('inquirer');
const questions = [
  {
    type: 'input',
    name: 'input test',
    message: 'What is your name?',
    validate: (answer) => {
      if (answer === '') {
        return 'Please enter a valid name';
      }
      return true;
    },
  },
  {
    type: 'list',
    name: 'list test',
    message: 'How many dogs do you have?',
    choices: [1, 3, 6, 8],
  },
  {
    type: 'checkbox',
    name: 'checkbox test',
    message: 'How many programming languages do you know?',
    choices: ['JS', 'C++', 'Ruby', 'Python'],
  },
];
console.log(`
--------------------------------------
---- PROFESSIOAL README GENERATOR ----
--------------------------------------
`);

inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
