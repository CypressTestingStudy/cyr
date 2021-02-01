// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Hourly Login Test', function () {
   
    beforeEach(function () {
            cy.login();
        });
        it('Login in Hourly Page and check the dashboard ', function () {
                cy.contains('Quotes').should('have.text','Quotes').click();
                cy.contains('Agencies').should('have.text','Agencies').click();
                cy.contains('Policies').should('have.text','Policies').click();
                cy.contains('Commission').should('have.text','Commission').click();
            });
    });