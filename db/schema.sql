DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

CREATE TABLE departments(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR (30) UNIQUE NOT NULL

);

CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
    title VARCHAR (30) ,
    salary DECIMAL ,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments (id)
);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
    first_name VARCHAR (30) , 
    last_name VARCHAR (30) ,
    role_id INT ,
    FOREIGN KEY (role_id) REFRENCES role (id),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee (id)
)

