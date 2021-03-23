/// <reference types="Cypress" />
const cantidad = 6;

export function searchPage() {
  cy.amazonWebSite();
  cy.wait(2000);
}
export function selectProduct() {
  cy.get('input[id="twotabsearchtextbox"]').type("mac maybelline volumen");
  cy.get('input[id="nav-search-submit-button"]').click();
  cy.wait(2000);
  cy.get(
    'img[src="https://m.media-amazon.com/images/I/61nJzqVYlAL._AC_UL320_.jpg"]'
  )
    .first()
    .click();
  cy.wait(1000);
}

export function selectProduct2() {
  cy.get('input[id="twotabsearchtextbox"]').type("Lipstick MAC");
  cy.get('input[id="nav-search-submit-button"]').click();
  cy.get(
    'img[src="https://m.media-amazon.com/images/I/614ujtIfgTL._AC_UL320_.jpg"]'
  )
    .first()
    .click();
  cy.wait(1000);
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
