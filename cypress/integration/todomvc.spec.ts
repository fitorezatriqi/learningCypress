///<reference types="Cypress" />

describe('todo actions', function(){

   beforeEach(() =>{
       cy.visit('http://todomvc-app-for-testing.surge.sh/');

       cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}');

   });
    it('should add a new to do', function(){
        cy.get('label').should('have.text', 'Clean room');
        cy.get('.toggle').should('not.be.checked');
        cy.contains('1 item left');

    })
});
describe('toggling todos',function(){
    it('should toggle test correctly', function(){
      cy.get('.toggle').click();
      cy.get('label').should('have.css','text-decoration-line','line-through',);
    });

    it('should clear completed',function(){
        //cy.get('.toggle').click();
        cy.contains('Clear completed').click();
        cy.get('.todo-list').should('not.have.descendants','li');
        cy.get('.todo-list').should('have.not.descendants','li')
    });

    it('add another tasks',function(){
        cy.get('.new-todo').type('Task Nr 2{enter}');
        cy.get('label:first').should('have.text','Task Nr 2');
        cy.get('.new-todo').type('Task Nr 3{enter}');
        cy.get('label:first').should('have.text','Task Nr 3');
        cy.get('.new-todo').type('Task Nr 4{enter}');
        cy.get('label:first').should('have.text','Task Nr 4');
        cy.contains('3 items left');

    });
    // it('deleting tasks',function(){
    //     cy.get('.destroy:first').click({force:true});
    //     cy.contains('2 items left');
    //     cy.get('.destroy:first').click({force:true});
    //     cy.contains('1 item left')
    //     cy.get('.destroy').click({force:true});
    //     cy.get('.new-todo').should('have.attr','placeholder','What needs to be done?');
    //
    // })
    it('deleting tasks via toggle',function(){

        cy.get('.toggle:first').click();
        cy.contains('2 items left');
        cy.get('.toggle:last').click();
        cy.contains('1 item left');
        cy.contains('Clear completed');
        cy.get('.toggle:first').click();

    })
});