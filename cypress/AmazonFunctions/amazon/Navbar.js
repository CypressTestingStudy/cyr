/// <reference types="Cypress" />

const message = "Redirected successfully, you rock!!!";

export function navBarCheck() {
  cy.visit("/");
  cy.get("#nav-hamburger-menu").click();
  cy.get('[data-menu-id="27"]').click();
  cy.contains("eGift cards").click();
  cy.get('[alt="Amazon.com Gift Card Balance Reload"]').click();
  cy.get(".a-text-bold").should(
    "have.text",
    "\n    \n        \n        \n            Reload Your Balance\n        \n     \n"
  );
  cy.get("#a-autoid-1-announce").click();
  cy.get("#a-autoid-2-announce").click();
  cy.get("#a-autoid-3-announce").click();
  cy.get("#a-autoid-5-announce").click();
  cy.get("#asv-manual-reload-amount").type("19690");
}

export function loginNow() {
  cy.get("#form-submit-button").click();
}
