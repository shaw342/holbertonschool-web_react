interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName:"Shawan",
    lastName:"Barua",
    age:18,
    location:"New Zeland"
}

const student2: Student = {
    firstName:"Hugo",
    lastName:"Posey",
    age:23,
    location:"Irland"
}

let studentsList: Student[] = [student1,student2]


function displayStudents(students: Student[]): void {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
  
    const header = document.createElement('tr');
    const headerName = document.createElement('th');
    headerName.textContent = 'First Name';
    const headerLocation = document.createElement('th');
    headerLocation.textContent = 'Location';
    header.appendChild(headerName);
    header.appendChild(headerLocation);
    tbody.appendChild(header);
  
    students.forEach(student => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = student.firstName;
      const locationCell = document.createElement('td');
      locationCell.textContent = student.location;
      row.appendChild(nameCell);
      row.appendChild(locationCell);
      tbody.appendChild(row);
    });
  
    document.body.appendChild(table);
  }
  
document.addEventListener('DOMContentLoaded', () => displayStudents(studentsList));