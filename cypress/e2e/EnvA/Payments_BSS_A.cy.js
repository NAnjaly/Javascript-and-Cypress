 describe('Payments and Transaction Details Check', () => {
    it('Login to the BSS Console as an Admin user with valid details and Checking the Payments/Transactions Details', () => {
    cy.visit('https://a-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
      })
      cy.get('input[id="username_input"]').clear().type("AnjalyN")
      cy.wait(1000)
      cy.get('input[id="password_input"]').clear().type("Aloha19!")
      cy.wait(1000)
      cy.contains("Log in").click();
      cy.contains("Finance").click();
      cy.contains("Payments").click();
      cy.contains("Refresh").click();

      cy.get('.result-count-lbl')
     .should('exist') 
     .invoke('text') 
     .then((text) => {
  
    const resultCount = parseInt(text, 10);
    expect(resultCount).to.be.gte(1);

    
  });
 });
});




  


      
      









  









