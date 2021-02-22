// type definitions for Cypress object "cy"
/// <reference types="cypress"/>

describe("Buy Now button without Log-in", () => {
  beforeEach(() => {
    //BaseURl
    cy.visit("https://www.amazon.com/");
  });

  // Method to select a product, go to the "Buy now" button and go to the "Loggin" Page
  it("Buy Now without logged in", () => {
    cy.get("#twotabsearchtextbox").type("PS4{ENTER}");
    cy.get(
      '[data-asin="B074LRF639"] > :nth-child(1) > .celwidget > .s-include-content-margin > .a-spacing-medium > :nth-child(2) > :nth-child(1) > .sg-col-inner > .a-spacing-none > .rush-component > .a-link-normal > .a-section > .s-image'
    ).click();
    cy.get("#buy-now-button").should("be.visible").click();
    cy.wait(3000);
    cy.get("#siAddCoverage-announce").click();
    cy.get(".a-padding-extra-large > .a-spacing-small").should(
      "contain",
      "Sign-In"
    );
  });
});
