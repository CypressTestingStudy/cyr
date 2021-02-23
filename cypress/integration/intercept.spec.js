/// <reference types="Cypress" />

describe("Testing intercept method", function () {
  it("navigate over automation practice page", function () {
    // /^index.php\?rand=*/
    cy.intercept("/index.php?rand=*/").as("req");
    cy.visit("http://automationpractice.com/index.php");
    cy.wait("@req").then((request) => {
      console.log(request);
    });
  });
});
