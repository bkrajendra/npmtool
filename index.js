#! /usr/bin/env node
// var shell = require("shelljs");
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('string-util')
//   .description('Confluxsys Container Management Utility - CoCoMan')
//   .version('1.0.0')


//   program.command('split')
//   .description('Confluxsys Container Management Utility - CoCoMan')
//   .argument('<string>', 'string to split')
//   .option('--first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

// program.parse();

// //const options = program.opts();
// ///const limit = options.first ? 1 : undefined;
// //console.log(program.args[0].split(options.separator, limit));
// console.log('Test');

// shell.exec("echo shell.exec works");

var inquirer = require('inquirer');
const questions = [
  {
    type: 'input',
    name: 'first_question',
    message: 'Question with filtering and validating text',
    validate: async () => {
      await new Promise((r) => setTimeout(r, 3000));
      return true;
    },
    filter: async (answer) => {
      await new Promise((r) => setTimeout(r, 3000));
      return `filtered${answer}`;
    },
    filteringText: 'Filtering your answer...',
    validatingText: 'Validating what you wrote...',
  },
  {
    type: 'input',
    name: 'second_question',
    message: 'Question without filtering and validating text',
    validate: async () => {
      await new Promise((r) => setTimeout(r, 3000));
      return true;
    },
    filter: async (answer) => {
      await new Promise((r) => setTimeout(r, 3000));
      return `filtered${answer}`;
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});