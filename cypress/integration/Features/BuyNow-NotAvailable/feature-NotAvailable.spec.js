// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("User not logged and try to buy, but Product is not available", function () {
    
    beforeEach(function () {
            cy.visit('https://www.amazon.com/').wait(1000);
        })

    it("Should have next message - Item is currently not available", function () {
        cy.get('#twotabsearchtextbox').type('sony playstation 5{enter}')
        cy.get('[alt="Sony Playstation 5"]').click();
        cy.get('.a-spacing-small > .a-color-price').contains('Currently unavailable.')
        .should('have.text', 'Currently unavailable.');
    });
  });