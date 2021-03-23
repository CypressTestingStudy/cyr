/// <reference types="Cypress" />

import {loginOk} from "../../functions/amazon/Login";

describe("Test Suite for Login Scenarios", function () {
  
  beforeEach(function () {
    cy.loginAmazon({email: 'giracros@me.com', pwd: 'Temporal123'});
  });
  it("[Login] Login OK", function () {
    loginOk();
  });

});
