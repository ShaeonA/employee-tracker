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
    connection.query(`SELECT * FROM departments`, (err, row) => {
        if (err) {
            console.log(err);
        }
        console.log(row);
        showMenu();
    });

    //print dept to screen 
  
}

function viewRoles() {
    //query db for roles. 
    connection.query(`SELECT * FROM role`, (err, row) => {
        if (err) {
            console.log(err);
        }
        console.log(row);
        showMenu();
    });


    // //print dept to screen 
 
}

function viewEmployees() {
    //query db for employees. 
    connection.query("SELECT * FROM employee", (err, row) => {
        if (err) {
            console.log(err);
        }
        console.log(row);
        showMenu();
    });



    //print dept to screen 
    
}

function addDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "DepartmentName",
        message: "What is Dept. Name"
    }]).then(answers=>{
        console.log(answers);
        //connection.query (answers stmnt)
        //ShowMenu
    })

}

function addRole() {
    inquirer.prompt([{
        type: "input",
        name: "Please add a role including name , salary, and department",
    }])
}
function addEmployee() {
    inquirer.prompt([{
        type: "input",
        name: "Please add an employee including first name, last name, role, and manager",
    }])
}
function updateRole() {
    connection.query(`SELECT * FROM role`, (err, row) => {
        if (err) {
            console.log(err);
        }
       const choices = row.map(role=>role.title)
        inquirer.prompt([{
            type: "list",
            name: "Please select a role to update",
            choices: choices
        }])
    });


    
   
}


showMenu();