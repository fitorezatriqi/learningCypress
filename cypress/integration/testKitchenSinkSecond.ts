///<reference types="Cypress" />
describe('Learning Window, Viewport, Locations, Navigation and Assertion commands', function(){
    beforeEach(function(){
        cy.visit('https://example.cypress.io');
    });

    it('Test with the Window commands', function(){

        cy.contains('window').click();
        cy.url().should('contain','/commands/window');

        cy.window().should('have.property','top');

        cy.document().should('have.property','charset').and('eq','UTF-8');

        cy.title().should('include','Kitchen Sink');
    })
    it('Test the ViewPort command', function(){

        cy.contains('viewport').click();
        cy.get('#navbar').should('be.visible');
        cy.viewport(320, 480);

        // the navbar should have collapse since our screen is smaller
        cy.get('#navbar').should('not.be.visible');
        cy.get('.navbar-toggle').should('be.visible').click();
        cy.get('.nav').find('a').should('be.visible');

        // lets see what our app looks like on a super large screen
        cy.viewport(2999, 2999);

        // cy.viewport() accepts a set of preset sizes
        // to easily set the screen to a device's width and height

        // We added a cy.wait() between each viewport change so you can see
        // the change otherwise it is a little too fast to see :)

        cy.viewport('macbook-15');
        cy.wait(200);
        cy.viewport('macbook-13');
        cy.wait(200);
        cy.viewport('macbook-11');
        cy.wait(200);
        cy.viewport('ipad-2');
        cy.wait(200);
        cy.viewport('ipad-mini');
        cy.wait(200);
        cy.viewport('iphone-6+');
        cy.wait(200);
        cy.viewport('iphone-6');
        cy.wait(200);
        cy.viewport('iphone-5');
        cy.wait(200);
        cy.viewport('iphone-4');
        cy.wait(200);
        cy.viewport('iphone-3');
        cy.wait(200);

        // cy.viewport() accepts an orientation for all presets
        // the default orientation is 'portrait'
        cy.viewport('ipad-2', 'portrait');
        cy.wait(200);
        cy.viewport('iphone-4', 'landscape');
        cy.wait(200);
    });
    it("Examples with assertion", function(){

        cy.contains('expect').click();

        cy.get('.assertion-table')
            .find('tbody tr:last')
            .should('have.class','success')
            .find('td')
            .first()
            .should('have.text', 'Column content')
            .should('contain','Column content')
            .should('have.html','Column content')
        cy.get('.assertion-table')
            .find('tbody tr:last')
            .contains('td',/column content/i)
            .should('be.visible')

        //Using .and() function
        cy.get('.assertion-link')
            .should('have.class','active')
            .and('have.attr','href')
            .and('include','cypress.io')












    })
});
