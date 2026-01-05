 describe('Create new account', () => {
    it('Create a new account', () => {
      // Visit the WLW
      cy.visit('https://b-wlw-test.cubic-hub.com/');
  
      
      Cypress.on('uncaught:exception', (err, runnable) => {
        
        return false
      })
  
      cy.contains("Sign up").click();
  
      cy.get('Input[Id="firstName__field"]').type("test");
  
      // The toISOString() method returns a date object as a string, using the ISO standard.
    //const currentDate = new Date() .toISOString();
    const currentDate = new Date().toISOString().replace(/[\-\.\:ZT]/g,"").substr(2,10);
      var lname = currentDate;
  
      cy.get('Input[id="lastName__field"]').type(lname)
  
      cy.get('Input[id="email__field"]').type(lname+"@cubic.com")
  
      cy.get('Input[id="phoneNumber__field"]').type("00000000000")
  
      cy.get('Input[id="password__field"]').type("Password1")
  
      cy.get('Input[id="confirmPassword__field"]').type("Password1")
  
      //cy.get('Select[id="securityQuestion__field"]').select("Where was your first holiday?")
  
      cy.get('Input[name="securityQuestion"]').click();
  
      cy.get('Input[name="securityQuestion"]').click();
  
      //cy.get('Input[name="securityQuestion"]').type('{downArrow} {downArrow}')
  
      //IMPORTANT YOU NEED TO REMEMBER THIS WHEN SELECTING OPTIONS FROM A LYFT DROPDOWN
      cy.get('ul li:first').click();
  
      //cy.xpath()
  
      cy.get('Input[id="securityAnswer__field"]').type("Spain");
  
      cy.get('Input[id="consents.8__field"]').click();
      
     
  
      //cy.get('button[type="Sign up"]').click();
      cy.get('[data-testid="icon-button-text"]').click();
      
      cy.wait(1000);
  
      cy.contains("Account information");

       cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>------------------------------------------------</p>' + '\r\n' , {flag: 'a+'} )

    cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>WLW Checks:</p>'  + '\r\n' , {flag: 'a+'})

     cy.writeFile('../Weekly_Smoke_Test_Report.html','\r\n', { flag: 'a+' })

cy.get('body').then(($body) => {
      if($body.text().includes('Account information'))
      {
        cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p> 1. WLW Account Creation:<span style="color: green;">Test is passed.</span></p>'  + '\r\n' , {flag: 'a+'})
      }
      else
      {
        cy.writeFile('../Weekly_Smoke_Test_Report.html','<p> 1. WLW Account Creation: <span style="color: red;">Test is failed.</p>' + '\r\n' , {flag: 'a+'})
      }
    })
    
        
   });
});


 



      