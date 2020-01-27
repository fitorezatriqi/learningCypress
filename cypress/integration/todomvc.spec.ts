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
    })
});