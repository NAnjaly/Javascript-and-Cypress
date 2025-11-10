describe('Gray Logs Check', () => {
    it('Login to the Gray Logs using Citrix credentials with valid details', () => {
    cy.visit('https://graylog-test.cubic-hub.com/dashboards/',{failOnStatusCode: false});

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
      })
      cy.get('input[id="username"]').clear().type("nairA");
      cy.get('input[id="password"]').clear().type("Cub21cAN!");
      cy.contains("Sign in").click();

      cy.contains("Search").click();

      cy.get('div[id="QueryEditor"]').type('"33367"');

      cy.get('.SearchBar__SearchButtonAndQuery-sc-ixyk32-3 > .Button-sc-e4msts-0 > .svg-inline--fa').click();
      cy.wait(2000)

      cy.get('.SearchBar__SearchButtonAndQuery-sc-ixyk32-3 > .Button-sc-e4msts-0 > .svg-inline--fa').click();


      // Get the <time> element and compare with current local time
      cy.get('tr.MessageTableEntry__FieldsRow-sc-19dwh4z-1 time')
      .invoke('attr', 'datetime')
      .then(datetimeAttr => {
        expect(datetimeAttr, 'Page should contain a datetime attribute').to.exist;

        // Parse the timestamp from the page
        const pageTime = new Date(datetimeAttr);

        // Get the current local time (not UTC)
        const now = new Date();

        // Format both times for strict equality (to milliseconds)
        const pageTimeStr = pageTime.toISOString();
        const nowStr = now.toISOString();

        const diffMs = Math.abs(now.getTime() - pageTime.getTime());

        // Tolerance (e.g. 1000 ms = 1 second)
        const toleranceMs = 10000;

         cy.log(`Page time: ${pageTime.toISOString()}`);
         cy.log(`Local time: ${now.toISOString()}`);
         cy.log(`Difference: ${diffMs} ms`);

        // Assert the timestamp matches within 1 second
         expect(diffMs, `Timestamp difference should be <= ${toleranceMs} ms`)
          .to.be.lessThan(toleranceMs);

          cy



        
          });

        });

      });
      
















    


