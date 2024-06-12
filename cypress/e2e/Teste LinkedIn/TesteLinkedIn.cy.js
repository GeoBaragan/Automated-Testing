describe('On', () => {
it('I can login', () => {
    cy.visit('https://linkedin.com');
    cy.get('.nav__button-secondary').click();
    cy.get('#username').type('baragangeorgiana98@yahoo.com');
    cy.get('#password').type('ABCD1234');
    cy.get('.btn__primary--large').click();
    cy.get('#ember17').should('exist');



})





})


