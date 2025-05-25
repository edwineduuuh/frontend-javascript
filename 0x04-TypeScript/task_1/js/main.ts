interface Teacher {
    readonly firstName: string;          // only modifiable at initialization
    readonly lastName: string;           // only modifiable at initialization
    fullTimeEmployee: boolean;           // always defined
    yearsOfExperience?: number;          // optional
    location: string;                    // always defined
    [key: string]: any;                  // allow any other attribute
  }
  
  // Example usage:
  
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,        // extra property allowed
  };
  
  console.log(teacher3);
  

  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Example usage:
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
console.log(director1);
  
// Define the interface for the function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Example usage:
  console.log(printTeacher("John", "Doe")); // Output: J. Doe
  
  // Interface for the constructor parameters
interface StudentClassConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Interface for the class instance
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage:
  const student = new StudentClass('Alice', 'Smith');
  console.log(student.workOnHomework()); // Currently working
  console.log(student.displayName());    // Alice
  