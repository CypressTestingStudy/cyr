/// <reference types="Cypress" />

import {loginNow, navBarCheck} from "../AmazonFunctions/Navbar";

describe("Test Suite for egiftCards", function () {
  it("[NavBar] Principal Menu", function () {
    navBarCheck();
    loginNow();
  });
});