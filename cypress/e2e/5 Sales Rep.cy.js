describe('Sales Rep - Clone Functionality', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('Opens "ENTER QTY" popup on "Clone" button click', () => {
      // Assuming the sales rep is logged in and already on the Shop page
      cy.visit('https://v2-dev.ezewholesale.com/');
      cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
     cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').should('contain',"Nigeria").click();
     cy.get('._login').should('exist').and('be.visible').click();
     cy.get(':nth-child(1) > [data-testid="inputs"]').type('michealpinto1@gmail.com');
     cy.get('.ksGYZT > label').should('exist').and('be.visible')
     cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
     cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
     cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
     cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
     cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();
     cy.wait(5000)
     cy.get('._shop').click();
     cy.wait(15000)
      cy.get(':nth-child(2) > .wrap > .other > .offerWrap > .clone').should('be.visible').click(); 
      cy.get('.css-fpwil5 > #modal-modal-title').should('be.visible'); 
    });

    describe('Verify "Price" Validation on "Enter Qty" Popup', () => {
        it('Displays error message for Price greater than 1000000', () => {
            cy.visit('https://v2-dev.ezewholesale.com/');
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
           cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
           cy.get('._login').should('exist').and('be.visible').click();
           cy.get(':nth-child(1) > [data-testid="inputs"]').type('michealpinto1@gmail.com');
           cy.get('.ksGYZT > label').should('exist').and('be.visible')
           cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
           cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
           cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
           cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
           cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();
           cy.wait(5000)
           cy.get('._shop').click();
            cy.get(':nth-child(2) > .wrap > .other > .offerWrap > .clone').should('be.visible').click(); 
      
          // Type a price greater than 1000000 in the input field
          cy.get('.css-10htf2y > [placeholder="1"]').type('1500000'); // Replace with your price input field selector
      
          // Click on a different field or button to trigger the validation or submit the value
          // Example:
          cy.get('.css-1hw29i9 > .MuiButtonBase-root').click(); // Replace with your submit button selector
      
          // Check if the error message is displayed
          cy.get('.global-error-modal__Wrapper-sc-18y50bq-0').should('be.visible'); // Replace with your error message selector
        });
      });

      describe('Verify "Clone to Cart" Button Enablement with Qty on "ENTER QTY" Popup', () => {
        it('Enables "Clone to Cart" button upon filling Qty field', () => {
            cy.visit('https://v2-dev.ezewholesale.com/');
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
           cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').should('contain',"Nigeria").click();
           cy.get('._login').should('exist').and('be.visible').click();
           cy.get(':nth-child(1) > [data-testid="inputs"]').type('michealpinto1@gmail.com');
           cy.get('.ksGYZT > label').should('exist').and('be.visible')
           cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
           cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
           cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
           cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
           cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();
           cy.wait(5000)
           cy.get('._shop').click();
           cy.get(':nth-child(4) > .wrap > .other > .offerWrap > .clone').should('be.visible').click(); 
          // Type a value in the Qty field on the popup
          cy.get('.css-10htf2y > [placeholder="1"]').type('5'); // Replace with your Qty input field selector
      
          // Confirm that the "Clone to Cart" button is now enabled
          cy.get('.css-1hw29i9 > .MuiButtonBase-root').should('be.enabled'); // Replace with your "Clone to Cart" button selector
        });
        });

        it('Verifies details on "Item Cloned to Cart" popup after clicking "Clone to Cart"', () => {
            // Visit the page or navigate to the specific section where the test is conducted
            cy.visit('https://v2-dev.ezewholesale.com/');
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
           cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').should('contain',"Nigeria").click();
           cy.get('._login').should('exist').and('be.visible').click();
           cy.get(':nth-child(1) > [data-testid="inputs"]').type('michealpinto1@gmail.com');
           cy.get('.ksGYZT > label').should('exist').and('be.visible')
           cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
           cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
           cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
           cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
           cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();
           cy.wait(5000)
           cy.get('._shop').click();
           cy.wait(15000);
           cy.get(':nth-child(5) > .wrap > .other > .offerWrap > .clone').click();  // Replace with your Qty input field selector
           cy.get('.css-10htf2y > [placeholder="1"]').type('5'); 
           // Confirm that the "Clone to Cart" button is now enabled
           cy.get('.css-1hw29i9 > .MuiButtonBase-root').should('be.enabled').click(); // Replace with your "Clone to Cart" button selector
          
            // Verify details in the "Item Cloned to Cart" popup
            cy.get('.css-1d38pon > .MuiTypography-root').should('contain.text', 'Item Cloned to Cart'); // Replace with your item details selector
          });

          it('Verifies if the "Item Cloned to Cart" popup is displayed after clicking "Clone to Cart"', () => {
            cy.visit('https://v2-dev.ezewholesale.com/');
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
           cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').should('contain',"Nigeria").click();
           cy.get('._login').should('exist').and('be.visible').click();
           cy.get(':nth-child(1) > [data-testid="inputs"]').type('michealpinto1@gmail.com');
           cy.get('.ksGYZT > label').should('exist').and('be.visible')
           cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
           cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
           cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
           cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
           cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();
           cy.wait(5000)
           cy.get('._shop').click();
           cy.wait(15000);
           cy.get(':nth-child(5) > .wrap > .other > .offerWrap > .clone').click();  // Replace with your Qty input field selector
           cy.get('.css-10htf2y > [placeholder="1"]').type('5'); 
           // Confirm that the "Clone to Cart" button is now enabled
           cy.get('.css-1hw29i9 > .MuiButtonBase-root').should('be.enabled').click(); 
          
            // Assert that the "Item Cloned to Cart" popup is displayed
            cy.get('.css-1d38pon').should('be.visible'); // Replace with your "Item Cloned to Cart" popup selector
          });

          it('Verifies functionality of buttons on "Item Cloned to Cart" popup', () => {
            cy.visit('https://v2-dev.ezewholesale.com/');
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
           cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').should('contain',"Nigeria").click();
           cy.get('._login').should('exist').and('be.visible').click();
           cy.get(':nth-child(1) > [data-testid="inputs"]').type('michealpinto1@gmail.com');
           cy.get('.ksGYZT > label').should('exist').and('be.visible')
           cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
           cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
           cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
           cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
           cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();
           cy.wait(5000)
           cy.get('._shop').click();
           cy.wait(15000);
           cy.get(':nth-child(10) > .wrap > .other > .offerWrap > .clone').click();  
           cy.get('.css-10htf2y > [placeholder="1"]').type('5'); 
           cy.get('.css-1hw29i9 > .MuiButtonBase-root').should('be.enabled').click(); 
            cy.get('.css-1dzlanz').click(); 
            cy.get(':nth-child(8) > .wrap > .other > .offerWrap > .clone').click()
            cy.get('.css-10htf2y > [placeholder="1"]').type('5'); 
            cy.get('.css-1hw29i9 > .MuiButtonBase-root').should('be.enabled').click(); 
            cy.get('.css-srft38').click();
          });
          it('Verifies items cloned to cart displayed on "Your Cart" page', () => {
            cy.visit('https://v2-dev.ezewholesale.com/');
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
           cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').should('contain',"Nigeria").click();
           cy.get('._login').should('exist').and('be.visible').click();
           cy.get(':nth-child(1) > [data-testid="inputs"]').type('michealpinto1@gmail.com');
           cy.get('.ksGYZT > label').should('exist').and('be.visible')
           cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
           cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
           cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
           cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
           cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();
           cy.wait(5000)
           cy.get('._shop').click();
           cy.wait(15000);
           cy.get(':nth-child(9) > .wrap > .other > .offerWrap > .clone').click();  
           cy.get('.css-10htf2y > [placeholder="1"]').type('5'); 
           cy.get('.css-1hw29i9 > .MuiButtonBase-root').should('be.enabled').click(); 
           cy.get('.css-srft38').click(); 
            cy.get('.__nav_actions_auth > .MuiTypography-root').click().should('have.length.greaterThan', 0);
          });
          it('Verifies user can change item quantity on "Your Cart" page', { scrollBehavior: false }, () => {
            cy.visit('https://v2-dev.ezewholesale.com/');
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
           cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').should('contain',"Nigeria").click();
           cy.get('._login').should('exist').and('be.visible').click();
           cy.get(':nth-child(1) > [data-testid="inputs"]').type('michealpinto1@gmail.com');
           cy.get('.ksGYZT > label').should('exist').and('be.visible')
           cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
           cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
           cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
           cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
           cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();
           cy.get('.__nav_actions_auth > .MuiTypography-root').click()
            // Locate and interact with the item quantity input field
            cy.wait(15000)
         // Assuming the quantity input field has a specific class or identifier
         cy.get('.quantity > .quantity-control-section > .cart-quantity-control__QuantityWrapper-sc-1eleb1w-0 > .control-wrapper > input').first().invoke('val', '').type('5')
             

// Verify if the quantity has been updated to '5'
cy.get('.quantity > .quantity-control-section > .cart-quantity-control__QuantityWrapper-sc-1eleb1w-0 > .control-wrapper > input') // Replace with the actual selector for the quantity input field
  .should('have.value', '5'); // Check if the input field now contains '5'

          
          });
          it('Verify item deletion from Your Cart',{ scrollBehavior: false }, () => {
            cy.visit('https://v2-dev.ezewholesale.com/');
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
           cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').should('contain',"Nigeria").click();
           cy.get('._login').should('exist').and('be.visible').click();
           cy.get(':nth-child(1) > [data-testid="inputs"]').type('michealpinto1@gmail.com');
           cy.get('.ksGYZT > label').should('exist').and('be.visible')
           cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
           cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
           cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
           cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
           cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();
           cy.get('.__nav_actions_auth > .MuiTypography-root').click()
           cy.get('.cartRowstyles__CartRow-sc-yxxtqz-0 > .delete > .delete-button > img').first().click();
           cy.get('.btn-primary').click();
            // Verify if the item is deleted by checking the length of items after deletion
            cy.get('.__nav_actions_auth > .MuiTypography-root').should('have.length', 1); // Adjust this according to the expected length
          });


          it('Verify functionality of Invoice order to buyer link', { scrollBehavior: false },() => {
             cy.visit('https://v2-dev.ezewholesale.com/');
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
           cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').should('contain',"Nigeria").click();
           cy.get('._login').should('exist').and('be.visible').click();
           cy.get(':nth-child(1) > [data-testid="inputs"]').type('michealpinto1@gmail.com');
           cy.get('.ksGYZT > label').should('exist').and('be.visible')
           cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
           cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
           cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
           cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
           cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();
           cy.get('.__nav_actions_auth > .MuiTypography-root').click();
           cy.get('.d-lg-flex > :nth-child(1) > [data-testid="button"]').click({ force: true })
           cy.url('https://v2-dev.ezewholesale.com/cart/invoice').should('include', '/invoice');
           cy.contains('Invoice - Order Checkout').should('be.visible'); 
          });
          it('Verify email address not found error and new fields on entering a new buyer email',{ scrollBehavior: false }, () => {
            cy.visit('https://v2-dev.ezewholesale.com/');
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
           cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').should('contain',"Nigeria").click();
           cy.get('._login').should('exist').and('be.visible').click();
           cy.get(':nth-child(1) > [data-testid="inputs"]').type('michealpinto1@gmail.com');
           cy.get('.ksGYZT > label').should('exist').and('be.visible')
           cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
           cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
           cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
           cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
           cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();
           cy.get('.__nav_actions_auth > .MuiTypography-root').click();
           cy.get('.d-lg-flex > :nth-child(1) > [data-testid="button"]').click({ force: true })
          const newBuyerEmail = 'newbuyer@example.com'; 
           cy.get('#outlined-select-email').type('akosachinedu78@gmail.com'); 
           cy.get('.invoiceOrder-modal__Container-sc-1xx64rd-3 > .MuiButtonBase-root').click(); 
           cy.get('.btn-pry').click();
            cy.contains('Email address not found').should('be.visible').then((errorExists) => {
              if (errorExists) {
               cy.get('.imgBox > div > button > svg').click();
                cy.get('.name-box > :nth-child(1) > .MuiInputBase-root > #outlined-select-email').should('be.visible').type('chinedu'); 
                cy.get('.name-box > :nth-child(2) > .MuiInputBase-root > #outlined-select-email').should('be.visible').type('ernest');
                cy.get('#outlined-error-helper-text').should('be.visible').type('1234567890'); 
                cy.get('.invoiceOrder-modal__Container2-sc-1xx64rd-4 > .MuiButtonBase-root').click();
              } else {
              }
            });
          });
          
          it('Verify new buyer created success message and proceed to Shipping & Delivery section',{ scrollBehavior: "center" }, () => {
            cy.visit('https://v2-dev.ezewholesale.com/');
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
           cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').should('contain',"Nigeria").click();
           cy.get('._login').should('exist').and('be.visible').click();
           cy.get(':nth-child(1) > [data-testid="inputs"]').type('michealpinto1@gmail.com');
           cy.get('.ksGYZT > label').should('exist').and('be.visible')
           cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
           cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
           cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
           cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
           cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();
           cy.get('.__nav_actions_auth > .MuiTypography-root').click();
           cy.get('.d-lg-flex > :nth-child(1) > [data-testid="button"]').click({ force: true })
          const newBuyerEmail = 'newbuyer@example.com'; 
           cy.get('#outlined-select-email').type('akosachinedu78@gmail.com'); 
           cy.get('.invoiceOrder-modal__Container-sc-1xx64rd-3 > .MuiButtonBase-root').click(); 
           cy.get('.btn-pry').click();
            cy.contains('Email address not found').should('be.visible').then((errorExists) => {
              if (errorExists) {
               cy.get('.imgBox > div > button > svg').click();
                cy.get('.name-box > :nth-child(1) > .MuiInputBase-root > #outlined-select-email').should('be.visible').type('chinedu'); 
                cy.get('.name-box > :nth-child(2) > .MuiInputBase-root > #outlined-select-email').should('be.visible').type('ernest');
                cy.get('#outlined-error-helper-text').should('be.visible').type('1234567890'); 
                cy.get('.invoiceOrder-modal__Container2-sc-1xx64rd-4 > .MuiButtonBase-root').click();
              } else {
              }
            cy.contains('New buyer created successfully!').should('be.visible').then(($element) => {
              $element[0].scrollIntoView();
            cy.get(':nth-child(2) > .body-section').should('be.visible').then(($element) => {
              $element[0].scrollIntoView()
          });
          });
        });
      });
      it.only('Verify user can add a new address successfully',{ scrollBehavior: "center" }, () => {
        // Visit the page or navigate to the desired URL where the popup appears
        cy.visit('https://v2-dev.ezewholesale.com/');
        cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
       cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').should('contain',"Nigeria").click();
       cy.get('._login').should('exist').and('be.visible').click();
       cy.get(':nth-child(1) > [data-testid="inputs"]').type('michealpinto1@gmail.com');
       cy.get('.ksGYZT > label').should('exist').and('be.visible')
       cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
       cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
       cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
       cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
       cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();
       cy.get('.__nav_actions_auth > .MuiTypography-root').click();
       cy.get('.d-lg-flex > :nth-child(1) > [data-testid="button"]').click({ force: true })
      const newBuyerEmail = 'newbuyer@example.com'; 
       cy.get('#outlined-select-email').type('akosachinedu78@gmail.com'); 
       cy.get('.invoiceOrder-modal__Container-sc-1xx64rd-3 > .MuiButtonBase-root').click(); 
       cy.get('.btn-pry').click();
        cy.contains('Email address not found').should('be.visible').then((errorExists) => {
          if (errorExists) {
           cy.get('.imgBox > div > button > svg').click();
            cy.get('.name-box > :nth-child(1) > .MuiInputBase-root > #outlined-select-email').should('be.visible').type('chinedu'); 
            cy.get('.name-box > :nth-child(2) > .MuiInputBase-root > #outlined-select-email').should('be.visible').type('ernest');
            cy.get('#outlined-error-helper-text').should('be.visible').type('1234567890'); 
            cy.get('.invoiceOrder-modal__Container2-sc-1xx64rd-4 > .MuiButtonBase-root').click();
          } else {
          }
        cy.contains('New buyer created successfully!').should('be.visible').then(($element) => {
          $element[0].scrollIntoView();
        cy.get(':nth-child(2) > .body-section').should('be.visible').then(($element) => {
          $element[0].scrollIntoView()
          cy.get('.btn').click();  
        cy.get('.address-layout__AddressFormWrapper-sc-1amklyq-0 > [type="text"]').type('123 Main Street');
        cy.get('#apartmentNumber').type('123')
        cy.get('#city').type('New York');
        cy.get('#postalCode').type('10001');
        cy.get(':nth-child(4) > .form-control').select('Nigeria');
        cy.get(':nth-child(5) > .form-control').select('Lagos')
        cy.get('.d-flex > [data-testid="button"]').click(); 
        cy.get('.custom-control').click();
        cy.get('.align-items-right > :nth-child(1) > .btn').click();
        cy.get('.address-wrapper').should('contain', '123 Main Street');
        // Add assertions for other details as needed
      });
      

    });
  });
});
});