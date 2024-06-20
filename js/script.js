// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let index = 1;
const employeesArray = [{}];
// Collect employee data

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  input = true;
  
  while(input){
    if(input === false){
      index++;
      return employeesArray;
    }else{
      let first = window.prompt("Enter Employees First Name: ");
      let last = window.prompt("Enter Employees Last Name: ");
      let sal = window.prompt("Enter Employees Salary: ");
      employeesArray.push({firstName: first, lastName: last, salary: sal});
      console.log(employeesArray[index]);
      console.log(employeesArray[index].salary);
      input = window.confirm("Would you like to enter more employees?");
      index++;
    }
  }
  return employeesArray;
}

//Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let average = 0;
  let temp = 0;
  for(let i = 1;i < index; i++) {
    if(isNaN(employeesArray[i].salary)){
      console.log("not a number");
    }else{
      temp = parseFloat(employeesArray[i].salary);
      average += temp;
    }
  }
  average /= index - 1;
  console.log(`The average is: ${average.toFixed(2)} and the total number of employees are: ${employeesArray.length - 1}.`);
}


// // // Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let i = Math.floor(Math.random() * index);
  if (i === 0){
    i++;
  }
  console.log(`First name: ${employeesArray[i].firstName}, Last name: ${employeesArray[i].lastName}, and Salary: ${employeesArray[i].salary}.`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 1; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
