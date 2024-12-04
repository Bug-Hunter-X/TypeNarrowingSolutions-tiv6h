function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null');
  }
}

const myName: string | null = null;
printName(myName); // Works fine

const myName2 = null;
printName(myName2); // ERROR: Argument of type 'null' is not assignable to parameter of type 'string | null'.