
namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
      experienceTeachingReact?: number; // extends Teacher interface
    }
  
    export class React {
      teacher?: Teacher;
  
      setTeacher(teacher: Teacher) {
        this.teacher = teacher;
      }
  
      getRequirements(): string {
        return 'Here is the list of requirements for React';
      }
  
      getAvailableTeacher(): string {
        if (!this.teacher || !this.teacher.experienceTeachingReact) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
  