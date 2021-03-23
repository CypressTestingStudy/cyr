// type definitions for Cypress object "cy"
/// <reference types="cypress" />

export function CYP59() {
  cy.visit("https://www.youtube.com/");
  cy.get("#start > #guide-button > #button > #guide-icon")
    .should("be.visible")
    .click();
  cy.wait(2000);
  cy.get(":nth-child(7) > #endpoint > paper-item.style-scope")
    .should("be.visible")
    .click();
  cy.wait(2000);
  cy.get(
    ":nth-child(1) > :nth-child(3) > .ytd-item-section-renderer > :nth-child(1) > #contents > .ytd-shelf-renderer > #scroll-container > #items > :nth-child(4) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > .no-transition > #img"
  )
    .should("be.visible")
    .click();
  cy.wait(9000);
  //skip ad
  cy.get(".ytp-ad-skip-button").should("be.visible").click();
  cy.wait(2000);
  cy.get(".ytp-webgl-spherical-control").scrollIntoView();
  cy.get("canvas").trigger("mouseover");
  cy.wait(7000);
  //Pause
  cy.get(".ytp-play-button").click();
  //play
  cy.get(".ytp-play-button").click();
  cy.wait(4000);
  cy.get("canvas").trigger("mouseover");
  //FWD
  cy.get(".ytp-progress-bar-padding").click(200, 10);
  cy.wait(5000);
  //teather
  cy.get(".ytp-size-button").click();
  cy.wait(10000);
  cy.get("canvas").trigger("mouseover");
  //RWD
  cy.get(".ytp-progress-bar-padding").click(100, 10);
  cy.wait(2000);
  cy.get(".ytp-webgl-spherical-control").scrollIntoView();
  cy.wait(4000);
  cy.get("canvas").trigger("mouseover");
  //change Speed
  cy.wait(3000);
  cy.get(".ytp-settings-button").click();
  cy.wait(3000);
  cy.contains("Velocidad").click();
  cy.contains("0.25").click();
  cy.wait(6000);
  cy.contains("Velocidad").click();
  cy.contains("Normal").click();
  //change Quality
  cy.wait(3000);
  cy.contains("Calidad").click();
  cy.contains("1080").click();
  /*cy.wait(6000);
    cy.contains('Calidad').click();
    cy.contains('Autom').click();*/
}
