/// <reference types="Cypress" />
const cantidad = 6;

export function searchPage() {
  cy.visit("https://www.amazon.com/");
}
export function selectProduct() {
  /*Navigates over Amazon web page and add one product without logging*/
  cy.get('input[id="twotabsearchtextbox"]').type("xiaomi note 9 case");
  cy.get('input[id="nav-search-submit-button"]').click();
  cy.get(
    'img[src="https://m.media-amazon.com/images/I/81hV6CPuX2L._AC_UL320_.jpg"]'
  )
    .first()
    .click();
}

export function selectProduct2() {
  /*Navigates over Amazon web page and add one product without logging*/
  cy.get('input[id="twotabsearchtextbox"]').type("Lipstick MAC");
  cy.get('input[id="nav-search-submit-button"]').click();
  cy.get(
    'img[src="https://m.media-amazon.com/images/I/614ujtIfgTL._AC_UL320_.jpg"]'
  )
    .first()
    .click();
}

export function selectQuantity() {
  cy.get('span[id="a-autoid-0"]').click();
  cy.get('div[class^="a-popover-inner"]').contains(parseInt(cantidad)).click();
}

export function addToTheCart() {
  cy.get('input[id="add-to-cart-button"]').click();
  cy.get('span[id="nav-cart-count"]').should("contain", cantidad);
}

export function buyNowItem() {
  cy.get('input[id="buy-now-button"]').click();
  cy.get('h1[class="a-spacing-small"]').should("contain.text", "Sign-In");
}

export function checkCart() {
  cy.get('a[id="nav-cart"]').contains("Cart").click();
  cy.get('div[class="a-row"]').contains("Shopping Cart");
}
