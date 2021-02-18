/// <reference types="Cypress" />

import { addProduct, buyNow } from "../../AmazonFunctions/amazon/Products";

describe("Test Suite for not logging user", function () {
  it("[BuyNow] Buy a product since Cart screen and the user is not logged in", function () {
    addProduct();
    buyNow();
  });
});
