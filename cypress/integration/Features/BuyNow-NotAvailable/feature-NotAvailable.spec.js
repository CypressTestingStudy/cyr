// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("User not logged and try to buy, but Product is not available", function () {
    
    beforeEach(function () {
            cy.visit('https://www.amazon.com/').wait(1000);
        })

    it("Should have next message - Item is currently not available", function () {
        cy.get('#twotabsearchtextbox')
        .type('echo input alexa device')
        .get('#nav-search-submit-button')
        .click();
        cy.contains('Echo Flex - Plug-in mini smart speaker with Alexa')
        .click();
        cy.get('#exports_desktop_outOfStock_buybox_message_feature_div > .a-section > .a-color-price')
        .should('have.text', 'Currently unavailable.');
    });
  });