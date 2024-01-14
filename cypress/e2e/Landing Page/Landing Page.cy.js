describe('Verify Eze Logo on Home Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('Checks if Eze Logo appears after navigating to Home page', () => {
      // Visit the home page or trigger the navigation
      cy.visit('https://v2-dev.ezewholesale.com/');
      cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
      cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
     cy.wait(500)
     cy.get('.__logo_holder > :nth-child(1) > .logo__Wrapper-sc-19k2r6e-0 > .logo__LogoImageWithText-sc-19k2r6e-2').should('be.visible')
    });
    describe('Verify "Welcome Seller" Page', () => {
        it('Checks if "Welcome Seller" page opens after clicking "Sell on Eze" button', () => {
          // Visit the page or trigger the navigation
          cy.visit('https://v2-dev.ezewholesale.com/');
          cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
          cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
          cy.contains('Sell on Eze').click()
          // Assert that the "Welcome Seller" page opens (you may need to adjust the selector)
          cy.get('#eze-main').should('be.visible')
        })
      })

      describe('Verify "Create Account" Popup', () => {
        it('Checks if "Create Account" popup appears after clicking "Create an Account" button', () => {
          // Visit the page or trigger the navigation
          cy.visit('https://v2-dev.ezewholesale.com/');
          cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
          cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
          cy.contains('Create an Account').click()
          // Assert that the "Create Account" popup appears (you may need to adjust the selector)
          cy.get('.modal-content').should('be.visible')
        })
      })
      
      describe('Header Links Functionality', () => {
        it('Verifies navigation from header links', () => {
            cy.visit('https://v2-dev.ezewholesale.com/');
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
            cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
            cy.get('.__logo_holder > :nth-child(1) > .logo__Wrapper-sc-19k2r6e-0 > .logo__LogoImageWithText-sc-19k2r6e-2').click() // Replace 'Home' with the text for your Home link
            cy.url().should('include', 'https://v2-dev.ezewholesale.com/') // Replace '/home' with the URL path of the Home page
            cy.get('#c0904cf0-fbed-4509-9582-ea6f443a691e-Tablets > .device-image').click() // Replace 'Products' with the text for your Products link
            cy.url().should('include', 'https://v2-dev.ezewholesale.com/wholesale-tablets') // Replace '/products' with the URL path of the Products page
            cy.get('.__logo_holder > :nth-child(1) > .logo__Wrapper-sc-19k2r6e-0 > .logo__LogoImageWithText-sc-19k2r6e-2').click();
            cy.get('._shop').click();
            cy.url().should('include', 'https://v2-dev.ezewholesale.com/wholesale-cell-phones')
          // Add more links as per your header navigation structure
        })
      })
      describe('Navigational Arrows', () => {
        it('Verifies navigational arrows in News and Review sections', () => {
          // Visit the page with the News and Review sections
          cy.visit('https://v2-dev.ezewholesale.com/');
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
            cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
      
          // Verify navigation in the News section
          cy.get('.InTheNews__Wrapper-sc-1ix24y3-0 > :nth-child(1)').should('be.visible')
          cy.get('.InTheNews__FlexBetween-sc-1ix24y3-1 > :nth-child(1) > a > img').should('be.visible').click()
          cy.get(':nth-child(3) > a > img').should('be.visible').click()
          cy.get('.InTheNews__FlexBetween-sc-1ix24y3-1 > :nth-child(2) > a > img').click()
          cy.get('.InTheNews__FlexBetween-sc-1ix24y3-1 > :nth-child(4) > a > img').click()
          cy.get(':nth-child(5) > a > img').should('be.visible').click()
          cy.get(':nth-child(6) > a > img').should('be.visible').click()
          cy.get(':nth-child(7) > a > img').should('be.visible').click()
          cy.get(':nth-child(8) > a > img').should('be.visible').click()
          cy.get(':nth-child(9) > a > img').should('be.visible').click()
          cy.get(':nth-child(10) > a > img').should('be.visible').click()
          cy.get(':nth-child(11) > a > img').should('be.visible').click()
          cy.get(':nth-child(12) > a > img').should('be.visible').click()
          cy.get(':nth-child(13) > a > img').should('be.visible').click()
        })
      })
      
  });
  