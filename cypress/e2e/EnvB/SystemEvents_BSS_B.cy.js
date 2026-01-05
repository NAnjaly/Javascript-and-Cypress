  describe('System Events Check', () => {
    it('Login to the BSS Console as an Admin user with valid details and Checking System Events', () => {
    cy.visit('https://b-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
      })
      cy.get('input[id="username_input"]').clear().type("AnjalyN")
      cy.wait(1000)
  
      cy.get('input[id="password_input"]').clear().type("Aloha001!")
      cy.wait(1000)
  
      cy.contains("Log in").click();

      cy.contains("Advanced Tools").click();
      cy.wait(3000)
      cy.contains("System Events").click();
      
      // Open the 3rd dropdown
      cy.get('.select2-selection--single').eq(2).click(); // index starts at 0

      // Select an option
      cy.get('.select2-results__option').contains('last 24 hours').click();

      cy.contains("Refresh").click();

      cy.wait(2000)
  
      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>3. BSS System Events:</p>'  + '\r\n' , {flag: 'a+'})


    cy.get('body').then(($body) => {
      if($body.text().includes('The search returned no data.'))
      {
        cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>There are no critical system events found.<span style="color: green;">Test is passed.</span></p>', {flag: 'a+'})
      }
      else
      {
        cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>There are critical system events found.<span style="color: red;">Test failed.</span></p>' , {flag: 'a+'})
      }
    })

        
    
    
  });
});