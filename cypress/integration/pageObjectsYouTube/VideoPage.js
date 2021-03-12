class VideoPage {
  getPlayPauseButton() {
    return cy.get(".ytp-play-button.ytp-button");
  }
  getShowControl() {
    return cy.get(".ytp-chrome-bottom");
  }
  getVolumen() {
    return cy.get(".ytp-mute-button");
  }
  getCloseCaption() {
    return cy.get(".ytp-subtitles-button.ytp-button");
  }
  getFullScreen() {
    return cy.get(".ytp-fullscreen-button"); //.ytp-fullscreen-button
  }
  getTheaterScreen() {
    return cy.get(".ytp-size-button.ytp-button");
  }
  getNoAds() {
    return cy.get("#dismiss-button > .yt-simple-endpoint > #button > #text");
  }
  getVelocity() {
    return cy.get(".ytp-button.ytp-settings-button");
  }
  getLyrics() {
    return cy.get(".ytp-caption-segment");
  }
}
export default VideoPage;
