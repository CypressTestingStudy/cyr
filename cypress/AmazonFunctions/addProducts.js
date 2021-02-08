/// <reference types="Cypress" />

const message = "Redirected successfully, you rock!!!";

export function addProduct() {
  /*Navigates over Amazon web page and add one product without logging. After that, 
proceed to buying the products in the shopping cart*/

  cy.visit("https://www.amazon.com/");
  cy.get('[role="search"]').type("Kindle{ENTER}");
  cy.get("#nav-search-submit-button").click();
  cy.get(
    '[alt="Kindle Paperwhite – Now Waterproof with 2x the Storage – Ad-Supported"]'
  ).click();
  cy.get("#add-to-cart-button").should("be.visible").click();
  cy.get(".a-button-close").should("be.visible").click();
  cy.get('[role="button"]').contains("Proceed to checkout").click();
  cy.title().should("eq", "Amazon Sign-In", message);
}
