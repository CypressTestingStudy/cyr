/// <reference types="Cypress" />

describe("TS Gaming Video Player - Youtube", function () {
  
  before(function () {
    cy.selectSectionYT('Videojuegos', 'Fortnite');
    cy.contains('LAST').click().wait(3000);
  });

   it("[TC01] Pause button check", function () {
    cy.get('.ytp-play-button').should("be.visible").click();
   });

   it("[TC02] Next button check", function () {
    cy.get('.ytp-next-button').should("be.visible").click();
   });

   it("[TC03] Mute button check", function () {
    cy.get('.ytp-mute-button').should("be.visible").click();
   });

   it("[TC04] Settings button check", function () {
    cy.get('.ytp-settings-button').should("be.visible").click();
   });

   it("[TC05] Automatic Repro button check", function () {
    cy.get('.ytp-autonav-toggle-button-container').should("be.visible").click();
   });

   it("[TC06] Big Size Repro button check", function () {
    cy.get('.ytp-size-button').should("be.visible").click();
   });

   it("[TC07] FullScreen Repro button check", function () {
    cy.get('.ytp-fullscreen-button').should("be.visible").click();
   });
   
   it("[TC08] Mini Repro button check", function () {
    cy.get('.ytp-miniplayer-button').should("be.visible").click();
   });


   it("[TC09] Mini Repro button check", function () {
    cy.get('.ytp-ad-skip-button').should("be.visible").click();
   });

   it("[TC10] Mini Repro go back button check", function () {
    cy.get('.ytp-miniplayer-scrim').should("be.visible").click();
   });
   
   

});
