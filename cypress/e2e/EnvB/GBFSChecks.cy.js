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
      cy.get('[href="https://b-gbfs-test.cubic-hub.com/gbfs/2-2/en/free_bike_status.json"]').click();

        })

  it('checks last_updated timestamp', () => {
  cy.request('https://b-gbfs-test.cubic-hub.com/gbfs/2-2/en/free_bike_status.json').then((response) => {
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


      cy.writeFile('../Weekly_Smoke_Test_Report.html','<p> ENVIRONMENT A :</p>', { flag: 'a+' } )

      { flag: 'a+' } 
         cy.writeFile('../Weekly_Smoke_Test_Report.html','\r\n', { flag: 'a+' })

      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>------------------------------------------------</p>' + '\r\n' , {flag: 'a+'} )

  
      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>GBFS Checks:</p>'  + '\r\n' , {flag: 'a+'})

   

        cy.writeFile('../Weekly_Smoke_Test_Report.html','\r\n', { flag: 'a+' })
      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>1.Free Bike Status:</p>' , {flag: 'a+'})

   
     if(diff < 300)
    {
      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p><span style="color: green;">Test is passed.</span></p>' ,  { flag: 'a+' })

     
   { flag: 'a+' }
    }
    else
    {
      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>Free Bike Status is greater than ${diff} sec. <span style ="color: red;">Test is failed.</span></p>', { flag: 'a+' })
    }
    
    { flag: 'a+' }


    
})

        })

      })
    
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
      cy.get('[href="https://b-gbfs-test.cubic-hub.com/gbfs/2-2/en/station_information.json"]').click();

        })

  it('checks last_updated timestamp', () => {
  cy.request('https://b-gbfs-test.cubic-hub.com/gbfs/2-2/en/station_information.json').then((response) => {
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

      cy.writeFile('../Weekly_Smoke_Test_Report.html','\r\n', { flag: 'a+' })
     
      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>2. Station Information:</p>' + '\r\n' , {flag: 'a+'})

    if(diff < 300)
    {
      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p><span style="color: green;">Test is passed.</span></p>' + '\r\n', { flag: 'a+' })
    }
    else
    {
      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>Station Information status is greater than ${diff} sec. Test is failed.</p>' + '\r\n', { flag: 'a+' })
    }

  }) 

        })
      })
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

      cy.get('[href="https://b-gbfs-test.cubic-hub.com/gbfs/en/station_status.json"]').click();
    
     
    });
  it('checks last_updated timestamp', () => {
  cy.request('https://b-gbfs-test.cubic-hub.com/gbfs/en/station_status.json').then((response) => {
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

    cy.writeFile('../Weekly_Smoke_Test_Report.html','\r\n', { flag: 'a+' })

      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>3. Station Status:</p>' + '\r\n' , {flag: 'a+'})

    if(diff < 300)
    {
      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p><span style="color: green;">Test is passed.</span></p>' + '\r\n', { flag: 'a+' })
    }
    else
    {
      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>Station status is greater than ${diff} sec. Test is failed.</p>' + '\r\n', { flag: 'a+' })
    }

  });
});
     
    });
    
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
      //cy.contains("Vehicle Types").click();     

      cy.get('div[class="multi-collapse row collapse show"]').click();

      cy.get('[href="https://b-gbfs-test.cubic-hub.com/gbfs/2-2/en/vehicle_types.json"]').click();

      
    });

  it('checks last_updated timestamp', () => {
  cy.request('https://b-gbfs-test.cubic-hub.com/gbfs/2-2/en/vehicle_types.json').then((response) => {
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

    cy.writeFile('../Weekly_Smoke_Test_Report.html','\r\n', { flag: 'a+' })

    cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>4. Vehicle Types : </p>' + '\r\n' , {flag: 'a+'})
    if(diff < 300)
    {
      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p><span style="color: green;">Test is passed.</span></p>',  { flag: 'a+' })

     
   { flag: 'a+' }
    }
    else
    {
      cy.writeFile('../Weekly_Smoke_Test_Report.html', '<p>Vehicle Type status is greater than ${diff} sec. <span style ="color: red;">Test is failed.</span></p>', { flag: 'a+' })
    }
    
    { flag: 'a+' }

    });
    });
  })