/// <reference types="Cypress" />

const message = "Redirected successfully, you rock!!!";

export function addProduct() {
  /*Navigates over Amazon web page and add one product without logging*/

  cy.visit("/");
  cy.get('[role="search"]').type("Kindle{ENTER}");
  cy.get("#nav-search-submit-button").click();
  cy.get(
    '[alt="All-new Kindle - Now with a Built-in Front Light - 4 GB, Black (International Version)"]'
  ).click();
  cy.get("#add-to-cart-button").should("be.visible").click();
}

export function buyNow() {
  cy.get('[role="button"]').contains("Proceed to checkout").click();
  cy.title().should("eq", "Amazon Sign-In", message);
}

export function buyFromCart() {
  /*Navigates to the cartshop menu and click on buy now without logging*/

  cy.get("#nav-cart-count-container").click();
  cy.get('[name="proceedToRetailCheckout"]').click();
  cy.title().should("eq", "Amazon Sign-In", message);
}
