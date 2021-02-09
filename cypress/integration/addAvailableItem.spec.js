describe("Add available Item to the cart", function () {
  it("Select more than one product and add to the cart", function () {
    cy.visit("https://www.amazon.com/");
    cy.get('input[id="twotabsearchtextbox"]').type("xiaomi note 9 case");
    cy.get('input[id="nav-search-submit-button"]').click();
    cy.get(
      'img[src="https://m.media-amazon.com/images/I/81hV6CPuX2L._AC_UL320_.jpg"]'
    )
      .first()
      .click();
    cy.get('span[id="a-autoid-0"]').click();
    let cantidad = 6;
    cy.get('div[class^="a-popover-inner"]')
      .contains(parseInt(cantidad))
      .click();
    cy.get('input[id="add-to-cart-button"]').click();
    cy.get('span[id="nav-cart-count"]').should("contain", cantidad);
  });
});
