/// <reference types="cypress" />

describe("E2E - wgrywanie pliku", ()=> {
    it("Is it possible to choose all subject headings", ()=>{
        cy.visit("/index.php?controller=contact")
        cy.get('#id_contact').then(select => {
            cy.wrap(select).find("option").each(option => {
                cy.wrap(select).select(option.text())
            })
        })
    })
    it("Is it possible to upload file?", () => {
        cy.visit("/index.php?controller=contact")
        cy.get("#fileUpload").attachFile("../fixtures/ss1.png")
        cy.get("span.filename").should("contain", "ss1.png")
    })
    it("Is it not possible to send message without proper email", ()=>{
        cy.visit("/index.php?controller=contact")
        cy.get('input#email[name="from"]').type('testgmail.com')
        cy.get('button#submitMessage[name="submitMessage"]').click()
        cy.get('#center_column > div > ol > li').should('contain.text', 'Invalid email address.')
    })
    it("Is it possible to send message without order reference", ()=> {
        cy.visit("/index.php?controller=contact")
        cy.get('#id_contact').select('Customer service')
        cy.get('input#email[name="from"]').type('test@gmail.com')
        cy.get("#fileUpload").attachFile("../fixtures/ss1.png")
        cy.get("span.filename").should("contain", "ss1.png")
        cy.get('textarea#message[name="message"]').type("Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...")
        cy.get('button#submitMessage[name="submitMessage"]').click()
        cy.get('#center_column > p').should('contain.text', 'Your message has been successfully sent to our team.')
    })
    it("Is it possible to send message with order reference", ()=> {
        cy.visit("/index.php?controller=contact")
        cy.get('#id_contact').select('Webmaster')
        cy.get('input#email[name="from"]').type('test@gmail.com')
        cy.get('input#id_order[name="id_order"]').type('12321312')
        cy.get("#fileUpload").attachFile("../fixtures/ss1.png")
        cy.get("span.filename").should("contain", "ss1.png")
        cy.get('textarea#message[name="message"]').type("Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...")
        cy.get('button#submitMessage[name="submitMessage"]').click()
        cy.get('#center_column > p').should('contain.text', 'Your message has been successfully sent to our team.')
    })
})