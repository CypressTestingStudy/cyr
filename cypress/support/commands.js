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

import "@testing-library/cypress/add-commands";

Cypress.Commands.add("amazonWebSite", function () {
  cy.visit("https://www.amazon.com/");
  cy.wait(3000);
});

Cypress.Commands.add("loginAmazon", function (user) {
  cy.visit("https://www.amazon.com/");
  cy.contains("Sign in").click();
  cy.get("#ap_email").clear().type(user.email);
  cy.get(".a-button-inner > #continue").click();
  cy.get("#ap_password").clear().type(user.pwd);
  cy.get("#signInSubmit").click();
});

Cypress.Commands.add("youtubeWebSite", function () {
  cy.visit("https://www.youtube.com/");
  cy.wait(1000);
});
