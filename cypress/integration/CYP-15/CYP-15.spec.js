// type definitions for Cypress object "cy"
/// <reference types="cypress"/>

describe("Add a product not available to the car", () => {
  beforeEach(() => {
    //BaseURl
    cy.visit("https://www.amazon.com/");
  });

  // Method to Add a product not available to the cart
  it("Add a product not available to the cart", () => {
    //loggin
    /*
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#ap_email').type('cypressmedellin@gmail.com{ENTER}'),
        cy.get('#ap_password').type('Cypres$2020{ENTER}');
        */

    //searching a PS5 (not available)
    cy.get('[role="search"]').type("PS5{ENTER}");
    cy.get("#nav-search-submit-button").click();

    //Selecting filter by PS5 console
    cy.get("#n\\/20972796011 > span").click();

    //selecting PS5 console unavailable
    cy.get(
      '[data-asin="B08FC5L3RG"] > :nth-child(1) > .celwidget > .s-include-content-margin > .a-spacing-medium > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .sg-col-4-of-12 > .sg-col-inner > :nth-child(1) > .a-size-mini > .a-link-normal > .a-size-medium'
    ).click();

    //adding to list
    cy.get("#wishListMainButton-announce").click();

    //going to Sign-In Page
    cy.get(".a-padding-extra-large > .a-spacing-small").should(
      "contain",
      "Sign-In"
    );
  });
});
