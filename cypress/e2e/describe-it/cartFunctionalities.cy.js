/// <reference types="cypress" />

describe('Check cart functionalities', () => {

    beforeEach(()=>{
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get("#search").type("shirt{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.get("#option-label-size-143-item-168").click();
        cy.get("#option-label-color-93-item-57").click();
        cy.wait(1000);
        cy.contains("span","Add to Cart").click();
        cy.wait(3000);


    });

    it('Validate that the user can add products to the cart', () => {
        cy.get("[role=alert]").should("be.visible").and("contain","You added Circe Hooded Ice Fleece to your shopping cart.")
        cy.get(".counter-number").should("be.visible").and("contain","1");
        
        
 });

    it.only('Validate that the user can delete products from the cart', () => {
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get(".showcart").click();
        cy.get("[title='Remove item']").click();
        cy.wait(5000);
        cy.get("action-primary.action-accept").click();
        cy.get(".subtitle.empty").should("contain","You have no items in your shopping cart.")
       cy.get(".counter-number").should("be.hidden") 

        
    });

});