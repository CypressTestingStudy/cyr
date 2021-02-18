/// <reference types="Cypress" />

import { loginNow, navBarCheck } from "../../AmazonFunctions/amazon/Navbar";

describe("Test Suite for egiftCards", function () {
  it("[NavBar] Principal Menu", function () {
    navBarCheck();
    loginNow();
  });
});
