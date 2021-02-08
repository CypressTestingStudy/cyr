/// <reference types="Cypress" />

import { addProduct } from "../../AmazonFunctions/addProducts";

describe("Add products and buy them", () => {
  it("FR-BUY", () => {
    addProduct();
  });
});
