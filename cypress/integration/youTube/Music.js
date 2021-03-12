/// <reference types ="Cypress"/>
import HomePage from "../pageObjectsYouTube/HomePage";
import MusicPage from "../pageObjectsYouTube/MusicPage";
import VideoPage from "../pageObjectsYouTube/VideoPage";
describe("Music module on YouTube", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("All features to reproduce Music videos", function () {
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
    musicPage.getSearchTitle().click();
    //click on the specific video
    const nameVideo = this.data.titleSong;
    musicPage.getSelectedVideo(nameVideo).click();
    //Skip ads
    cy.wait(20000);
    cy.get(".ytp-ad-skip-button-container").should("be.visible").click();
    //pause el video
    cy.wait(5000);
    //move into scroll media player
    //cy.get('.ytp-chapters-container .ytp-hover-progress').should('be.hidden').invoke('show');
    cy.wait(1000);
    // cy.get('#movie_player > .html5-video-container > .video-stream').click(320,320);
    //No advertaising
    videoPage.getNoAds().click();
    //  cy.get('#button').scrollIntoView();
    cy.wait(1000);
    videoPage.getPlayPauseButton().click();
    cy.wait(4000);
    //play the video
    videoPage.getPlayPauseButton().click();
    //pending move to the bar
    //mute and volumn video
    cy.wait(4000);
    videoPage.getVolumen().click();
    cy.wait(4000);
    videoPage.getVolumen().click();
    cy.wait(4000);
    //activate close caption
    videoPage.getCloseCaption().click();
    cy.wait(4000);
    videoPage.getLyrics().should("be.visible");
    //Full Screen
    videoPage.getFullScreen().click();
    cy.wait(8000);
    //Exit Full Screen
    videoPage.getFullScreen().click();
    //Mood Teather
    cy.wait(5000);
    videoPage.getTheaterScreen().click();
    cy.wait(5000);
    //change velocity
    videoPage.getVelocity().click();
    cy.contains(this.data.velocidad).click();
    cy.contains("0.25").click();
    cy.wait(5000);
    cy.contains(this.data.velocidad).click();
    cy.contains("1.75").click();
    cy.wait(5000);
    cy.contains(this.data.velocidad).click();
    cy.contains("Normal").click();
    cy.wait(3000);
    //change quality
    cy.contains(this.data.calidad).click();
    cy.contains("1080").click();
    cy.wait(3000);
  });
});
