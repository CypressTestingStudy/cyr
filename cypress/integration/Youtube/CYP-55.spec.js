// type definitions for Cypress object "cy"
/// <reference types="cypress"/>

describe("Best of YouTube - Learning filter and asset options", function () {
  beforeEach(function () {
    //BaseURl
    cy.youtubeWebSite();
  });

  after(function () {
    //To end the test, pausing the video and go to Youtube home
    cy.get(".ytp-play-button").click();
    cy.get(
      "#start > ytd-topbar-logo-renderer.style-scope > #logo > div.style-scope > #logo-icon"
    )
      .click()
      .end();
  });

  // Method to select the filter Learning and play a video from the list
  it("Pausing and Play again", function () {
    //Pausing the add
    cy.wait(3000);
    cy.get(".ytp-play-button").click();
    cy.scrollTo("top");
    //Playing the video again
    cy.wait(3000);
    cy.get(".ytp-play-button").click();
    cy.scrollTo("top");
  });

  it("Forward & Rewind", function () {
    //Forward
    cy.get(".ytp-progress-bar-padding").click(600, 10);
    cy.scrollTo("top");
    cy.wait(10000);

    //Rewind
    cy.get(".ytp-progress-bar-padding").click(100, 10);
    cy.scrollTo("top");
    cy.wait(10000);
  });

  it("Screen resize", function () {
    //Screen resize
    cy.get(".ytp-size-button").click();
    cy.scrollTo("top");
    cy.wait(5000);
  });

  it("Close caption", function () {
    //Close caption
    cy.get(".ytp-subtitles-button").click();
    cy.scrollTo("top");
    cy.wait(5000);
  });

  it.skip("Speed setting", function () {
    //Speed setting
    cy.get('button[class-"ytp-button ytp-settings-button"]').click();
    cy.contains("Playback speed").click();
    cy.contains("0,5").click();
    cy.scrollTo("top");
    cy.log("Play back speed on");
    cy.wait(10000);

    //Speed setting
    cy.get('button[class-"ytp-button ytp-settings-button"]').click();
    cy.contains("Playback speed").click();
    cy.contains("normal").click();
    cy.scrollTo("top");
    cy.log("Play back speed on");
    cy.wait(10000);
  });
});
