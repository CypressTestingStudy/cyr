/// <reference types="Cypress" />

describe("TS Gaming Video Player - Youtube", function () {
  
  before(function () {
    cy.selectSectionYT('Videojuegos', 'Fortnite');
    cy.contains('OFICIAL').click().wait(3000);
  });

   it("[TC01] Pause button check", function () {
    cy.get('.ytp-play-button').click();
   });

   it("[TC02] Next button check", function () {
    cy.get('.ytp-next-button').click();
   });
});
