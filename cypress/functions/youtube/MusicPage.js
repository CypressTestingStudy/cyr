class MusicPage {
  getTitleVideo() {
    return cy.get("#search");
  }
  getSearchTitle() {
    return cy.get("#search-icon-legacy");
  }
  getSelectedVideo(nameVideo) {
    return cy.contains(nameVideo);
  }
}
export default MusicPage;
