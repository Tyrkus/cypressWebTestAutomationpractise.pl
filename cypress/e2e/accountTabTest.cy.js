/// <reference types="cypress" />

describe("Testing my account tab", ()=>{
    it("Is it possible to add wrong address, only state and country is correct (should be possible only US address)", ()=>{
        cy.visit("/")
        cy.get('.login').click()
        cy.login('testemailpractise@gmail.com', 'Testowy123.')
        cy.get('.myaccount-link-list').find('li').eq(0).click()
        cy.get('#address1').type('Kanta')
        cy.get('#city').type('Olsztyn')
        cy.get('#id_state').select('Alabama')
        cy.get('#postcode').type('10685')
        cy.get('#phone').type('999999999')
        cy.get('#submitAddress').click()
    })
    it("Is it possible to delete the address", ()=>{
        cy.visit('/')
        cy.get('.login').click()
        cy.login('testemailpractise@gmail.com', 'Testowy123.')
        cy.get('[title="Addresses"]').contains('My addresses').click()
        cy.get('.btn-default[title="Delete"]').click()
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('ok');  
          });
        cy.get('.alert-warning').should('contain.text', 'No addresses are available.')
    })
    it("Checking button order history and details if is working", ()=>{
        cy.visit("/")
        cy.get('.login').click()
        cy.login('testemailpractise@gmail.com', 'Testowy123.')
        cy.get('[title="Orders"]').contains('Order history and details').click()
        cy.get('.page-heading').should('contain.text', 'Order history')
    })
    it("Checking button Credit slips if is working", ()=>{
        cy.visit("/")
        cy.get('.login').click()
        cy.login('testemailpractise@gmail.com', 'Testowy123.')
        cy.get('[title="Credit slips"]').contains('My credit slips').click()
        cy.get('.page-heading').should('contain.text', 'Credit slips')
    })
    it("Checking button My personal information if is working", ()=>{
        cy.visit("/")
        cy.get('.login').click()
        cy.login('testemailpractise@gmail.com', 'Testowy123.')
        cy.get('[title="Information"]').contains('My personal information').click()
        cy.get('.page-subheading').should('contain.text', 'Your personal information')
    })
    it("Is it possible to add personal information in My personal information TAB", ()=>{
        cy.visit("/")
        cy.get('.login').click()
        cy.login('testemailpractise@gmail.com', 'Testowy123.')
        cy.get('[title="Information"]').contains('My personal information').click()
        cy.get('#id_gender2').check({force: true})
        cy.get('#days').select(3)
        cy.get('#months').select('February')
        cy.get('#years').select('2003')
    })
})