// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("Practice makes perfect", function () {
  //BaseURl Generica para las API de Fuera
  Cypress.config("baseUrl", "http://dummy.restapiexample.com/api/v1");

  // Metodo para Consultar Mega Basico
  it("GET - Read Only ", function () {
      cy.request("GET", "/employees");
    });

  // Metodo para Consultar un Servicio, validar que el Status Code sea igual a 200, que el body no este vacio
  // y que la longitud del body sea igual a 24
  it("GET - Read Step One ", function () {
      //Get a Response and validate the status code
      cy.request("GET", "/employees").then((response) => {
        expect(response).to.have.property("status", 200);
        expect(response.body).to.not.be.null;
        expect(response.body.data).to.have.length(24);
      });
    });
});
