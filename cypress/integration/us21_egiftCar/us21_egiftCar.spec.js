/// <reference types="cypress" />

describe("US21 eGiftCar", () => {
  it("Find eGiftcar", () => {
    cy.visit("https://www.amazon.com/ref=nav_logo");
    cy.get("#nav-hamburger-menu").click().wait(2000);

    cy.get("a.hmenu-item").eq(27).click().wait(2000);

    cy.get("a.hmenu-item").contains("eGift cards").click().wait(2000);

    cy.get('div[data-asin="B07PCMWTSG"]').click();

    cy.get('span[id="gc-asin-title"]').should(
      "have.text",
      "Amazon.com eGift Card"
    );
  });
});
