function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null');
  }
}

const myName: string | null = null;
printName(myName); // Works fine

const myName2 = null as string | null; // Solution 1: Type assertion
printName(myName2); // Works fine

// Solution 2: Modify function parameter type to allow 'null'
function printName2(name: any): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null');
  }
}
printName2(null); // Works fine.  Less type-safe though.