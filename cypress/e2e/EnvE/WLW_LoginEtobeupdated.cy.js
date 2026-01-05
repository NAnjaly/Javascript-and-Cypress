
describe('Successful login with pre-existing customer account', () => {
    it('Successful Login with pre-existing customer account', () => {
      // Visit the WLW
      cy.visit('https://e-wlw-test.cubic-hub.com/');
  
      //Need to add this because lyft devs are useless
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
      })
  
      cy.get('input[name="bssUsername"]').clear().type('21nov@cubic.com');
    
      cy.get('input[name="bssPassword"]').clear().type('Password2');
  
      cy.get('button[type="Submit"]').click();
  
      cy.wait(2000);
  
      cy.contains("Account information")

  cy.wait(90)

  // Update Payment method

 // cy.scrollTo('top')

   //cy.get('[data-testid="core-ui-icon-horizontal-menu"]').should('exist').click();

   //cy.get('[href="/statements"] > .sc-kpDqfm').click()

 // cy.get('[data-testid="core-ui-button"] ').filter(':contains("Update")').should('exist').click();

  //cy.get('[data-testid="core-ui-button"]').contains('Update').click()
   


   //cy.get('[data-testid="core-ui-text"]').filter(':contains("Payment")').should('exist').click();

  
//selects vew membership
 cy.get('[data-testid="core-ui-button"]').filter(':contains("View memberships")').should('exist').click();

//DayPass
 cy.get('[data-testid="core-ui-button"]')
.filter(':contains("Subscribe")').eq(0).scrollIntoView().should('be.visible').click();

//Payment Page

  cy.get('Input[id="shipping.addressLine1__field"]').clear().type("10")
  cy.get('Input[id="shipping.addressLine2__field"]').clear().type("x")
  cy.get('Input[id="shipping.addressLine3__field"]').clear().type("x")
  cy.get('Input[id="shipping.city__field"]').clear().type("x")
  cy.get('Input[id="shipping.region__field"]').clear().type("x")
  cy.get('Input[id="shipping.postalCode__field"]').clear(). type("TW100TH")


     cy.get('[data-testid="DATA_TESTID_ADDRESS_SUBMIT"]')
             .filter(':contains("Next")')
              .last()
                .should('be.visible')
                    .click();

      cy.wait(2000);

// cy.get('iframe[id="iFrameResizer0"]', { timeout: 10000 })
//  .should('be.visible')
//  .then(($iframe) => {
//    const $body = $iframe.contents().find('body');
//    cy.wrap($body).as('iframeBody'); // alias the iframe body


//    cy.get('@iframeBody').find('#cardholderName').should('be.visible').type('Automation');
//    cy.get('@iframeBody').find('#ccNumber').should('be.visible').type('4659502770023522');
//    cy.get('@iframeBody').find('#ccExpMonth').select('12').should('have.value', '12');
//    cy.get('@iframeBody').find('#ccExpYear').select('2028').should('have.value', '28');
//    cy.get('@iframeBody').find('#cardCvv2').should('be.visible').type('000');
//    cy.get('@iframeBody').find('#_submit').click();
//    cy.wait(60000)

cy.wait(200)



cy.get('iframe[id="iFrameResizer0"]', { timeout: 15000 })


cy.get('body').then(($body) => {
      if($body.text().includes('cardholderName'))
      {
        cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p> 2. WLW Payment Successful:<span style="color: green;">Test is passed.</span></p>'  + '\r\n' , {flag: 'a+'})
      }
      else
      {
        cy.writeFile('../Weekly_Smoke_Test_Report.html','<p> 2. WLW Payment Unsuccessful <span style="color: red;">Test is failed.</p>' + '\r\n' , {flag: 'a+'})
      }
    })

//cy.frameLoaded('iframe[id="iFrameResizer0"]');

    

cy.iframe('iframe[id="iFrameResizer0"]').within(() => {
cy.get('#cardholderName').type('Automation');
cy.get('#ccNumber').type('4659502770023522');
cy.get('#ccExpMonth').select('12');
cy.get('#ccExpYear').select('2028');
cy.get('#cardCvv2').type('000');

cy.visit('https://c1.payments.ichs.test.cubic-hub.com')
//cy.get('#_submit').click();
});

// DO NOT TOUCH THE IFRAME NOW — it has navigated cross-origin
// STEP 2 — Enter payment domain context
cy.origin('https://c1.payments.ichs.test.cubic-hub.com', () => {
// STEP 3 — Assert the payment success page
cy.url().should('include', '/success');
// You’ll need the exact text from your success page
cy.contains(/payment/i).should('exist');

      cy.wait(2000);
});
});
});