/// <reference types="Cypress" />

describe("SetPlan for Best of Youtube - Sports: CYP-57", function () {
  let attr = "";

  it("TC01 - Start reproducing", () => {
    cy.visitYoutube();
    cy.reproduceVideo("Sports");
    cy.wait(4000);
  });
  it("TC02 - Pause the video", () => {
    cy.get(".ytp-play-button").click({ force: true });
    cy.log("I Paused the video");
    cy.get(".ytp-play-button").should("be.visible");
    cy.get(".ytp-play-button")
      .then((button) => {
        attr = button.attr("aria-label");
      })
      .then(() => {
        assert.equal(attr, "Play (k)", "The Play Button is present");
      });
  });
  it("TC03 - Play the video", () => {
    cy.get(".ytp-play-button").click({ force: true });
    cy.log("I Played the video");
    cy.get(".ytp-play-button").should("be.visible");
    cy.get(".ytp-play-button")
      .then((button) => {
        attr = button.attr("aria-label");
      })
      .then(() => {
        assert.equal(attr, "Pause (k)", "The Pause Button is present");
      });
  });
  it("TC04 - Move the progress bar", () => {
    cy.get(".ytp-progress-list").click("bottom", { force: true });
    cy.log("I Moved the progress bar");
    cy.get(".ytp-play-button").click({ force: true });
    cy.wait(2000);
  });
  it("TC05 - Rewind the video", () => {
    cy.get(".ytp-progress-list").click("bottomLeft", { force: true });
    cy.log("I rewinded the video");
    cy.get(".ytp-play-button").click({ force: true });
    cy.wait(2000);
  });
  it("TC06 - Theater mode", () => {
    cy.get('button[class="ytp-size-button ytp-button"]')
      .then((button) => {
        assert.strictEqual(button.attr("aria-label"), "Theater mode (t)");
      })
      .click({ force: true });
    cy.log("Changed to theatre mode");
    cy.wait(2000);
  });
  it("TC07 - Closed captions", () => {
    cy.get('button[class="ytp-subtitles-button ytp-button"]').click({
      force: true,
    });
    cy.get('button[class="ytp-subtitles-button ytp-button"]').then((button) => {
      assert.strictEqual(button.attr("aria-pressed"), "true");
    });
    cy.log("closed captions on");
    cy.wait(2000);
  });
  it("TC08 - Playback speed", () => {
    cy.get('button[class="ytp-button ytp-settings-button"]').click();
    cy.contains("Playback speed").click();
    cy.contains("0.5").click({ force: true });
    cy.log("Playback speed on");
    cy.wait(2000);
  });
});
