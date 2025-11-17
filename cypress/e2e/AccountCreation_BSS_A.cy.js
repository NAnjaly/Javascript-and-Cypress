describe('[Admin] Successful login with Valid Details', () => {
    it('Login to the BSS Console as an Admin user with valid details', () => {
      //launching BSS Console
      cy.visit('https://a-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});
  
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
      })
  
      var txt1 = {
        today: (() => {
          let today = new Date().toLocaleDateString()
          let todaytime = new Date().toLocaleTimeString()
          cy.writeFile('../EnvA.txt', today + ' ' + todaytime + '\r\n', {flag: 'a+'})
          cy.writeFile('../EnvA.txt','\r\n', { flag: 'a+' })
        })()
  
    };
    
     cy.log(txt1);
  
       //Username and password
      cy.get('input[id="username_input"]').clear().type("AnjalyN");
      cy.wait(1000)
      cy.get('input[id="password_input"]').clear().type("Aloha19!");
      cy.wait(1000)
  
      cy.contains("Log in").click();
      

      cy.contains("Customer Service").click();
      cy.wait(3000)
      cy.contains("Account Management").click();
      cy.contains("Create member account").click();
      cy.wait(3000)
      cy.get('div[data-name="firstName"] input').should('be.visible').clear().type('hello');
     const timestamp = Date.now();
     const uniqueEmail = `${timestamp}`;

  
   cy.get('div[data-name="lastName"] input').should('be.visible').clear().type(uniqueEmail);

   cy.get('div[data-name="email"] input').should('be.visible').clear().type("test"+uniqueEmail+"@cubic.com");

   cy.get('div[data-name="email"] input').should('be.visible').clear().type("test"+uniqueEmail+"@cubic.com");

   cy.get('div[data-name="billing_houseNumber"] input').should('be.visible').clear().type("10");

   cy.get('div[data-name="billing_street"] input').should('be.visible').clear().type("xx");

   cy.get('div[data-name="billing_city"] input').should('be.visible').clear().type("xx");

  cy.get('div[data-name="billing_countryCode"] input').should('be.visible').clear().type("United Kingdom");
  
  cy.get('div[data-name="billing_postalCode"] input').should('be.visible').clear().type("TW100TH");

  cy.contains('button', 'Save').click();
  cy.contains("Buy rental product(s)").click();

   cy.get('div[class="sc-quote-data sc-subscription-select"]').click();
   cy.get('ul').children().eq(10).click();
   cy.get('Input[id="alternateCardRadio"]').click();
   cy.get('div[data-name="cardHolder"] input').should('be.visible').clear().type("Test");
   cy.get('div[data-name="secretNumber"] input').should('be.visible').clear().type("4532510530900387");
   cy.get('div[data-name="expirationMonth"] input').should('be.visible').clear().type("09");
   cy.get('div[data-name="expirationYear"] input').should('be.visible').clear().type("2027");


   cy.contains('Process payment').click();
   cy.wait(3000)
   cy.contains('The payment was accepted.')
       
    })


})