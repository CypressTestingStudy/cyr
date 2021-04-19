/// <reference types="Cypress" />
import Dresses from "../../functions/fashion/Dresses";
describe("Buying dresses", () => {
    beforeEach(() => {
        cy.loginFashionPage({ email: "rodrigo032792@gmail.com", pwd: "Club2021*" });
    });
    const getIframeDocument = () => {
        return cy
            .get("iframe[class='fancybox-iframe']")
            // Cypress yields jQuery element, which has the real
            // DOM element under property "0".
            // From the real DOM iframe element we can get
            // the "document" element, it is stored in "contentDocument" property
            // Cypress "its" command can access deep properties using dot notation
            // https://on.cypress.io/its
            .its('0.contentDocument').should('exist')
    }

    const getIframeBody = () => {
        // get the document
        return getIframeDocument()
            // automatically retries until body is loaded
            .its('body').should('not.be.undefined')
            // wraps "body" DOM element to allow
            // chaining more Cypress commands, like ".find(...)"
            .then(cy.wrap)
    }
    it("Add WishList Casual Dress", () => {
        const dresses = new Dresses();
        cy.wait(1000);
        dresses.getTabDresses().click();
        dresses.getCasualDresses().click();
        dresses.getQuickView().click();
        cy.wait(6500);
        getIframeBody().find('#wishlist_button').click();
        getIframeBody().find("p[class='fancybox-error']").contains('Added to your wishlist');
        getIframeBody().find("a[title='Close']").click();
        cy.wait(1000);
        cy.get(".fancybox-item").click();
    });
    it("Checkout Evening Dress", () => {
        const dresses = new Dresses();
        cy.wait(1000);
        dresses.getTabDresses().click();
        dresses.getEveningDresses().click();
        dresses.getQuickView().click();
        cy.wait(6500);
        getIframeBody().find("i[class='icon-plus']").click();
        getIframeBody().find("a[class='color_pick']").click();
        getIframeBody().find("button[type='submit']").click();
        cy.get("#layer_cart").should("contain.text", "Product successfully added to your shopping cart");
        cy.get("a[title='Proceed to checkout']").click();
        cy.get("a[href='http://automationpractice.com/index.php?controller=order&step=1']").click();
        cy.get("button[name='processAddress']").click();
        cy.get("input[type='checkbox']").click();
        cy.get("button[name='processCarrier']").click();
        cy.get("a[class='cheque']").click();
        cy.get("button[class*='btn-default button-medium']").click();
        cy.get("p[class*='alert-succes'").should('contain.text', "Your order on My Store is complete.");
    });
    it("Buying more than one Summer Dress", () => {
        const dresses = new Dresses();
        cy.wait(1000);
        dresses.getTabDresses().click();
        dresses.getSummerDresses().click();
        dresses.getViewList().click();
        cy.contains("More").first().click();
        cy.get("#color_14").click();
        cy.get("#add_to_cart").click();
        cy.get("#layer_cart").should("contain.text", "Product successfully added to your shopping cart");
        cy.get("span[title='Continue shopping']").click();
        cy.get('.breadcrumb > [href="http://automationpractice.com/index.php?id_category=11&controller=category"]').click();
        cy.get('.last-in-line > .product-container > :nth-child(1) > .right-block > .right-block-content > .button-container > .lnk_view > span').click();
        cy.get("i[class='icon-plus']").click();
        cy.get("i[class='icon-plus']").click();
        cy.get("#color_15").click();
        cy.get("#add_to_cart").click();
        cy.get("#layer_cart").should("contain.text", "Product successfully added to your shopping cart");
        cy.get("span[title='Continue shopping']").click();
        cy.get("i[class='icon-minus']").click();
        cy.get("#color_16").click();
        cy.get("#add_to_cart").click();
        cy.get("#layer_cart").should("contain.text", "Product successfully added to your shopping cart");
        cy.get("a[title='Proceed to checkout']").click();
        cy.get("a[href='http://automationpractice.com/index.php?controller=order&step=1']").click();
        cy.get("button[name='processAddress']").click();
        cy.get("input[type='checkbox']").click();
        cy.get("button[name='processCarrier']").click();
        cy.get("a[class='cheque']").click();
        cy.get("button[class*='btn-default button-medium']").click();
        cy.get("p[class*='alert-succes'").should('contain.text', "Your order on My Store is complete.");
    });
});