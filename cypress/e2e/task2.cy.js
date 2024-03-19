/// <reference types="cypress" />
describe('nopcommerce functionalities', () => {
    before(()=>{
        const email = "admin@yourstore.com"; 
        const password = "admin"
        // custom command 
        cy.login(email,password)
        cy.wait(3000);
        cy.add_products();
    });


//validate that the user can search for the product
    beforeEach(()=>{
        cy.contains("a","Catalog").click();
        cy.wait(1000);
        cy.contains("p","Products").click({force: true});
        cy.get("#SearchProductName").type("laptop123");
        cy.screenshot({capture:"runner"});
        cy.get("#search-products").click();
        //cy.wait(3000);

    });

    

    it('validate that the user can delete products', () => {
        //cy.contains("a","Catalog").click();
        //cy.wait(1000);
        //cy.contains("p","Products").click({force: true});
        cy.get("#SearchProductName").type("laptop123");
        cy.get("#search-products").click();
        cy.wait(1000);
        cy.get('input.mastercheckbox').first().click({force: true});
        //cy.wait(1000);
        cy.get("#delete-selected").click();
        cy.get("#delete-selected-action-confirmation-submit-button").click({force: true});
        cy.wait(1000);

        //assertions
        cy.contains("No data available in table").should("be.visible");
        
    });
});