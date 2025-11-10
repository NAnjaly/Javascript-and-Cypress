describe('GBFS Check', () => {
    it('Login to the GBFS using credentials with valid details', () => {
    cy.visit('http://lchsdashboard:50505/',{failOnStatusCode: false});

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
      })

      

      cy.contains("GBFS").click();
      cy.wait (2000)

     // cy.get('[data-testid="core-ui-button"]')
      //.filter(':contains("Subscribe")').eq(1).scrollIntoView().should('be.visible').click();
      cy.contains('.card-header', 'Env A').eq(2)
      cy.get('div[class="multi-collapse row collapse show"]').click();
      
      
      
      
      it('should open the link in a new tab', () => {
      cy.get('a.list-group-item-secondary')
      .should('have.attr', 'target', '_blank');
    
      it('can click the link', () => {
       cy.get('a.list-group-item-secondary').click({ force: true }); 
      
       cy.get('pre')
      .invoke('text')
      .then((text) => {
       const data = JSON.parse(text);
       const lastUpdated = data.last_updated;
       const currentTime = Math.floor(Date.now() / 1000);
       const difference = currentTime - lastUpdated;
       expect(difference).to.be.lessThan(120);
       
       cy.pause();

  });
     
  });



    });
    });
  });












    



  