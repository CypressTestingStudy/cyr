/// <reference types="Cypress" />

describe("Login Youtube", function () {
  it("Open Firefox and login", function () {
        cy.visit('https://www.youtube.com/');
        cy.get('.button');
  });
});