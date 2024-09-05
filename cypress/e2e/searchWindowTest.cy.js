/// <reference types="cypress" />

describe("E2E - Search window testing", ()=>{
    it("Searching without any sign in search bar", ()=>{
        cy.visit("/")
        cy.get('input#search_query_top[name="search_query"]')
        cy.get('button.btn[type="submit"][name="submit_search"]').click()
        cy.get('p.alert').should('contain.text', 'Please enter a search keyword')
    })
    it("Searching by typing one spacebar", ()=>{
        cy.visit("/")
        cy.get('input#search_query_top[name="search_query"]').type(' ')
        cy.get('button.btn[type="submit"][name="submit_search"]').click()
        cy.get('p.alert').contains('No results were found').should('contain.text', 'No results were found')
    })
    it("Searching by typing 10 spacebars", ()=>{
        cy.visit("/")
        cy.get('input#search_query_top[name="search_query"]').type('          ')
        cy.get('button.btn[type="submit"][name="submit_search"]').click()
        cy.get('p.alert').contains('No results were found').should('contain.text', 'No results were found')
    })
    it("Searching by typing 1 letter", ()=>{
        cy.visit("/")
        cy.get('input#search_query_top[name="search_query"]').type('D')
        cy.get('button.btn[type="submit"][name="submit_search"]').click()
        cy.get('p.alert').contains('No results were found').should('contain.text', 'No results were found')
    })
    it("Searching by typing 2 letter", ()=>{
        cy.visit("/")
        cy.get('input#search_query_top[name="search_query"]').type('Dr')
        cy.get('button.btn[type="submit"][name="submit_search"]').click()
        cy.get('p.alert').contains('No results were found').should('contain.text', 'No results were found')
    })
    it("Searching by typing 3 letter", ()=>{
        cy.visit("/")
        cy.get('input#search_query_top[name="search_query"]').type('Dre')
        cy.get('button.btn[type="submit"][name="submit_search"]').click()
        cy.get('.product_list').eq(0).should('contain.text', 'Dre')
    })
    it("Searching by typing full product name", ()=>{
        cy.visit("/")
        cy.get('input#search_query_top[name="search_query"]').type('Printed Summer Dress')
        cy.get('button.btn[type="submit"][name="submit_search"]').click()
        cy.get('.product_list').eq(0).should('contain.text', 'Printed Summer Dress')
    })
    it("Searching by typing uppercase full product name", ()=>{
        cy.visit("/")
        cy.get('input#search_query_top[name="search_query"]').type('PRINTED SUMMER DRESS')
        cy.get('button.btn[type="submit"][name="submit_search"]').click()
        cy.get('.product_list').eq(0).should('contain.text', 'Printed Summer Dress')
    })
    it("Searching by typing chinese signs", ()=>{
        cy.visit("/")
        cy.get('input#search_query_top[name="search_query"]').type('北京位於華')
        cy.get('button.btn[type="submit"][name="submit_search"]').click()
        cy.get('p.alert').contains('No results were found').should('contain.text', 'No results were found')
    })
    it("Searching by typing arabic signs", ()=>{
        cy.visit("/")
        cy.get('input#search_query_top[name="search_query"]').type('وضع ابن ')
        cy.get('button.btn[type="submit"][name="submit_search"]').click()
        cy.get('p.alert').contains('No results were found').should('contain.text', 'No results were found')
    })
    it("Searching by typing russian signs", ()=>{
        cy.visit("/")
        cy.get('input#search_query_top[name="search_query"]').type('Римский')
        cy.get('button.btn[type="submit"][name="submit_search"]').click()
        cy.get('p.alert').contains('No results were found').should('contain.text', 'No results were found')
    })
    // hinskie znaczki cyrlica, wielki tekst, pusta spacja
})