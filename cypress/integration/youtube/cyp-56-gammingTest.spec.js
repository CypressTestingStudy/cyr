/// <reference types="Cypress" />

describe.skip("TS Gaming Video Player - Youtube", function () {
  
  before(function () {
    cy.selectSectionYT('Videogames', 'Fortnite');
    cy.contains('NOW').click().wait(5000);
  });

  it.skip("[TC01] Should Mute the video and check it", function () {
    cy.get('.ytp-mute-button').should("be.visible").click();
   });

   it.skip("[TC02] Should disable the autoplay and check it", function () {
    cy.get('.ytp-autonav-toggle-button-container').should("be.visible").click();
   });
   
   it.skip("[TC03] Should Activate the CC and check it", function () {
    cy.get('.ytp-subtitles-button').should("be.visible").click();
   });
   
   it.skip("[TC04] Should Open the Menu options the CC and check it", function () {
    cy.get('.ytp-settings-button').should("be.visible").click();

   });
   
   it.skip("[TC05] Should Pause the video and check it", function () {
    cy.get('.ytp-play-button').should("be.visible").click();
   });

   it.skip("[TC06] Should Play the video and check it", function () {
    cy.get('.ytp-next-button').should("be.visible").click();
   });

   it.skip("[TC07] Should Scrubbaring and check the current state of the progress bar", function () {
    cy.get('.ytp-progress-bar')
    .invoke('val', '0')
    .trigger('change')
    .get('aria-valuenow')
    .should('have.text', '850');
   });

   it.skip("[TC08] Next button check", function () {
    cy.get('.ytp-next-button').should("be.visible").click();
   });

   it.skip("[TC09] Big Size Repro button check", function () {
    cy.get('.ytp-size-button').should("be.visible").click();
   });
  
   it.skip("[TC10] Mini Repro button check", function () {
    cy.get('.ytp-miniplayer-button').should("be.visible").click();
   });
   
   it.skip("[TC11] FullScreen Repro button check", function () {
    cy.get('.ytp-fullscreen-button').should("be.visible").click();
   });

});
