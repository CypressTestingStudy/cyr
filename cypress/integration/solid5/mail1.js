class Correo {
    provider;
    constructor() {
      // Levantar una instancia de google mail, este código es con fin de demostración.
      this.provider = yahoo.api.createService();
    }
    enviar(mensaje) {
      this.provider.send(mensaje);
    }
  }
  var correo = new Correo();
  correo.enviar('hola!');