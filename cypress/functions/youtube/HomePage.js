class HomePage {
  getMusicbutton(productType) {
    return cy.contains(productType);
  }
}
export default HomePage;
