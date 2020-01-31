///<reference types="Cypress" />
describe('Creating tests for todo App',function(){
    beforeEach(()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh/');

    })
    it('Create some tasks in todo App',function(){

        cy.get('.new-todo').should('have.attr','placeholder','What needs to be done?');
        cy.get('.new-todo').type('Task Nr 1');
        cy.get('')


    })
});