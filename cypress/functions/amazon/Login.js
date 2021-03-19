// type definitions for Cypress object "cy"
/// <reference types="cypress" />

export function loginOk() {
    cy.get('#nav-link-accountList-nav-line-1').should('have.text', 'Hello, Daniel');
}