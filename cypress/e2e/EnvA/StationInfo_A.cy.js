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
      cy.get('div[class="multi-collapse row collapse show"]').click();
      cy.get('[href="https://a-gbfs-test.cubic-hub.com/gbfs/2-2/en/station_information.json"]').click();

        })

        it('checks last_updated timestamp', () => {
  cy.request('https://a-gbfs-test.cubic-hub.com/gbfs/2-2/en/station_information.json').then((response) => {
  cy.log(JSON.stringify(response.body, null, 2));
  console.log('FULL BODY:', response.body);
  const body = typeof response.body === 'string'
      ? JSON.parse(response.body)
      : response.body;

    const lastUpdated = body.last_updated;
    expect(lastUpdated, 'last_updated exists').to.exist;

    const currentTime = Math.floor(Date.now() / 1000);
    const diff = currentTime - lastUpdated;

    cy.log(`last_updated: ${lastUpdated}`);
    cy.log(`currentTime: ${currentTime}`);
    cy.log(`diff: ${diff}`);

    // Assert the data is recent (within 5 minutes)
    expect(diff).to.be.lessThan(300);

}) 

        })
      })
  












    



  