/// <reference types="cypress" />

/// New User

describe("CPY-21", function () {
    it("New user", function () {
        cy.amazonWebSite();
        cy.get("#nav-link-accountList").click();
        cy.get("#createAccountSubmit").click();
        cy.get("#ap_customer_name").type("Christian");
        cy.get("#ap_email").type("cristiantbon@gmail.com");
        cy.get("#ap_password").type("123456");
        cy.get("#ap_password_check").type("123456");
        cy.get('label[for="ap_customer_name"]').should(
          "have.text",
          "\n      Your name\n    "
        );
      });
  });

/// User already created

describe("CPY-22", function () {
    it("New user", function () {
        cy.amazonWebSite();
        cy.get("#nav-link-accountList").click();
        cy.get("#createAccountSubmit").click();
        cy.get("#ap_customer_name").type("Christian");
        cy.get("#ap_email").type("cristiantbon@gmail.com");
        cy.get("#ap_password").type("123456");
        cy.get("#ap_password_check").type("123456");
        cy.get('label[for="ap_customer_name"]').should(
          "have.text",
          "\n      Your name\n    "
        );
        cy.get("#continue").click();
        cy.get('h4[class="a-alert-heading"]').should(
          "have.text",
          "Important Message!Email address already in use"
        );
      });
  });

/// Empty values in form

describe("CPY-6", function () {
    it("New user", function () {
        cy.amazonWebSite();
        cy.get("#nav-link-accountList").click();
        cy.get("#createAccountSubmit").click();
        cy.get("#ap_customer_name").type("Christian");
        cy.get("#ap_email").type("cristiantbon@gmail.com");
        cy.get("#continue").click();
        cy.get("#auth-password-missing-alert").should(
          "have.text",
          "\n  Enter your password\n"
        );
      });
  });
