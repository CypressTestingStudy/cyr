/// <reference types="Cypress" />
import WomenTab from '../../functions/fashion/WomenTab'

describe('Buying from women tab', () => {
  const myWomenTab = new WomenTab()

  beforeEach(() => {
    cy.loginFashionPage({ email: 'rodrigo032792@gmail.com', pwd: 'Club2021*' })
  })

  it('verify women tab', () => {
    myWomenTab.getWomenPage()
    cy.title().should('contains', 'Women - My Store')
  })

  it('verify women sub-categories (Tops, Dresses)', () => {
    myWomenTab.getWomenPage()
    myWomenTab.getTopsPage()
    cy.title().should('contains', 'Tops - My Store')
    cy.go('back')
    myWomenTab.getDressesPage()
    cy.title().should('contains', 'Dresses - My Store')
  })

  it('verify left-menu', () => {
    myWomenTab.getWomenPage()
    myWomenTab.checkTopsCategory()
    cy.get('#layered_category_4').should('be.checked')
    myWomenTab.checkCondition()
    cy.get('#layered_condition_new').should('be.checked')
  })

  it('verify views (Grid and List)', () => {
    myWomenTab.getWomenPage()
    myWomenTab.getListView()
    cy.get('ul[class="product_list row list"]').should('exist')
    myWomenTab.getGridView()
    cy.get('ul[class="product_list row grid"]').should('exist')
  })

  it('Select a product and proceed to checkout', () => {
    myWomenTab.getWomenPage()
    myWomenTab.getListView()
    myWomenTab.getAddToCart()
    myWomenTab.getFirstCheckOut()
    myWomenTab.getProceedToCheckoutButton()
    myWomenTab.getProceedToCheckoutButton()
    cy.get('#cgv').check()
    cy.get('#cgv').should('be.checked')
    myWomenTab.getProceedToCheckoutButton()
    cy.get('.cheque').click()
    myWomenTab.getProceedToCheckoutButton()
    cy.get('p[class="alert alert-success"]').should('exist')
    cy.get('p[class="alert alert-success"]').should(
      'have.text',
      'Your order on My Store is complete.',
    )
  })
})
