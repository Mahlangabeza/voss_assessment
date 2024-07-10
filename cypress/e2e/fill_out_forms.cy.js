/// <reference types="Cypress"/>

import FillOutFormsPage from "../pages/filling_out_forms"

describe('fill out both forms', () => {
    const fillOutForms = new FillOutFormsPage()
    beforeEach(() => {
        cy.visit('/filling-out-forms/')
        cy.url().should('contain','filling-out-forms')
    })

    it('fill out the form without the captcha', () => {
        cy.fixture('testData.json').as('userData')
        cy.get('@userData').then((user) => {
            fillOutForms.formWithoutCaptcha(user.name, user.message)
        })
    })

    it('fill out the form with a captcha', () => {
       cy.fixture('testData.json').as('testData')
       cy.get('@testData').then((userData) => {
        fillOutForms.formWithAcaptcha(userData.name, userData.message)
       })
    })
})