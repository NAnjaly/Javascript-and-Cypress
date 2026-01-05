
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
    cy.pause()
    
   
    cy.contains("Advanced Tools").click();
    cy.wait(3000)
    cy.contains("Federators").click();
    cy.wait(3000)

    cy.get('#EntityListByCriteriaWidget_2').contains('Up and Running').parent('tr').then(test=> 
      {
        cy.wrap(test).find('td').click()

    })

   
    cy.get('#LightLabel_77').invoke('text') .then((FtkVersion)=>
    {
      cy.wait(3000)
      cy.log(FtkVersion)

      cy.wait(3000)
        
      cy.writeFile('../EnvA.txt', 'ENVIRONMENT A :'+ '\r\n', { flag: 'a+' })

      cy.writeFile('../EnvA.txt','\r\n', { flag: 'a+' })
      cy.writeFile('../EnvA.txt', '------------------------------------------------' + '\r\n' , {flag: 'a+'})

      cy.writeFile('../EnvA.txt', 'BSS Console Fw Version : ' + FtkVersion +'\r\n', { flag: 'a+' })

      cy.writeFile('../EnvA.txt', '------------------------------------------------' + '\r\n' , {flag: 'a+'})
    })
    cy.pause()

   cy.wait(3000)
   cy.contains("On Street Operations").click();
   cy.wait(3000)

   cy.get('a[data-view-id="BikeStationMonitoring"]').click();
   cy.wait(3000);
cy.pause()


   cy.get(
    'table tbody tr:has(td:nth-child(2):contains("East India DLR, Blackwall"))').click()
    cy.get(
      'table tbody tr:has(td:nth-child(2):contains("East India DLR, Blackwall"))').click()

      cy.wait(3000);

    //  cy.get('#cid612b > .drawer-title > .drawer-text', contains("Software")).click()

  cy.get('#software_table > tbody > :nth-child(2) > .property-value > .sc-label').invoke('text') .then((SystemVersion)=>
      {
        
let specificchar = "+";
const index= SystemVersion.indexOf(specificchar);

let substring = SystemVersion.substring(index+1, SystemVersion.length);

cy.log(substring);
cy.pause()

cy.writeFile('../EnvA.txt', 'CT7 (East India DLR, Blackwall ) ECO5 :'+ '\r\n' , { flag: 'a+' })
cy.writeFile('../EnvA.txt','\r\n', { flag: 'a+' })



cy.writeFile('../EnvA.txt', 'Terminal SW Version:  ' + substring +'\r\n', { flag: 'a+' })



      })

      cy.pause()
     
      cy.get('#software_table > tbody > :nth-child(3) > .property-value > .sc-label').invoke('text') .then((ECO5AVRFWversion)=>
      {
        cy.wait(3000)
       cy.log(ECO5AVRFWversion)
        //console.log("Eco5 Firmware Version", ECO5AVRFWversion);
        
        cy.pause()
        
        cy.writeFile('../EnvA.txt', 'ECO5 AVR FW version:  '  + ECO5AVRFWversion +'\r\n', { flag: 'a+' })

      })


      cy.get('#software_table > tbody > :nth-child(4) > .property-value > .sc-label').invoke('text') .then((ICFWversion)=>
      {
        
        cy.log(ICFWversion)
        cy.writeFile('../EnvA.txt', 'IC FW version:  ' + ICFWversion +'\r\n', { flag: 'a+' })
      })
      cy.pause()
     
      cy.get('#software_table > tbody > :nth-child(5) > .property-value > .sc-label').invoke('text') .then((PrinterFWversion)=>
      {
       
        cy.log(PrinterFWversion)
       

        let x = PrinterFWversion
        let actual = PrinterFWversion. substring(4,8)
        cy.log(actual)
        cy.writeFile('../EnvA.txt', 'Printer FW version:  ' + actual +'\r\n', { flag: 'a+' })
       

      })
      cy.wait(3000)
      cy.pause()

      cy.get('#software_table > tbody > :nth-child(6) > .property-value > .sc-label').invoke('text') .then((TBKRFWversion)=>
      {
        cy.wait(3000)
        cy.log(TBKRFWversion)
        cy.wait(3000)
        cy.writeFile('../EnvA.txt', 'TBKR FW version:  ' + TBKRFWversion +'\r\n', { flag: 'a+' })
      })
      cy.wait(3000)
      cy.pause()


      cy.get('#credit_card_reader_table > tbody > :nth-child(5) > .property-value > .sc-label') .invoke('text') .then((FirmwareVersion)=>
    {
      
      cy.log(FirmwareVersion)
      cy.writeFile('../EnvA.txt', 'PED FW Version:  ' + FirmwareVersion +'\r\n', { flag: 'a+' })
      cy.wait(3000)
    })

