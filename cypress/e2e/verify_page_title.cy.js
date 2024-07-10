/// <reference types="Cypress"/>

describe('verify the title of the Ultimate QA page', () => {
    it('verify the title of the page', () => {
        cy.visit('/automation')
        cy.title().should('eq','Automation Practice - Ultimate QA')
        cy.screenshot({overwrite:true})
    })
})