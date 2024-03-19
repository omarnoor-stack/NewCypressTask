// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login',(email,password)=>{
    cy.visit("https://admin-demo.nopcommerce.com/login");
    cy.get("#Email")
    cy.get("#Password")
    cy.get(".login-button").click();
})

Cypress.Commands.add('add_products',()=>{
    cy.contains("a","Catalog").click();
        cy.wait(1000);
        cy.contains("p","Products").click({force: true});
        cy.get("[href='/Admin/Product/Create']").click();
        cy.wait(1000);
        cy.get("#Name").type("laptop123");
        //cy.wait(1000);
        cy.get("#SelectedCategoryIds").select('Computers',{ force: true });
        cy.wait(1000);
        //cy.get(".k-formatted-value.k-input").eq(1).clear().type(3000,{ force: true });
        cy.get("#Price").type('3000',{ force: true });
        cy.get("[name=save]").click();

        //assertions
        cy.contains(".alert-dismissable","The new product has been added successfully.").should("be.visible");
})