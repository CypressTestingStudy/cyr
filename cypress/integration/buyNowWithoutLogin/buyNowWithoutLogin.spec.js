/// <reference types="cypress"/>

describe('Buy Now button without Log-in', () => {
    beforeEach( () => {
        cy.visit('https://www.amazon.com/')
    })
    it('Buy Now', () => {
        //cy.get('#\\30 70443fb-0077-4bbf-9c58-b555a179ccca > div.a-section.a-spacing-none.feed-carousel > div > ul > li:nth-child(3) > span > a > img').click();
        //cy.get('#aeba0a24-9083-41a2-9d1d-fcabd620dca7 > .a-spacing-none > .a-section > .a-unordered-list').click();
        cy.get('#twotabsearchtextbox').type('PS4');
        cy.get('#nav-search-submit-button').click();
        cy.get('[data-asin="B074LRF639"] > :nth-child(1) > .celwidget > .s-include-content-margin > .a-spacing-medium > :nth-child(2) > :nth-child(1) > .sg-col-inner > .a-spacing-none > .rush-component > .a-link-normal > .a-section > .s-image').click();
        cy.get('#buy-now-button').click();   
        cy.wait(3000);
        cy.get('#siAddCoverage-announce').click(); 
        cy.get('.a-padding-extra-large > .a-spacing-small').should('contain',"Sign-In");       
    })
})