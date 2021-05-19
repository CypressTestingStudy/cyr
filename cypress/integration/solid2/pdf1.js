// O : Open/Closed Principle 
// Clases abiertas para ser extendidas, pero cerradas para ser modificadas
// Ejemplo 1:

class Pdf {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  
    // ...
  }
  class Png {
    constructor(name) {
      this.name = name;
    }
  
    // ...
  }
  class Printer {
    function printFile(file) {
      if (file instanceof Pdf) {
        // Print Pdf...
      } else if (file instanceof Png) {
        // Print Png...
      }
    }
  }

  


