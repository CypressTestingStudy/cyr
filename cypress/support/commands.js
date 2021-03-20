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

  //Selectiong the filter
  cy.get("#start > #guide-button > #button > #guide-icon")
    .should("be.visible")
    .click();
  cy.get(":nth-child(8) > #endpoint > paper-item.style-scope").click();
  cy.get("h1.style-scope > #title").should("contain", "Learning");
  //Selecting a video ater filter Learning
  cy.get(
    ":nth-child(2) > :nth-child(3) > .ytd-item-section-renderer > :nth-child(1) > #contents > .ytd-shelf-renderer > #scroll-container > #items > :nth-child(3) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > .no-transition > #img"
  ).click();
  //Waitthing and skipping the ads
  cy.wait(18000);
  cy.get(".ytp-ad-skip-button").click();
  cy.scrollTo("top");
  cy.wait(5000);
});
