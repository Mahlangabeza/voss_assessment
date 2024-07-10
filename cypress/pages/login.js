/// <reference types="Cypress"/>

class LoginToUltimateQa {
    navigate() {
        cy.visit('https://courses.ultimateqa.com/users/sign_in')
    }

    login(username, password) {
        cy.get('[id="user[email]"]').type(username)
        cy.get('[id="user[password]"]').type(password)
        cy.get('[type="submit"]').click()
        cy.contains('My Dashboard').should('be.visible')
        cy.screenshot({overwrite:true})
    }

    logout() {
        cy.get('[class="fa fa-caret-down"]').click()
        cy.contains('Sign Out').click()
        cy.get('p').should('contain', 'Worldclass Automation Training')
    }
}

export default LoginToUltimateQa