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
  