/// <reference types="Cypress" />

import {
  searchPage,
  selectProduct,
  selectQuantity,
  addToTheCart,
  checkCart,
  selectProduct2,
  buyNowItem,
} from "../AmazonFunctions/SelectProduct";
describe("Add available Item to the cart", function () {
  it("Select more than one product and add to the cart", function () {
    searchPage();
    selectProduct();
    selectQuantity();
    addToTheCart();
  });
});

describe("Buy an available item", function () {
  it("Select one product and click on Buy Now", function () {
    searchPage();
    selectProduct2();
    buyNowItem();
  });
});

describe("Add available Item to the cart and check it", function () {
  it("Select more than one product and add to the cart and validate that the product is on the cart", function () {
    searchPage();
    selectProduct();
    selectQuantity();
    addToTheCart();
    checkCart();
  });
});
