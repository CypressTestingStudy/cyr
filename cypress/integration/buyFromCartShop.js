/// <reference types="Cypress" />

import { addProduct, buyFromCart } from "../AmazonFunctions/Products";

describe("Test Suite for not logging user", function () {
  it("[BuyNow] Buy a product when the user is on the Cart screen", function () {
    addProduct();
    buyFromCart();
  });
});
