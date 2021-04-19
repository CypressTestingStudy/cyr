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
 }
 export default Dresses;