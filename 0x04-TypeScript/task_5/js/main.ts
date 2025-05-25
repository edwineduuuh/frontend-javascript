// Define branded types using interfaces and a unique tag

// MajorCredits interface
export interface MajorCredits {
    credits: number;
    // brand property for nominal typing
    readonly __brand: 'MajorCredits';
  }
  
  // MinorCredits interface
  export interface MinorCredits {
    credits: number;
    // brand property for nominal typing
    readonly __brand: 'MinorCredits';
  }
  
  // sumMajorCredits: adds two MajorCredits
  export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: 'MajorCredits',
    };
  }
  
  // sumMinorCredits: adds two MinorCredits
  export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: 'MinorCredits',
    };
  }
  