cy.pause()
    cy.wait(3000)

    cy.get('#islandController_table > tbody > :nth-child(5) > .property-value > .sc-label') .invoke('text') .then((FirmwareVersion)=>
    {
      cy.wait(3000)
      cy.log(FirmwareVersion)
      cy.wait(3000)
      cy.writeFile('../EnvA.txt', 'Island Controller FW Version:  ' + FirmwareVersion +'\r\n', { flag: 'a+' })

      cy.writeFile('../EnvA.txt','\r\n', { flag: 'a+' })
      cy.wait(3000)
    })
    cy.pause()

//Fetching tthe data of WestMinster ECO5
cy.contains("On Street Operations").click();
   cy.get('a[data-view-id="BikeStationMonitoring"]').click();
   cy.get(
    'table tbody tr:has(td:nth-child(2):contains("Westminster"))').click()
    cy.get(
      'table tbody tr:has(td:nth-child(2):contains("Westminster"))').click()

      cy.get('#software_table > tbody > :nth-child(2) > .property-value > .sc-label').invoke('text') .then((SystemVersion)=>
      {
        
let specificchar = "+";
const index= SystemVersion.indexOf(specificchar);

let substring = SystemVersion.substring(index+1, SystemVersion.length);

cy.log(substring);
cy.writeFile('../EnvA.txt', '------------------------------------------------' + '\r\n' , {flag: 'a+'})
cy.writeFile('../EnvA.txt', 'CT4a (Westminster, cubictest4 ) ECO5 :'+ '\r\n', { flag: 'a+' })
cy.writeFile('../EnvA.txt','\r\n', { flag: 'a+' })
  
cy.writeFile('../EnvA.txt', 'Terminal SW Version:' + substring +'\r\n', { flag: 'a+' })

      })

      
      cy.get('#software_table > tbody > :nth-child(3) > .property-value > .sc-label').invoke('text') .then((ECO5AVRFWversion)=>
      {
       cy.log(ECO5AVRFWversion)
        //console.log("Eco5 Firmware Version", ECO5AVRFWversion);
        cy.writeFile('../EnvA.txt', 'ECO5 AVR FW version:  ' + ECO5AVRFWversion +'\r\n', { flag: 'a+' })
      })


      cy.get('#software_table > tbody > :nth-child(4) > .property-value > .sc-label').invoke('text') .then((ICFWversion)=>
      {
        cy.log(ICFWversion)
        cy.writeFile('../EnvA.txt', 'IC FW version:  ' + ICFWversion +'\r\n', { flag: 'a+' })
      })
     
      cy.get('#software_table > tbody > :nth-child(5) > .property-value > .sc-label').invoke('text') .then((PrinterFWversion)=>
      {
        cy.log(PrinterFWversion)
        let x = PrinterFWversion
        let actual = PrinterFWversion. substring(4,8)
        cy.log(actual)
        cy.writeFile('../EnvA.txt', 'Printer FW version:  ' + actual +'\r\n', { flag: 'a+' })
        
      })


      cy.get('#software_table > tbody > :nth-child(6) > .property-value > .sc-label').invoke('text') .then((TBKRFWversion)=>
      {
        cy.log(TBKRFWversion)
        cy.writeFile('../EnvA.txt', 'TBKR FW version:  ' + TBKRFWversion +'\r\n', { flag: 'a+' })
      })

      cy.get('#credit_card_reader_table > tbody > :nth-child(5) > .property-value > .sc-label') .invoke('text') .then((FirmwareVersion)=>
    {
      cy.log(FirmwareVersion)
      cy.writeFile('../EnvA.txt', 'PED FW Version:  ' + FirmwareVersion +'\r\n', { flag: 'a+' })
    })

    cy.get('#islandController_table > tbody > :nth-child(5) > .property-value > .sc-label') .invoke('text') .then((FirmwareVersion)=>
    {
      cy.log(FirmwareVersion)
      cy.writeFile('../EnvA.txt', 'Island Controller FW Version:  ' + FirmwareVersion +'\r\n', { flag: 'a+' })

      cy.writeFile('../EnvA.txt','\r\n', { flag: 'a+' })
    })


    // Concert Hall

    cy.contains("On Street Operations").click();
    cy.get('a[data-view-id="BikeStationMonitoring"]').click();
    cy.get(
     'table tbody tr:has(td:nth-child(2):contains("Concert Hall Approach 1, South Bank"))').click()
     cy.get(
       'table tbody tr:has(td:nth-child(2):contains("Concert Hall Approach 1, South Bank"))').click()
 
       cy.get('#software_table > tbody > :nth-child(2) > .property-value > .sc-label').invoke('text') .then((SystemVersion)=>
       {
         
 let specificchar = "+";
 const index= SystemVersion.indexOf(specificchar);
 
 let substring = SystemVersion.substring(index+1, SystemVersion.length);
 
 cy.log(substring);
 cy.writeFile('../EnvA.txt', '------------------------------------------------' + '\r\n' , {flag: 'a+'})
 cy.writeFile('../EnvA.txt', 'CT6 (Concert Hall Approach 1, South Bank, 002635) ECO4 :'+ '\r\n', { flag: 'a+' })
 cy.writeFile('../EnvA.txt','\r\n', { flag: 'a+' })
  
  cy.writeFile('../EnvA.txt', 'Terminal SW Version:  ' + substring +'\r\n', { flag: 'a+' })
  
 
       })
 

       cy.get('#software_table > tbody > :nth-child(3) > .property-value > .sc-label').invoke('text') .then((ECO4ATCoreFWversion)=>
       {
        cy.log(ECO4ATCoreFWversion)
        cy.writeFile('../EnvA.txt', 'ECO4 ATCore FW version:  ' + ECO4ATCoreFWversion +'\r\n', { flag: 'a+' })
         
       })
 
 
       cy.get('#software_table > tbody > :nth-child(4) > .property-value > .sc-label').invoke('text') .then((ICFWversion)=>
       {
         cy.log(ICFWversion)
         cy.writeFile('../EnvA.txt', 'IC FW version:  ' + ICFWversion +'\r\n', { flag: 'a+' })
       })
      
       cy.get('#software_table > tbody > :nth-child(5) > .property-value > .sc-label').invoke('text') .then((PrinterFWversion)=>
       {
         cy.log(PrinterFWversion)
         let x = PrinterFWversion
         let actual = PrinterFWversion. substring(4,8)
         cy.log(actual)
         cy.writeFile('../EnvA.txt', 'Printer FW version:  ' + actual +'\r\n', { flag: 'a+' })

       })
 
 
       cy.get('#software_table > tbody > :nth-child(6) > .property-value > .sc-label').invoke('text') .then((TBKRFWversion)=>
       {
         cy.log(TBKRFWversion)
         cy.writeFile('../EnvA.txt', 'TBKR FW version:  ' + TBKRFWversion +'\r\n', { flag: 'a+' })
       })
 
       cy.get('#credit_card_reader_table > tbody > :nth-child(5) > .property-value > .sc-label') .invoke('text') .then((FirmwareVersion)=>
     {
       cy.log(FirmwareVersion)
       cy.writeFile('../EnvA.txt', 'PED FW Version:  ' + FirmwareVersion +'\r\n', { flag: 'a+' })
     })
 
     cy.get('#islandController_table > tbody > :nth-child(5) > .property-value > .sc-label') .invoke('text') .then((FirmwareVersion)=>
     {
       cy.log(FirmwareVersion)
       cy.writeFile('../EnvA.txt', 'Island Controller FW Version:' + FirmwareVersion +'\r\n', { flag: 'a+' })


       cy.writeFile('../EnvA.txt','\r\n', { flag: 'a+' })
     })    

  
