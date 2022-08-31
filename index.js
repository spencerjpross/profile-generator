const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

inquirer
.prompt([
    {
        type: "input",
        message: "What is your team manager's name?",
        name: 'manager',
    },
    {
        type: "input",
        message: "What's your employee ID?",
        name: 'id',
    },
    {
        type: "input",
        message: "What's your email address?",
        name: 'email',
    },
    {
        type: "input",
        message: "What's your office number?",
        name: 'office'
    }
])
.then(response => {
    const newManager = new Manager()
    console.log(response)
})