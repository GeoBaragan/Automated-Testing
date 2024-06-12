describe('Suita 1', () => {
//Testul numarul 1
    it('functioneaza cu o cautare basic', () =>{
        cy.visit('https://google.com');
        cy.get('#L2AGLb').click();
        cy.get('.truncate').type('vlog de it').type('{enter}');

        cy.get('result-stats').should('exist');


    })
})