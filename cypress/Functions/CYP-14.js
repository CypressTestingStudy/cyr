// type definitions for Cypress object "cy"
/// <reference types="cypress" />

export function CYP14() {
  cy.visit("https://www.amazon.com/");

  cy.wait(3000);

  cy.get("#twotabsearchtextbox").type("playstation");

  cy.wait(3000);

  cy.get("#nav-search-submit-button").click();

  cy.get(
    '[data-asin="B07C438TMN"] > :nth-child(1) > .celwidget > .s-include-content-margin > .a-spacing-medium > :nth-child(2) > :nth-child(1) > .sg-col-inner > .a-spacing-none > .rush-component > .a-link-normal > .a-section > .s-image'
  ).click();

  cy.get("#a-autoid-0-announce").click();

  cy.get("#quantity_1").click();

  cy.get("#add-to-cart-button").click();

  cy.get(".a-spacing-micro > .a-size-medium > :nth-child(1)").should(
    "have.text",
    "Cart subtotal (2 items): "
  );

  /*cy.get('#iqVRHM_h0SD66hbk52x0ew > .a-cardui-body > .a-link-normal > .a-section > .landscape-image')
    .click()

    cy.get('#vNcZxUhNqkRE4wXznKknTg > .a-cardui-body > .a-link-normal > .a-section > .landscape-image')  --dynamico la pagina sobre la q navego no es la misma q cypress corre*/
}
