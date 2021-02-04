// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import { US_16 } from "/Users/rodrigo.alvarez/cyr/cypress/Page-Objects/US_16-CheckCart.js";

describe("US_16-CheckCart", () => {
  const automation = new US_16();

  it("US_16-Automated", () => {
    automation.navigator();

    automation.Cart().click();

    automation.CheckText().should("have.text", "\nYour Amazon Cart is empty\n");
  });
});
