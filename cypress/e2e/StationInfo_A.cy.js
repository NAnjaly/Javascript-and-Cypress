describe('GBFS Check', () => {
    it('Login to the GBFS using credentials with valid details', () => {
    cy.visit('http://lchsdashboard:50505/',{failOnStatusCode: false});

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
      })

      

      cy.contains("GBFS").click();
      cy.wait (2000)
      cy.contains('.card-header', 'Env A')   
      cy.contains("Station Information").click();     
      
      it('should open the link in a new tab', () => {
      cy.get('a.list-group-item-secondary')
      .should('have.attr', 'target', '_blank');
    });
  it('can click the link', () => {
     cy.get('a.list-group-item-secondary').click({ force: true }); 


     




    });
    });
  });












    



  