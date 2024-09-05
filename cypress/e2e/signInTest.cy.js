/// <reference types="cypress" />

///testemailpractise@gmail.com pass: Testowy123.

describe("E2E - Checking login tab", ()=> {
    it("Is it possible to login with upperCase letters Email", ()=>{
        cy.visit("/index.php")
        cy.get('.login').click()
        cy.login('TESTEMAILPRACTISE@GMAIL.COM', 'Testowy123.')
    })
    it("Is it NOT possible to login with upperCase letters Password and if is appearing an alert", ()=>{
        cy.visit("/index.php")
        cy.get('.login').click()
        cy.login('testemailpractise@gmail.com', 'TESTOWY123.')
        cy.get('.alert').should('contain.text', 'Authentication failed.')
    })
    it("Is it NOT possible to login with lowerCase letters Password and if is appearing an alert", ()=>{
        cy.visit("/index.php")
        cy.get('.login').click()
        cy.login('testemailpractise@gmail.com', 'testowy123.')
        cy.get('.alert').should('contain.text', 'Authentication failed.')
    })
    it("Is it possible to login with propper Login", ()=>{
        cy.visit("/index.php")
        cy.get('.login').click()
        cy.login('testemailpractise@gmail.com', 'Testowy123.')
        cy.get('.logout').click()
    })
    it("Is it NOT possible to make an account without at sign in email", ()=> {
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get('input#email_create[name="email_create"][data-validate="isEmail"]').type("testEmailGmail.com")
        cy.get('button#SubmitCreate[name="SubmitCreate"]').click()
        cy.get('.alert#create_account_error').should('contain.text', 'Invalid email address.')
    })
    it("Is it NOT possible to make an account without DOT in email", ()=> {
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get('input#email_create[name="email_create"][data-validate="isEmail"]').type("testEmail@Gmailcom")
        cy.get('button#SubmitCreate[name="SubmitCreate"]').click()
        cy.get('.alert#create_account_error').should('contain.text', 'Invalid email address.')
    })
    it("Is it NOT possible to make an account with invalid domain at the end in email", ()=> {
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get('input#email_create[name="email_create"][data-validate="isEmail"]').type("testEmail@Gmail.")
        cy.get('button#SubmitCreate[name="SubmitCreate"]').click()
        cy.get('.alert#create_account_error').should('contain.text', 'Invalid email address.')
    })
    it("Is it NOT possible to retrieve an account without AT sign in email", ()=> {
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.contains('[title="Recover your forgotten password"]', 'Forgot your password?').click()
        cy.get('#email').type('testEmailGmail.com')
        cy.get('button').contains("Retrieve Password").click()
        cy.get('.alert').should('contain.text', 'Invalid email address.')
    })
    it("Is it NOT possible to retrieve an account without DOT in email", ()=> {
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.contains('[title="Recover your forgotten password"]', 'Forgot your password?').click()
        cy.get('#email').type('testEmail@gmailcom')
        cy.get('button').contains("Retrieve Password").click()
        cy.get('.alert').should('contain.text', 'Invalid email address.')
    })
    it("Is it NOT possible to retrieve an account with invalid domain at the end in email", ()=> {
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.contains('[title="Recover your forgotten password"]', 'Forgot your password?').click()
        cy.get('#email').type('testEmail@gmail.')
        cy.get('button').contains("Retrieve Password").click()
        cy.get('.alert').should('contain.text', 'Invalid email address.')
    })
})


