/// <reference types="cypress"/>

describe('Buy Now button without Log-in', () => {
    beforeEach( () => {
        cy.visit('https://www.amazon.com/')
    })
    it('Buy Now', () => {
        cy.get('#desktop-grid-3').click();   
        cy.get('#buy-now-button').click();   
        cy.get('.a-padding-extra-large > .a-spacing-small').should('contain',"Sign-In");    
    })
})