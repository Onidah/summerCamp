let registrationForm = document.getElementById("registrationForm");
let firstName = document.getElementById("firstName");
let program = document.getElementById("program");
let age = document.getElementById("age");
let tableBody = document.getElementById("tableBody");

const addNewRegistration = (e) => {
  e.preventDefault();

  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${firstName.value}</td>
    <td>${program.value}</td>
    <td>${age.value}</td>
  `;

  tableBody.appendChild(row);
  registrationForm.reset();
};

registrationForm.addEventListener("submit", addNewRegistration);