 class Dresses{
     getTabDresses(){
         return cy.get('.sf-menu > :nth-child(2) > .sf-with-ul');
     }
     getCasualDresses(){
         return cy.get(':nth-child(1) > .subcategory-image > .img > .replace-2x');
     }
     getQuickView(){
         return cy.get('.left-block > .product-image-container');
     }
     getWishList(){
         return cy.get('#wishlist_button');
     }
     getEveningDresses(){
        return cy.get(':nth-child(2) > .subcategory-image > .img > .replace-2x');
    }
    getSummerDresses(){
        return cy.get(':nth-child(3) > .subcategory-image > .img > .replace-2x');
    }
    getViewList(){
        return cy.get("i[class='icon-th-list']");
    }
    getCloseIframe(){
        return cy.get(".fancybox-item");
    }
    getConfirmationAddCart(){
        return cy.get("#layer_cart");
    }
    getCheckOut1(){
        cy.get("a[title='Proceed to checkout']");
    }
    getCheckOut2(){
        return cy.get("a[href='http://automationpractice.com/index.php?controller=order&step=1']");
    }
    getCheckOutAddress(){
        return  cy.get("button[name='processAddress']");
    }
    getAcceptTerms(){
        return cy.get("input[type='checkbox']");
    }
    getConfirmCheckOut(){
        return cy.get("button[name='processCarrier']");
    }
    getChequePayment(){
        return cy.get("a[class='cheque']");
    }
    getFinalConfirm(){
        return cy.get("button[class*='btn-default button-medium']");
    }
    getConfirmationBuy(){
        return cy.get("p[class*='alert-succes'");
    }
    getAddToCart(){
        return cy.get("#add_to_cart");
    }
    getInformationLastDress(){
        return cy.get('.last-in-line > .product-container > :nth-child(1) > .right-block > .right-block-content > .button-container > .lnk_view > span');
    }
    getSummerSection(){
        return cy.get('.breadcrumb > [href="http://automationpractice.com/index.php?id_category=11&controller=category"]');
    }
    getSizeChange(){
        return cy.get("#group_1");
    }
 }
 export default Dresses;