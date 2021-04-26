import '@testing-library/cypress/add-commands'

Cypress.Commands.add('amazonWebSite', function () {
  cy.visit('https://www.amazon.com/')
})

Cypress.Commands.add('loginFashionPage', function (user) {
  cy.visit('http://automationpractice.com/index.php')
  cy.get('.login').click()
  cy.get('#email').type(user.email)
  cy.get('#passwd').type(user.pwd)
  cy.get('#SubmitLogin > span').click()
  cy.get('.logout')
    .contains('Sign out')
    .should('have.text', '\n\t\t\tSign out\n\t\t')
})

Cypress.Commands.add('loginAmazon', function (user) {
  cy.visit('https://www.amazon.com/')
  cy.contains('Sign in').click()
  cy.get('#ap_email').clear().type(user.email)
  cy.get('.a-button-inner > #continue').click()
  cy.get('#ap_password').clear().type(user.pwd)
  cy.get('#signInSubmit').click()
})

Cypress.Commands.add('selectSectionYT', function (label, sectionTab) {
  cy.visit('https://www.youtube.com/')
  cy.get('#guide-button').click()
  cy.contains(label).click()
  cy.get('ytd-game-details-renderer')
    .find('a')
    .each(function ($el, index, $list) {
      const textSectionTab = $el.find('#title').text()
      if (textSectionTab.includes(sectionTab)) {
        $el.find('#img').click()
      }
    })

  // Command for buying a item  previos selected into the fashion page
  Cypress.Commands.add('buyItemInWomenPage', () => {
    cy.get('.cart_navigation > .button > span').click()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('#cgv').check()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('.cheque').click()
    cy.get('.cart_navigation > .button > span').click()
  })
})
