/// <reference types="Cypress"/>

class FillOutFormsPage {
    formWithoutCaptcha(name, message) {
        cy.get('#et_pb_contact_name_0').type(name)
        cy.get('#et_pb_contact_message_0').type(message)
        cy.get('[type="submit"]').first().click()
        cy.get('p').should('contain', 'Thanks for contacting us')
    }

    formWithAcaptcha(name, message) {
        cy.get('#et_pb_contact_name_1').type(name)
        cy.get('#et_pb_contact_message_1').type(message)  

        cy.get('.et_pb_contact_captcha_question').invoke('text').then((text) => {
            // Use a regular expression to extract the numbers
            const numbers = text.match(/\d+/g).map(Number);
            
            // Compute the sum of the numbers
            const sum = numbers.reduce((a, b) => a + b, 0);
      
            // Use the computed sum as input for another element
            cy.get('[class="input et_pb_contact_captcha"]').type(sum.toString());
          })
          cy.get('[type="submit"]').last().click()
          cy.get('p').should('contain', 'Thanks for contacting us')
    }
}

export default FillOutFormsPage