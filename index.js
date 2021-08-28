const inquirer = require('inquirer');
const { allowedNodeEnvironmentFlags } = require('process');
const mySQL = require('mysql2');
require('console.table');
const PORT = process.env.port || 3001;

const connection = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "Shaeon11.",
    database: "employee_tracker_db"
})

connection.connect(function (error) {
    if (error) {
        throw error
    }
})

function showMenu() {
    inquirer.prompt([{
        type: "list",
        name: "menuAction",
        message: "What do you want to do?",
        choices: [
            "view all departments",
            "view all roles",
            "view all employees",
            "add a department",
            "add a role",
            "add an employee",
            "update an employee role",
            "Would you like to exit?"

        ]
    },
    ]).then(answers => {
        switch (answers.menuAction) {
            case "view all departments":
                viewDepartments();
                break;
            case "view all roles":
                viewRoles();
                break;
            case "view all employees":
                viewEmployees();
                break;

            case "add a department":
                addDepartment();
                break;
            case "add a role":
                addRole();
                break;
            case "add an employee":
                addEmployee();
                break;
            case "update an employee role":
                updateRole();
                break;

            default:
                break;
        }
    })
}


function viewDepartments() {
    //query db for depts. 
    db.query(`SELECT FROM viewDepartments`, (err, row) => {
        if (err) {
            console.log(err);
        }
        console.log(row);
    });

    //print dept to screen 
    showMenu();
}

function viewRoles() {
    //query db for roles. 

    // //print dept to screen 
    showMenu();
}

function viewEmployees() {
    //query db for employees. 


    //print dept to screen 
    showMenu();
}

function addDepartment() {
    console.log('addDepartment')
}

function addRole() {
    console.log('addRole')
}
function addEmployee() {
    console.log('addEmployee')
}
function updateRole() {
    console.log('updateRole')
}


showMenu();