// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';


Cypress.Commands.add('login', () => {
    cy.visit('https://admin.test.hourly.io/login');
    cy.get(':nth-child(1) > input').type('angels@lent.io');
    cy.get(':nth-child(3) > input').type('Medellin2020');
    cy.get('form').submit();
    cy.wait (2000);
    cy.get('.decorated-input').type('2222');
    cy.get('form').submit();
  });