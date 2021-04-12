// type definitions for Cypress object "cy"
/// <reference types="cypress"/>

describe.skip("Best of YouTube - Learning filter and asset options", function () {
  beforeEach(function () {
    //Visiting Youtube
    cy.visit("https://www.youtube.com/");
    cy.wait(1000);

    //Selectiong the filter
    cy.get("#start > #guide-button > #button > #guide-icon")
      .should("be.visible")
      .click();
    cy.get(":nth-child(8) > #endpoint > paper-item.style-scope").click();
    cy.get("h1.style-scope > #title").should("contain", "Learning");

    //Selecting a video ater filter Learning
    cy.get(
      ":nth-child(2) > :nth-child(3) > .ytd-item-section-renderer > :nth-child(1) > #contents > .ytd-shelf-renderer > #scroll-container > #items > :nth-child(3) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > .no-transition > #img"
    ).click();

    //Waitthing and skipping the ads
    /*
    cy.wait(18000);
    cy.get(".ytp-ad-skip-button").click();
    cy.scrollTo("top");
    cy.wait(5000);
    */
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
  it.skip("Pausing and Play again", function () {
    //Pausing the video
    cy.wait(3000);
    cy.get(".ytp-play-button").click();
    cy.scrollTo("top");
    //Playing the video again
    cy.wait(3000);
    cy.get(".ytp-play-button").click();
    cy.scrollTo("top");
  });

  it.skip("Forward & Rewind", function () {
    //Forward
    cy.get(".ytp-progress-bar-padding").click(400, 10);
    cy.scrollTo("top");
    cy.wait(10000);

    //Rewind
    cy.get(".ytp-progress-bar-padding").click(100, 10);
    cy.scrollTo("top");
    cy.wait(10000);
  });

  it.skip("Screen resize", function () {
    //Screen resize
    cy.get(".ytp-size-button").click();
    cy.scrollTo("top");
    cy.wait(5000);
  });

  it.skip("Close caption", function () {
    //Close caption
    cy.get(".ytp-subtitles-button").click();
    cy.scrollTo("top");
    cy.wait(5000);
  });

  it.skip("Speed setting", function () {
    //Speed setting
    cy.get('button[class-".ytp-button ytp-settings-button"]').click();

    cy.contains("Playback speed").click();
    cy.contains("0,5").click({ force: true });
    cy.scrollTo("top");
    cy.log("Play back speed on");
    cy.wait(10000);

    //Speed setting
    cy.get('button[class-"ytp-button ytp-settings-button"]').click();
    cy.contains("Playback speed").click();
    cy.contains("normal").click({ force: true });
    cy.scrollTo("top");
    cy.log("Play back speed on");
    cy.wait(10000);
  });
});
