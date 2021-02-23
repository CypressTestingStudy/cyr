/// <reference types="Cypress" />

import { addProductNotA, buyNow } from "../../AmazonFunctions/amazon/Products";

describe("Test Suite for not logging user buying a product not available", function () {
  it("[BuyNow] Try to buy a product not available", function () {
    addProductNotA();
  });
});