// Waterloo

cy.contains("On Street Operations").click();
     cy.get('a[data-view-id="BikeStationMonitoring"]').click();
     cy.get(
      'table tbody tr:has(td:nth-child(2):contains("Waterloo Station 3, Waterloo"))').click()
      cy.get(
        'table tbody tr:has(td:nth-child(2):contains("Waterloo Station 3, Waterloo"))').click()
  
        cy.get('#software_table > tbody > :nth-child(2) > .property-value > .sc-label').invoke('text') .then((SystemVersion)=>
        {
          
  let specificchar = "+";
  const index= SystemVersion.indexOf(specificchar);
  
  let substring = SystemVersion.substring(index+1, SystemVersion.length);
  
  cy.log(substring);
  cy.writeFile('../EnvA.txt', '------------------------------------------------' + '\r\n' , {flag: 'a+'})
  cy.writeFile('../EnvA.txt', 'CT5 (Waterloo Station 3, Waterloo, 001072)ECO4 :'+ '\r\n', { flag: 'a+' })
  cy.writeFile('../EnvA.txt','\r\n', { flag: 'a+' })
  
  cy.writeFile('../EnvA.txt', 'Terminal SW Version:  ' + substring +'\r\n', { flag: 'a+' })
  
        })
  
       
        cy.get('#software_table > tbody > :nth-child(3) > .property-value > .sc-label').invoke('text') .then((ECO4ATCoreFWversion)=>
        {
         cy.log(ECO4ATCoreFWversion)
          cy.writeFile('../EnvA.txt', 'ECO4 ATCore FW version:  ' + ECO4ATCoreFWversion +'\r\n', { flag: 'a+' })
        })
  
  
        cy.get('#software_table > tbody > :nth-child(4) > .property-value > .sc-label').invoke('text') .then((ICFWversion)=>
        {
          cy.log(ICFWversion)
          cy.writeFile('../EnvA.txt', 'IC FW version:  ' + ICFWversion +'\r\n', { flag: 'a+' })
        })
       
        cy.get('#software_table > tbody > :nth-child(5) > .property-value > .sc-label').invoke('text') .then((PrinterFWversion)=>
        {
          cy.log(PrinterFWversion)

          let x = PrinterFWversion
          let actual = PrinterFWversion. substring(4,8)
          cy.log(actual)
          cy.writeFile('../EnvA.txt', 'Printer FW version:  ' + actual +'\r\n', { flag: 'a+' })
          
        })
  
    
        cy.get('#software_table > tbody > :nth-child(6) > .property-value > .sc-label').invoke('text') .then((TBKRFWversion)=>
        {
          cy.log(TBKRFWversion)
          cy.writeFile('../EnvA.txt', 'TBKR FW version:  ' + TBKRFWversion +'\r\n', { flag: 'a+' })
        })
 
        cy.get('#credit_card_reader_table > tbody > :nth-child(5) > .property-value > .sc-label') .invoke('text') .then((FirmwareVersion)=>
      {
        cy.log(FirmwareVersion)
        cy.writeFile('../EnvA.txt', 'PED FW Version:  ' + FirmwareVersion +'\r\n', { flag: 'a+' })
      })
   
      cy.get('#islandController_table > tbody > :nth-child(5) > .property-value > .sc-label') .invoke('text') .then((FirmwareVersion)=>
      {
        cy.log(FirmwareVersion)
        cy.writeFile('../EnvA.txt', 'Island Controller FW Version:  ' + FirmwareVersion +'\r\n', { flag: 'a+' })
      }) 

})


})



