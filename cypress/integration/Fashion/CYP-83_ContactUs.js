/// <reference types="Cypress" />

import generalData from '../../functions/fashion/generalData'

const genData = new generalData();

describe("Contact us", () => {
    
    beforeEach(function(){
        cy.loginFashionPage({ email: "rodrigo032792@gmail.com", pwd: "Club2021*" });
        cy.wait(3000);
    });


    it("Empty message", () => {
      cy.get('#contact-link > a').click();
      
      //Sending without information
      cy.get('#submitMessage > span').click();

      cy.get('.alert').should('be.visible').then(($alert)=>{
        cy.get('.alert > p').should('contain','1 error');
        cy.get('ol > li').should('have.text','The message cannot be blank.');
      })
    })


    it("without Subject Heading", () => {
      cy.get('#contact-link > a').click();
      
      //Insterting the comment on contact us
      cy.get('#message').type(genData.mesagge);


      //This is the default opción, would be a not necessary step
      cy.get('[name="id_contact"]').select(genData.fakeSelector); 

      //Sending without Subject Heading
      cy.get('#submitMessage > span').click();
      cy.get('.alert').should('be.visible').then(($alert)=>{
        cy.get('.alert > p').should('contain','1 error');
        cy.get('ol > li').should('have.text','Please select a subject from the list provided. ');
      })
    })

    it("without Order Reference", () => {
      cy.get('#contact-link > a').click();
      
      //Insterting the comment on contact us
      cy.get('#message').type(genData.mesagge);

      //Selecting a Subject Heading
      cy.get('[name="id_contact"]').select(genData.subjectHeading);

      //Selecting a Order Reference
      cy.get('[name="id_order"]').select(genData.fakeSelector);

      //Sending without Order Reference
      cy.get('#submitMessage > span').click();
      cy.get('.alert').should('be.visible').then(($alert)=>{
        cy.get('.alert').should('have.text','Your message has been successfully sent to our team.');
      })  
    })


    it("with Order Reference", () => {
      cy.get('#contact-link > a').click();
      
      //Insterting the comment on contact us
      cy.get('#message').type(genData.mesagge);

      //Selecting a Subject Heading
      cy.get('[name="id_contact"]').select(genData.subjectHeading);

      //Selecting a Order Reference
      cy.get('[name="id_order"]').select(genData.orderReference);

      //Sending with Order Reference
      cy.get('#submitMessage > span').click();
      cy.get('.alert').should('be.visible').then(($alert)=>{
        cy.get('.alert').should('have.text','Your message has been successfully sent to our team.');
      })  
    })

  })
  