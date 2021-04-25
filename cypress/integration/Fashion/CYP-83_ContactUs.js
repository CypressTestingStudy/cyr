/// <reference types="Cypress" />

describe("Contact us", () => {
    
    beforeEach(function(){
        cy.loginFashionPage({ email: "rodrigo032792@gmail.com", pwd: "Club2021*" });
    });


    it("Empty message", () => {
      cy.get('#contact-link > a').click();
      
      //Sending without information
      cy.get('#submitMessage > span').click();
      cy.get('.alert').should('be.visible').then(($alert)=>{
        cy.get('.alert > p').should('contain','1 error');
        cy.get('ol > li').should('have.text','The message cannot be blank.');
      })
      cy.end(); 
    })


    it("without Subject Heading", () => {
      cy.get('#contact-link > a').click();
      
      //Insterting the comment on contact us
      cy.get('#message').type('Message');

      //This is the default opción, would be a not necessary step
      cy.get('[name="id_contact"]').select("-- Choose --"); 

      //Sending without Subject Heading
      cy.get('#submitMessage > span').click();
      cy.get('.alert').should('be.visible').then(($alert)=>{
        cy.get('.alert > p').should('contain','1 error');
        cy.get('ol > li').should('have.text','Please select a subject from the list provided. ');
      })
      cy.end(); 
    })

    it("without Order Reference", () => {
      cy.get('#contact-link > a').click();
      
      //Insterting the comment on contact us
      cy.get('#message').type('Message');

      //Selecting a Subject Heading
      cy.get('[name="id_contact"]').select("Webmaster");

      //Sending without Order Reference
      cy.get('#submitMessage > span').click();
      cy.get('.alert').should('be.visible').then(($alert)=>{
        cy.get('.alert').should('have.text','Your message has been successfully sent to our team.');
      })
      cy.end();      
    })


    it("with Order Reference", () => {
      cy.get('#contact-link > a').click();
      
      //Insterting the comment on contact us
      cy.get('#message').type('Message');

      //Selecting a Subject Heading
      cy.get('[name="id_contact"]').select("Webmaster");

      //Selecting a Order Reference
      cy.get('[name="id_order"]').select("311717");

      //Sending with Order Reference
      cy.get('#submitMessage > span').click();
      cy.get('.alert').should('be.visible').then(($alert)=>{
        cy.get('.alert').should('have.text','Your message has been successfully sent to our team.');
      })
      cy.end();      
    })

  })
  