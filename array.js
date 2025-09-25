let students = ["John", "Jane", "Jim"];
let marks = [23, 45, 67, 89];
const studentsBody = document.getElementById("students-body");
const output = document.getElementById("output");
const countE1 = document.getElementById("count");
renderTable();
function renderTable() {
  studentsBody.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    cell1.textContent = students[i];
    cell2.textContent = marks[i];
    row.appendChild(cell1);
    row.appendChild(cell2);
    studentsBody.appendChild(row);
  }
  countE1.textContent = `Total Students: ${students.length}`;
}

