/// <reference types="cypress" />
describe('Selectors', () => {
    it('Find selectors for conduit site', () => {
        cy.visit("https://demo.productionready.io/#/register");
        cy.get(".navbar-brand ");
        cy.get(".nav-item").find("a").first();
        cy.get(".nav-item").eq(2);
        cy.get("h1");
        cy.get("a").contains("Have an account?");
        cy.get("[type=text]").first();
        cy.get("[type=email]");
        cy.get("[placeholder=Password]");
        cy.get("button");
        cy.get(".container").find("a").eq(10);
        cy.get(".container").find("a").last();
        
    });
});