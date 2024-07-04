describe('On saucedemo.com', () => {
    it('There should be an error message', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('standard');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('exist');
        cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service');
        cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service').should('exist');
    })

    it('It should login successful', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    })

    it('It should open and close the side menu', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#react-burger-cross-btn').click();
    })

    it('It should add a product in the cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="inventory-item-name"]').should('exist');
    })

    it('It should remove a product from cart', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
    })

    it('It should logout successful', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();     
    })
    })
