/// <reference types="Cypress" />
import Dresses from "../../functions/fashion/Dresses";
describe("Buying dresses", () => {
    beforeEach(() => {
        cy.loginFashionPage({ email: "rodrigo032792@gmail.com", pwd: "Club2021*" });
    });
    const getIframeDocument = () => {
        return cy
            .get("iframe[class='fancybox-iframe']")
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
        cy.wait(12000);
        getIframeBody().find("#group_1").select("L");
        getIframeBody().find('#wishlist_button').click();
        cy.wait(2000);
        getIframeBody().find("p[class='fancybox-error']").contains('Added to your wishlist');
        cy.wait(2000);
        getIframeBody().find("a[title='Close']").click();
        cy.wait(1000);
        dresses.getCloseIframe().click();
    });
    it("Checkout Evening Dress", () => {
        const dresses = new Dresses();
        cy.wait(3000);
        dresses.getTabDresses().click();
        dresses.getEveningDresses().click();
        dresses.getQuickView().click();
        cy.wait(12000);
        getIframeBody().find("#group_1").select("M");
        getIframeBody().find("i[class='icon-plus']").click();
        getIframeBody().find("a[class='color_pick']").click();
        getIframeBody().find("button[type='submit']").click();
        dresses.getConfirmationAddCart().should("contain.text", "Product successfully added to your shopping cart");
        cy.wait(3000);
        cy.get("a[title='Proceed to checkout']").click();
        cy.get("a[href='http://automationpractice.com/index.php?controller=order&step=1']").click();
        dresses.getCheckOutAddress().click();
        dresses.getAcceptTerms().click();
        dresses.getConfirmCheckOut().click();
        dresses.getChequePayment().click();
        dresses.getFinalConfirm().click();
        dresses.getConfirmationBuy().should('contain.text', "Your order on My Store is complete.");
    });
    it("Buying more than one Summer Dress", () => {
        const dresses = new Dresses();
        cy.wait(3000);
        dresses.getTabDresses().click();
        dresses.getSummerDresses().click();
        dresses.getViewList().click();
        cy.contains("More").first().click();
        dresses.getSizeChange().select("M");
        cy.get("#color_14").click();
        dresses.getAddToCart().click();
        dresses.getConfirmationAddCart().should("contain.text", "Product successfully added to your shopping cart");
        cy.wait(3000);
        cy.get("span[title='Continue shopping']").click();
        dresses.getSummerSection().click();
        dresses.getInformationLastDress().click();
        dresses.getSizeChange().select("L");
        cy.get("i[class='icon-plus']").click();
        cy.get("i[class='icon-plus']").click();
        cy.get("#color_15").click();
        dresses.getAddToCart().click();
        dresses.getConfirmationAddCart().should("contain.text", "Product successfully added to your shopping cart");
        cy.wait(3000);
        cy.get("span[title='Continue shopping']").click();
        cy.get("i[class='icon-minus']").click();
        cy.get("#color_16").click();
        dresses.getAddToCart().click();
        dresses.getConfirmationAddCart().should("contain.text", "Product successfully added to your shopping cart");
        cy.wait(500);
        cy.get("a[title='Proceed to checkout']").click();
        cy.get("a[href='http://automationpractice.com/index.php?controller=order&step=1']").click();
        dresses.getCheckOutAddress().click();
        dresses.getAcceptTerms().click();
        dresses.getConfirmCheckOut().click();
        dresses.getChequePayment().click();
        dresses.getFinalConfirm().click();
        dresses.getConfirmationBuy().should('contain.text', "Your order on My Store is complete.");
    });
});