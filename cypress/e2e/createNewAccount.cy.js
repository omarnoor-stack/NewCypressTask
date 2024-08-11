/// <reference types="cypress" />

describe('Create New Account', () => {
    it('Verify that all the fields,titles and buttons are visible', () => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
        cy.get(".page-title").should("be.visible");
        cy.get(".legend").contains("Personal Information").should("be.visible");
        cy.contains("span","First Name").should("be.visible");
        cy.get("#firstname").should("be.visible");
        cy.contains("span","Last Name").should("be.visible");
        cy.get("#lastname").should("be.visible");
        cy.get(".legend").contains("Sign-in Information").should("be.visible");
        cy.contains("span","Email").should("be.visible");
        cy.get("#email_address").should("be.visible");
        cy.contains("span","Password").should("be.visible");
        cy.get("#password").should("be.visible");
        cy.get("#password-strength-meter").should("be.visible");
        cy.contains("span","Confirm Password").should("be.visible");
        cy.get("#password-confirmation").should("be.visible");
        cy.contains("span","Create an Account").should("be.visible");
        
        
    });

    it.only('Validate that the user can create new account', () => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
        cy.get("#firstname").type("Amani");
        cy.get("#lastname").type("Zaqzouq");
        cy.get("#email_address").type("amani.zaqzouq@gmail.com");
        cy.get("#password").type("amani@123");
        cy.get("#password-confirmation").type("amani@123");
        cy.contains("span","Create an Account").click();
        cy.get("[role=alert]").should("be.visible").and("contain","Welcome To The New Account");
       
        
        
    });
});