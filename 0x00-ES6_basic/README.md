# ES6 Basics

![image](https://github.com/gillohsylvia/alx-frontend-javascript/assets/104779232/d3027301-f72c-4b2f-82ba-285f423def11)

For these project, we expect you to look at these concepts:
* Modern Javascript 
* Software Linter
## Resources
* [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
* [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)

## Learning Objectives.
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

* What ES6 is
* New features introduced in ES6
* The difference between a constant and a variable
* Block-scoped variables
* Arrow functions and function parameters default to them
* Rest and spread function parameters
* String templating in ES6
* Object creation and their properties in ES6
* Iterators and for-of loops

## Requirements
### General
* All your files will be executed on __Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: __vi__, __vim__, __emacs__, __Visual Studio Code__
* All your files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should use the js extension
* Your code will be tested using the [Jest Testing Framework](https://jestjs.io/)
* Your code will be analyzed using the [linter ESLint](https://eslint.org/) along with specific rules that we’ll provide
* All of your functions must be exported

### Setup
Install NodeJS 12.11.x
(in your home directory):

* `curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh`
* `sudo bash nodesource_setup.sh`
* `sudo apt install nodejs -y`
* `nodejs -v`
* `v12.11.1`
* `npm -v`
`6.11.3`

### Install Jest, Babel, and ESLintin your project directory:

* Install Jest using: `npm install --save-dev jest`
* Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
* Install ESLint using: `npm install --save-dev eslint`
### Configuration files
* __package.json__
* __babel.config.js__
* __.eslintrc.js__
  
### Finally…
Don’t forget to run __npm install__ from the terminal of your project folder to install all necessary project dependencies.
## Tasks
### 0. Const or let?
Modify
* function __taskFirst__ to instantiate variables using __const__
* function __taskNext__ to instantiate variables using __let__
### 1. Block scope
Given what you’ve read about __var__ and hoisting, modify the variables inside the function __taskBlock__ so that the variables aren’t overwritten inside the conditional block.
### 2. Arrow functions
Rewrite the following standard function to use ES6’s arrow syntax of the function __add__ (it will be an anonymous function after)
### 3. Parameter Default
Condense the internals of the following function to 1 line - without changing the name of each function/variable.
Hint: The key here to define default parameter values for the function parameters.
### 4. Rest parameter syntax for functions
Modify the following function to return the number of arguments passed to it using the rest parameter syntax

export default function returnHowManyArguments() {

}
### 5. The wonders of spread syntax
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

export default function concatArrays(array1, array2, string) {
}
### 6. Take advantage of template literals
Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.
### 7. Object property value shorthand syntax
Notice how the keys and the variable names are the same?

Modify the following function’s __budget__ object to simply use the keyname instead.
### 8. No need to create empty objects before adding in properties
Rewrite the __getBudgetForCurrentYear__ function to use ES6 computed property names on the budget object
### 9.  ES6 method properties
Rewrite __getFullBudgetObject__ to use ES6 method properties in the __fullBudget__ object
### 10. For...of Loops
Rewrite the function **appendToEachArrayValue** to use ES6’s **for...of** operator. And don’t forget that **var** is not ES6-friendly.
### 11. Iterator
Write a function named createEmployeesObject that will receive two arguments:

* departmentName (String)
* employees (Array of Strings)
export default function createEmployeesObject(departmentName, employees) {

}
The function should return an object with the following format:

{
     $departmentName: [
          $employees,
     ],
}
### 12. Let's create a report object

Write a function named __createReportObject__ whose parameter, **employeesList**, is the return value of the previous function **createEmployeesObject**.

export default function createReportObject(employeesList) {

}
createReportObject should return an object containing the key allEmployees and a method property called getNumberOfDepartments.

allEmployees is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

The method property receives employeesList and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.

{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};


  
