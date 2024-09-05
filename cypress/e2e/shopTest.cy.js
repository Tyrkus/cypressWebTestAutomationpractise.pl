/// <reference types="cypress" />

describe("E2E - Testing shop functionality ", ()=>{
    it("Testing function sort by", ()=>{
        cy.visit("/index.php?id_category=3&controller=category") 

        cy.get('select#selectProductSort').find('option').then(options => {
            options.each((index, option) => {
                cy.get('select#selectProductSort').select(option.text);
            })
        })
    })
    it("Testing categories, checkboxes", ()=>{
        cy.visit("/index.php?id_category=3&controller=category")
        cy.get('#ul_layered_category_0').find('input[class="checkbox"]').each(($checkbox) => {
            cy.wrap($checkbox).check({force: true})
            cy.wrap($checkbox).should('be.checked')
            cy.wrap($checkbox).uncheck({ force: true })
            cy.wrap($checkbox).should('not.be.checked')
        })
    })
    it("Testing size, checkboxes", ()=>{
        cy.visit("/index.php?id_category=3&controller=category")
        cy.get('#ul_layered_id_attribute_group_1').find('input[class="checkbox"]').each(($checkbox) => {
            cy.wrap($checkbox).check({force: true})
            cy.wrap($checkbox).should('be.checked')
            cy.wrap($checkbox).uncheck({ force: true })
            cy.wrap($checkbox).should('not.be.checked')
        })
    })  
    it("Testing color, checkboxes/buttons ", ()=>{
        cy.visit("/index.php?id_category=3&controller=category")
        cy.get('#ul_layered_id_attribute_group_3').find('li').each( (option) => {
            cy.wrap('li[type="button"]').check({force: true})
        })
        
    })
    it("Testing properties, checkboxes", ()=>{
        cy.visit("/index.php?id_category=3&controller=category")
        cy.get('#ul_layered_id_feature_7').find('input[class="checkbox"]').each(($checkbox) => {
            cy.wrap($checkbox).check({force: true})
            cy.wrap($checkbox).should('be.checked')
            cy.wrap($checkbox).uncheck({ force: true })
            cy.wrap($checkbox).should('not.be.checked')
        })
    })
    it("Testing compositions and styles, checkboxes", ()=>{
        cy.visit("/index.php?id_category=3&controller=category")
        cy.get('#ul_layered_id_feature_6').find('input[class="checkbox"]').each(($checkbox) => {
            cy.wrap($checkbox).check({force: true})
            cy.wrap($checkbox).should('be.checked')
            cy.wrap($checkbox).uncheck({ force: true })
            cy.wrap($checkbox).should('not.be.checked')
        })
    })
    it("Testing availability and condition, checkboxes", ()=>{
        cy.visit("/index.php?id_category=3&controller=category")
        cy.get('#ul_layered_quantity_0').find('input[class="checkbox"]').each(($checkbox) => {
            cy.wrap($checkbox).check({force: true})
            cy.wrap($checkbox).should('be.checked')
            cy.wrap($checkbox).uncheck({ force: true })
            cy.wrap($checkbox).should('not.be.checked')
        })
    })
    it("Is it possible to add product to cart which is in stock", ()=>{
        cy.visit("/index.php")
        cy.get('.login').click()
        cy.login('testemailpractise@gmail.com', 'Testowy123.')
        cy.get('a[title="Women"]').contains('Women').click()
        cy.get('#uniform-layered_quantity_1').click()
    })
})
