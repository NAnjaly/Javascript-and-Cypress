describe('[Admin] Successful login with Valid Details', () => {
    it('Login to the BSS Console as an Admin user with valid details', () => {
      //launching BSS Console
      cy.visit('https://b.bss.test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});
  
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
      })
  
  
       //Username and password
      cy.get('input[id="username_input"]').clear().type("AnjalyN");
      cy.wait(1000)
  
      cy.get('input[id="password_input"]').clear().type("Aloha001!");
      cy.wait(1000)
  
      cy.contains("Log in").click();
      

      cy.contains("Customer Service").click();
      cy.wait(3000)
      cy.contains("Account Management").click();

      cy.contains("Create member account").click();
      cy.wait(3000)
   


  
      // The toISOString() method returns a date object as a string, using the ISO standard.

  //  const currentDate = new Date() .toISOString();

    //  const currentDate = new Date().toISOString().replace(/[\-\.\:ZT]/g,"").substr(2,10);
   //   var lname = "Auto" +currentDate;
  
   //   cy.get('Input[id="lastName__field"]').type(lname)
  
   //   cy.get('Input[id="email__field"]').type("test"+lname+"@cubic.com")




      //because the text feild id is being dynamic. hence used, div
  cy.get('div[data-name="firstName"] input').should('be.visible').clear().type('hello');
  
    const timestamp = Date.now();
     //gives unix timestamp. to generate a unique email id
   const uniqueEmail = `${timestamp}`;

  
  cy.get('div[data-name="lastName"] input').should('be.visible').clear().type(uniqueEmail);

  cy.get('div[data-name="email"] input').should('be.visible').clear().type(uniqueEmail+"@cubic.com");

  cy.get('div[data-name="billing_houseNumber"] input').should('be.visible').clear().type("10");

  cy.get('div[data-name="billing_street"] input').should('be.visible').clear().type("xx");

  cy.get('div[data-name="billing_city"] input').should('be.visible').clear().type("xx");

  cy.get('div[data-name="billing_countryCode"] input').should('be.visible').clear().type("United Kingdom");

  cy.get('div[data-name="billing_postalCode"] input').should('be.visible').clear().type("TW100TH");

  cy.contains('button', 'Save').click();

  cy.contains('Buy rental product(s)').click();

 
cy.get('div[class="sc-quote-data sc-subscription-select"]').click();
   cy.get('ul').children().eq(4).click();

   cy.contains('T&C accepted');
     

   cy.get('input.sc-checkbox') .check({force: true})

   cy.contains('Change card')

   cy.get('#alternateCardRadio').check({force: true}) .check()



    cy.get('div[data-name="cardHolder"] input').should('be.visible').clear().type("test");

    cy.get('div[data-name="secretNumber"] input').should('be.visible').clear().type("4539867420226320");
    cy.get('div[data-name="expirationMonth"] input').should('be.visible').clear().type("01");
    cy.get('div[data-name="expirationYear"] input').should('be.visible').clear().type("29");



    cy.contains('Process payment') .click()

    cy.writeFile('../Weekly_Smoke_Test_Report.html','<p> ENVIRONMENT A :</p>', { flag: 'a+' } )

      { flag: 'a+' } 

    cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>------------------------------------------------</p>' + '\r\n' , {flag: 'a+'} )

    cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>BSS Checks:</p>'  + '\r\n' , {flag: 'a+'})

     cy.writeFile('../Weekly_Smoke_Test_Report.html','\r\n', { flag: 'a+' })
     //cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p><ul><li>1. Account Creation and Purchasing a product:</p></ul><li>' , {flag: 'a+'})

cy.get('body').then(($body) => {
      if($body.text().includes('Credit card is already used'))
  
      {
        cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>1. Account Creation and Purchasing a product: Transaction is failed as a new Member.<span style="color: red;">Test is Failed.</span></p>'  + '\r\n' , {flag: 'a+'})
      }
      else
      {
        cy.writeFile('../Weekly_Smoke_Test_Report.html','<p>1. Account Creation and Purchasing a product: Successful Transaction as a new Member.<span style="color: green;">Test is Passed.</p>' + '\r\n' , {flag: 'a+'})
      }
    })



});
  
});
