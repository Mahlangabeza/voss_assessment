/// <reference types="Cypress"/>
import LoginToUltimateQa from "../pages/login"

describe('Login and out', () => {
    const loginToUltimateQa = new LoginToUltimateQa()
    before(() => {
        loginToUltimateQa.navigate()
         })
    
    it('should be able to login and logout', () => {
        cy.fixture('testData.json').as('userData')
        cy.get('@userData').then((user) => {
            loginToUltimateQa.login(user.email, user.password)
        })
        loginToUltimateQa.logout()
    })
   
})