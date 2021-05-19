// O : Open/Closed Principle 
// Clases abiertas para ser extendidas, pero cerradas para ser modificadas
// Ejemplo 1:

class Printable {
  function print() {
    // ...
  }
}

class Pdf extends Printable {
  constructor(name, size) {
    super();
    this.name = name;
    this.size = size;
  }

  // Override
  function print() {
    // ...
  }
}

class Png extends Printable {
  constructor(name) {
    super();
    this.name = name;
  }

  // Override
  function print() {
    // ...
  }
}

class Printer {
  function printFile(file) {
    file.print();
  }
}


