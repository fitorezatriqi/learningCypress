///<reference types="Cypress" />

// describe('Test', function(){
//     it('First Test inside the Kitchen sink', function(){
//         //Visit Kitchen Sink
//         cy.visit('https://example.cypress.io')
//
//         //Search for "within" link
//         cy.contains('within').click()
//         cy.url()
//             .should('include','/commands/querying')
//
//         //Type Fitore in the "Name" textbox
//         cy.get('#inputName')
//             .type('Fitore')
//             .should('have.value','Fitore')
//
//         //Type email in "Email" textbox
//         cy.get('#inputEmail')
//             .type('fitore@imbus-peja.de')
//             .should('have.class','form-control')
//             .should('have.value','fitore@imbus-peja.de')
//
//         //Type password in "Password" field
//         cy.get('#inputPassword')
//             .type('imbus')
//             .should('have.value','imbus')
//
//         //Search for "Selecting Elements: Best Practice Guide
//         cy.contains('Selecting Elements: Best Practices Guide').click()
//
//     })
// })
//------------------------get------------------------------------------------------------------------------------------
// describe('The second test inside the Kitchen Sink', function(){
//
//     it('Examples with get', function(){
//         cy.visit('http://example.cypress.io')
//
//         cy.contains('get').click()
//             cy.url()
//                 .should('include','/commands/querying')
//
//         cy.get('#query-btn')
//             .should('contain', 'Button')
//
//         cy.get('.query-btn')
//         .should('contain','Button')
//
//         cy.get('.query-list')
//             .contains('bananas').should('have.class','third')
//
//         cy.get('.query-list')
//             .contains(/^a\w+/).should('have.class','first')
//
//         cy.get('#querying')
//             .contains('ul','oranges')
//             .should('have.class','query-list')
//
//         cy.get('.query-button')
//             .contains('Save Form')
//             .should('have.class','btn')
//
//         cy.get('.query-form').within(() =>{
//         cy.get('input:first').should('have.attr','placeholder','Email')
//         cy.get('input:last').should('have.attr','placeholder','Password')
//     });
//         cy.root().should('match', 'html')
//
//         cy.get('.query-ul').within(() => {
//             // In this within, the root is now the ul DOM element
//             cy.root().should('have.class', 'query-ul')
//         })
//     })
// });
//----------------------------------------contains----------------------------------------------------------------------
// describe('Testing the "contains" function', function(){
//     it('some tests for contains function', function(){
//
//         cy.visit('http://example.cypress.io');
//         cy.contains('contains').click();
//
//         cy.get('#query-btn').should('contain','Button');
//         cy.get('.query-btn').should('contain','Button');
//
//         cy.get('[data-test-id="test-example"]').should('have.class','example');
//
//         cy.get('[data-test-id="test-example"]')
//             .invoke('attr','data-test-id')
//             .should('equal','test-example');
//         cy.get('[data-test-id="test-example"]')
//             .should('have.attr','data-test-id','test-example')
//             .and('have.css','position','static');
//
//         cy.get('.query-list')
//             .contains('banana').should('have.class','third');
//         cy.get('.query-list')
//             .contains(/^b\w+/).should('have.class','third');
//         cy.get('.query-list')
//             .contains('apples').should('have.class','first');
//
//         cy.get('.query-form').within(()=>{
//             cy.get('input:first').should('have.attr','placeholder','Email')
//             cy.get('input:last').should('have.attr','placeholder','Password')
//             });
//         //-------------Best Practices: Selecting Elements----------------------------
//         //Worst - too generic, no context
//         //cy.get('button').click();
//         //Bad. Coupled to styling. Highly subject to change
//         cy.get('.btn.btn-large').click();
//         //Average
//         cy.get('[name=submission]').click();
//         //Better, but still coupled to styling or JS event listeners
//         cy.get('#main').click();
//         //Slightly better
//         cy.get('#main[role=button]').click();
//         //Much better. But still coupled to text content that mar change
//         cy.contains('Submit').click();
//         //Best. Insulated from all changes
//         cy.get('[data-cy=submit]').click()
//
//     })
// });
//-----------------------------Traversal--------------------------------------------------------------------------------
// describe('Examples in Kitchen Sink', function(){
//     it('Traversal cases', function(){
//         cy.visit('http://example.cypress.io');
//
//         cy.contains('children').click();
//
//         //children()
//         cy.get('.traversal-breadcrumb')
//             .children('.active')
//             .should('contain', 'Data');
//
//         //closest
//         cy.get('.traversal-badge')
//             .closest('ul')
//             .should('have.class','list-group');
//
//         //.eq()
//         cy.get('.traversal-list>li')
//             .eq(1).should('contain','siamese');
//
//         //.filter()
//         cy.get('.traversal-nav>li')
//             .filter('.active').should('contain','About');
//
//         //.find()
//         cy.get('.traversal-pagination').find('li')
//             .find('a').should('have.length','7');
//
//         //.first()
//         cy.get('.traversal-table td')
//             .first().should('contain','1');
//
//         //.last()
//         cy.get('.traversal-buttons .btn')
//             .last().should('contain','Submit');
//
//         //.next()
//         cy.get('.traversal-ul')
//             .contains('apples').next().should('contain', 'oranges');
//
//         //.nextAll()
//         cy.get('.traversal-next-all')
//             .contains('oranges')
//             .nextAll().should('have.length',3);
//         //nextUntil()
//         cy.get('#veggies')
//             .nextUntil('#nuts').should('have.length',3);
//         //not()
//         cy.get('.traversal-disabled .btn')
//             .not('[disabled]').should('not.contain','Disabled');
//         //parent()
//         cy.get('.traversal-mark')
//             .parent().should('contain','Morbi leo risus');
//         //parents()
//         cy.get('.traversal-cite')
//             .parents().should('match','blockquote');
//         //parentsUntil()
//         cy.get('.clothes-nav')
//             .find('.active')
//             .parentsUntil('.clothes-nav')
//             .should('have.length', 2);
//         //prev()
//         cy.get('.birds').find('.active')
//             .prev().should('contain','Lorikeets');
//         //prevAll()
//         cy.get('.fruits-list').find('.third')
//             .prevAll().should('have.length',2);
//         //prevUntil()
//         cy.get('.foods-list').find('#nuts')
//             .prevUntil('#veggies').should('have.length', 3)
//         //siblings()
//         cy.get('.traversal-pills .active')
//             .siblings().should('have.length',2)
//     })
// });
//----------------------------------Actions-----------------------------------------------------------------------------
describe('test', function(){
    it('test1', function(){
        cy.visit('http://example.cypress.io');
        cy.contains('type').click();

        //type()
        cy.get('.action-email')
            .type('fake@email.com').should('have.value', 'fake@email.com')
            .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
            .type('{del}{selectall}{backspace}');
        cy.get('.action-disabled')
            .type('disabled error checking', {force: true})
            .should('have.value', 'disabled error checking');

        //focus()
        cy.get('.action-focus').focus()
            .should('have.class', 'focus')
            .prev().should('have.attr', 'style', 'color: orange;');

        //blur()
        cy.get('.action-blur').type('About to blur').blur()
            .should('have.class','error')
            .prev().should('have.attr','style','color: red;');

        //clear()
        cy.get('.action-clear').type('Clear this text')
            .should('have.value','Clear this text')
            .clear()
            .should('have.value','');

        //submit()
        cy.get('.action-form')
            .find('[type="text"]').type('HALFOFF');
        cy.get('.action-form').submit()
            .next().should('contain','Your form has been submitted!');

        //click()
        cy.get('.action-btn').click();
        cy.get('#action-canvas').click();
        cy.get('#action-canvas').click('topLeft');
        cy.get('#action-canvas').click('top');
        cy.get('#action-canvas').click('topRight');
        cy.get('#action-canvas').click('left');
        cy.get('#action-canvas').click('right');
        cy.get('#action-canvas').click('bottomLeft');
        cy.get('#action-canvas').click('bottom');
        cy.get('#action-canvas').click('bottomRight');
        //click accepts an x and y coordinate
        cy.get('#action-canvas')
            .click(80,75)
            .click(170,75)
            .click(80,165)
            .click(100,185)
            .click(125,190)
            .click(150,185)
            .click(170,165);
        //click multiple elements by passing multiple: true
        cy.get('.action-labels>.label').click({multiple: true});
        //Ignore error checking prior to clicking
        cy.get('.action-opacity>.btn').click({force:true});

        //doubleclicking()
        cy.get('.action-div').dblclick().should('not.be.visible');
        cy.get('.action-input-hidden').should('be.visible');



        //check()
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
            .check().should('be.checked');
        cy.get('.action-radios [type="radio"]').not('[disabled]')
            .check().should('be.checked');
        cy.get('.action-radios [type="radio"]')
            .check('radio1').should('be.checked');
        cy.get('.action-multiple-checkboxes [type="checkbox"]')
            .check(['checkbox1','checkbox2']).should('be.checked');
        cy.get('.action-checkboxes [disabled]')
            .check({force:true}).should('be.checked');
        cy.get('.action-radios [type="radio"]')
            .check('radio3', {force: true}).should('be.checked');

        //uncheck()
        cy.get('.action-check [type="checkbox"]')
            .not('[disabled]')
            .uncheck().should('not.be.checked');
        cy.get('.action-check [type="checkbox"]')
            .check('checkbox1')
            .uncheck('checkbox1').should('not.be.checked');
        cy.get('.action-check [disabled]')
            .uncheck({force: true}).should('not.be.checked');

        //select()
        cy.get('.action-select').select('apples');
        cy.get('.action-select-multiple')
            .select(['apples', 'bananas','oranges']);

        //scrollIntoView()
        cy.get('#scroll-horizontal button ')
            .should('not.be.visible');
        cy.get('#scroll-horizontal button').scrollIntoView()
            .should('be.visible');
        cy.get('#scroll-vertical button').scrollIntoView()
            .should('be.visible');
        cy.get('#scroll-both button').scrollIntoView()
            .should('be.visible');

        //scrollTo()
        cy.get('#scrollable-vertical').scrollTo(250,250);
        cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' });
        cy.get('#scrollable-both').scrollTo('center',{duration: 2000});

        //trigger()
        cy.get('.trigger-input-range')
            .invoke('val', 25)
            .trigger('change')
            .get('input[type=range]').siblings('p')
            .should('have.text', '25')
        
    })
});

//changes from durim :p
