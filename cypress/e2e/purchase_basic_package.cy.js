/// <reference types="Cypress"/>

import FakePricingPage from "../pages/basic_package_purchase"

describe('purchase a basic package', () => {
    before(() => {
        cy.visit('/automation')
        cy.contains('Fake Pricing Page').click()
        cy.get('h1').should('contain','Pick a Plan that Works for Your Business Model').should('be.visible')
    })

    it('should purchase a basic package', () => {
        const fakePricingPage = new FakePricingPage()
        fakePricingPage.purchaseBasicPackage()
    })
})