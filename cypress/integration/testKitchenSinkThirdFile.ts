///<reference types="Cypress" />
describe('Test using the Querying functions', function(){
    beforeEach(function(){
        cy.visit('https://example.cypress.io')
    })
    it('Some tests with the get command', function(){

        cy.contains('get').click();

        //get()
        cy.get('#query-btn').should('contain','Button');
        cy.get('.query-btn').should('contain','Button');

        cy.get('[data-test-id="test-example"]').should('have.class','example');

        cy.get('[data-test-id="test-example"]')
            .invoke('attr','data-test-id')
            .should('equal','test-example');

        cy.get('[data-test-id="test-example"]')
            .invoke('css','position')
            .should('equal','static');

        cy.get('[data-test-id="test-example"]')
            .should('have.attr','data-test-id','test-example')
            .and('have.css','position','static');

        //contains()
        cy.get('.query-list')
            .contains('bananas').should('have.class','third');
        cy.get('.query-list')
            .contains('apples').should('have.class','first');
        cy.get('.query-list')
            .contains(/^b\w+/).should('have.class','third');
        cy.get('#querying')
            .contains('ul','oranges')
            .should('have.class','query-list');
        cy.get('.query-button')
            .contains('Save Form')
            .should('have.class','btn');
        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr','placeholder','Email');
            cy.get('input:last').should('have.attr','placeholder','Password');

           // cy.root().should('match','html')
           // cy.get('.query-ul').within(() =>{
           // cy.root().should('have.class','query-ul')})
            //Worst
            cy.get('button').click();
            //Bad
            cy.get('.btn.btn-large').click();
            cy.get('[name=sub]')

        })

    })
});