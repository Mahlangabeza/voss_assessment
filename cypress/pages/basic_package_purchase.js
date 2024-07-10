/// <reference types="Cypress"/>

class FakePricingPage {
    purchaseBasicPackage() {
        cy.get('[class="et_pb_button et_pb_pricing_table_button"]').eq(1).scrollIntoView()
        cy.get('[class="et_pb_button et_pb_pricing_table_button"]').eq(1).click()
        cy.get('h1').should('contain','Pick a Plan that Works for Your Business Model').should('be.visible')
        cy.screenshot({overwrite:true})
    }
}

export default FakePricingPage