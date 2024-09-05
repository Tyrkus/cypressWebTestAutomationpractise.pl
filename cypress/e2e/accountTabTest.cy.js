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
})