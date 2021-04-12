/// <reference types ="Cypress"/>
import HomePage from "../../functions/youtube/HomePage";
import MusicPage from "../../functions/youtube/MusicPage";
import VideoPage from "../../functions/youtube/VideoPage";
describe("Music module on YouTube", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it.skip("All features to reproduce Music videos", function () {
    const homePage = new HomePage();
    const musicPage = new MusicPage();
    const videoPage = new VideoPage();
    cy.visit("https://www.youtube.com");

    const typeModule = this.data.optionType;
    //search Music module
    cy.get("#guide-icon").click();
    cy.wait(1000);
    homePage.getMusicbutton(typeModule).click();
    cy.get("#inner-header-container").should("contain", typeModule);
    //search a specific video
    musicPage.getTitleVideo().type(this.data.singer);
    cy.wait(500);
    musicPage.getSearchTitle().click();
    //click on the specific video
    const nameVideo = this.data.titleSong;
    musicPage.getSelectedVideo(nameVideo).click();
    //Skip ads
    cy.wait(30000);
    // cy.get(".ytp-ad-skip-button-container").should("be.visible").click();
    //pause el video
    videoPage.getPlayPauseButton().click();
    videoPage.getPlayPauseButton().then(function (play) {
      expect(play).to.have.attr("aria-label", "Play (k)");
    });
    cy.wait(4000);
    //play the video
    videoPage.getPlayPauseButton().click();
    videoPage.getPlayPauseButton().then(function (play) {
      expect(play).to.have.attr("aria-label", "Pause (k)");
    });
    //move into scroll media player
    videoPage.getScrollBarMedia().click(300, 10);
    cy.wait(5000);
    videoPage.getScrollBarMedia().click(150, 10);
    cy.wait(5000);
    //mute and volumn video
    videoPage.getVolumen().click();
    videoPage.getVolumen().then(function (play) {
      expect(play).to.have.attr("aria-label", "Unmute (m)");
    });
    cy.wait(4000);
    videoPage.getVolumen().click();
    videoPage.getVolumen().then(function (play) {
      expect(play).to.have.attr("aria-label", "Mute (m)");
    });
    cy.wait(4000);
    //activate close caption
    videoPage.getCloseCaption().click();
    cy.wait(4000);
    videoPage.getLyrics().should("be.visible");
    //Mood Teather
    cy.wait(5000);
    videoPage.getTheaterScreen().click();
    cy.wait(5000);
    //change velocity
    videoPage.getVelocity().click();
    cy.contains(this.data.velocidad).click();
    cy.contains("0.25").click();
    cy.contains("0.25").should("contain", "0.25");
    cy.wait(5000);
    cy.contains(this.data.velocidad).click();
    cy.contains("1.75").click();
    cy.contains("1.75").should("contain", "1.75");
    cy.wait(5000);
    cy.contains(this.data.velocidad).click();
    cy.contains("Normal").click();
    cy.contains("Normal").should("contain", "Normal");
    cy.wait(5000);
    //change quality
    cy.contains(this.data.calidad).click();
    cy.contains("1080").click();
    cy.contains("1080").should("contain", "1080");
    cy.wait(5000);
  });
});
