// type definitions for Cypress object "cy"
/// <reference types="cypress" />

export class US_16 {
  navigator() {
    return cy.visit("https://www.amazon.com/");
  }
  Cart() {
    return cy.get("#nav-cart-count-container");
  }
  CheckText() {
    return cy.get(
      "body.a-m-us.a-aui_149818-c.a-aui_152852-c.a-aui_157141-c.a-aui_160684-c.a-aui_57326-c.a-aui_72554-c.a-aui_accessibility_49860-c.a-aui_attr_validations_1_51371-c.a-aui_bolt_62845-c.a-aui_pci_risk_banner_210084-c.a-aui_perf_130093-c.a-aui_tnr_v2_180836-c.a-aui_ux_113788-c.a-aui_ux_114039-c.a-aui_ux_138741-c.a-aui_ux_145937-c.a-aui_ux_60000-c:nth-child(2) div.a-container.sc-background-dark:nth-child(5) div.a-section.a-spacing-none div.a-fixed-right-flipped-grid:nth-child(7) div.a-fixed-right-grid-inner div.a-fixed-right-grid-col.sc-retail-cart-column-spacing.a-col-left:nth-child(2) div.a-cardui.sc-card-style.sc-list.sc-java-remote-feature.celwidget.sc-card-spacing-top-none:nth-child(4) div.a-cardui-body div.a-row.a-spacing-top-extra-large:nth-child(2) div.a-column.a-span8.a-span-last:nth-child(2) div.a-row.sc-your-amazon-cart-is-empty:nth-child(1) > h2:nth-child(1)"
    );
  }
}
