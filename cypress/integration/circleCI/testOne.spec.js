/// <reference types="cypress" />

describe('Fist Tests', function () {

    before(function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.wait(2000);
    });
    it('Array Method in command', function () {
       cy.getVege('Cucumber');
    });
    it('Array Method in command', function () {
        cy.getVege('Carrot');
     });
     it('Array Method in command', function () {
        cy.getVege('Tomato');
     });
     it('Array Method in command', function () {
        cy.getVege('Beans');
     });
});