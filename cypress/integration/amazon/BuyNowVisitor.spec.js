/// <reference types="Cypress" />

import { addProduct, buyNow } from "../../functions/amazon/Products";

describe("Test Suite for not logging user", function () {
  it.skip("[BuyNow] Buy a product since Cart screen and the user is not logged in", function () {
    addProduct();
    buyNow();
  });
});
