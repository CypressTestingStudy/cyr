class WomenTab {
  // element with the women page locator
  getWomenPage() {
    return cy.get('a[title="Women"]').click()
  }
  // element with the tops page locator
  getTopsPage() {
    return cy.contains('Tops').click({ force: true })
  }
  // element with the dresses page locator
  getDressesPage() {
    return cy.contains('Dresses').click({ force: true })
  }
  // element with the tops checkbox locator in the left-menu
  checkTopsCategory() {
    return cy.get('#layered_category_4').check()
  }
  // element with the condition checkbox locator in the left-menu
  checkCondition() {
    return cy.get('#layered_condition_new').check()
  }
  // element with the List view option locator
  getListView() {
    return cy.get('i[class="icon-th-list"]').click()
  }
  // element with the Grid view option locator
  getGridView() {
    return cy.get('i[class="icon-th-large"]').click()
  }
  //element with the add to cart locator
  getAddToCart() {
    return cy.get('a[title="Add to cart"]').eq(3).click()
  }
  //element with the first proceed to checkout button locator
  getFirstCheckOut() {
    return cy.contains('Proceed to checkout').click()
  }
  // element with the proceed to checkout button locator
  getProceedToCheckoutButton() {
    return cy.get('.cart_navigation > .button > span').click()
  }
}
export default WomenTab
