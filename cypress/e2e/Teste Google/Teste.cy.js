describe('Suita 1', () => {
//Testul numarul 1
    it('functioneaza cu o cautare basic', () =>{
        cy.visit('https://google.com');
        cy.get('#L2AGLb > .QS5gu').click();
        cy.get('#APjFqb').type('vlog de it').type('{enter}');

        cy.get('#rso > :nth-child(1) > .MjjYud > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').should('exist');


    })
})