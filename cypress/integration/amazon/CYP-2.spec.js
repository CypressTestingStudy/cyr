/// <reference types="Cypress" />

import { loginNow, navBarCheck } from "../../functions/amazon/Navbar";

describe("Test Suite for egiftCards", function () {
  it.skip("[NavBar] Principal Menu", function () {
    navBarCheck();
    loginNow();
  });
});
