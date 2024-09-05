
Cypress.Commands.add('login', (email, password) => { 
    cy.get('input#email').type(email)
    cy.get('input#passwd').type(password)
    cy.get('button#SubmitLogin').click()
 })

import 'cypress-file-upload'