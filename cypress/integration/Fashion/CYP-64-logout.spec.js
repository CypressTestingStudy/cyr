/// <reference types="Cypress" />

describe('Checking cart and sign out', () => {
  it('Checking cart and sign out', () => {
    //test steps
    cy.loginFashionPage({ email: 'rodrigo032792@gmail.com', pwd: 'Club2021*' })
    cy.get('[title="View my shopping cart"]').click()
    cy.get('.navigation_page').contains('cart')
    cy.wait(3000)
    cy.get('.logout').click()
    cy.get('.login').contains('Sign in')
  })
})
