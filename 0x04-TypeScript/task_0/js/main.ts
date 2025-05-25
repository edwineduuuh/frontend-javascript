interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Nairobi'
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Mombasa'
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const table = document.createElement('table');
  document.body.appendChild(table);
  
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const locationCell = row.insertCell();
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  