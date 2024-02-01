describe('Login Popup', () => {
    it('should display "Login" popup when clicking "Go to Shop" button', () => {
      // Visit the webpage
      cy.visit('https://v2-dev.ezewholesale.com'); 
      cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
      cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
      cy.get('.__logo_holder > :nth-child(1) > .logo__Wrapper-sc-19k2r6e-0 > .logo__LogoImageWithText-sc-19k2r6e-2').click()
      cy.get('._shop').click(); 
      cy.get('._login').should('be.visible');
    });
    describe('Subscription Confirmation', () => {
        it('should display success message for a valid email address', () => {
            // Visit the webpage
            cy.visit('https://v2-dev.ezewholesale.com'); 
            cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
            cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
            cy.get('.__logo_holder > :nth-child(1) > .logo__Wrapper-sc-19k2r6e-0 > .logo__LogoImageWithText-sc-19k2r6e-2').click()
            const validEmail = 'jeriqigwe+18@gmail.com'    
            cy.get('.css-1t7498z').type(validEmail); 
            cy.get('.css-hf3nnx > .MuiButtonBase-root').click(); 
            cy.get('.css-pmxhpni88hi66i\ > .MuiTypography-root').should('be.visible');
            cy.contains('Thanks! You\'ve successfully subscribed.').should('be.visible'); 
        });
      });
      
      describe('Subscription Error Handling', () => {
        it('should display error message for already subscribed email address', () => {
          // Visit the webpage
          cy.visit('https://v2-dev.ezewholesale.com'); 
          cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
            cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
            cy.get('.__logo_holder > :nth-child(1) > .logo__Wrapper-sc-19k2r6e-0 > .logo__LogoImageWithText-sc-19k2r6e-2').click()
          const subscribedEmail = 'akosachinedu0@gmail.com'; 
          cy.get('.css-1t7498z').type(subscribedEmail); 
          cy.get('.css-hf3nnx > .MuiButtonBase-root').click(); 
          cy.get('.css-pmxhpn > .MuiTypography-root').should('be.visible'); 
          cy.contains('You are already subscribed!').should('be.visible'); 
        });
      });

      
      describe('Footer Links Verification', () => {
        it('should verify links under "Eze" section', () => {
          cy.visit('https://v2-dev.ezewholesale.com'); 
          cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
          cy.wait(500) ;
          cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
          cy.get('.__logo_holder > :nth-child(1) > .logo__Wrapper-sc-19k2r6e-0 > .logo__LogoImageWithText-sc-19k2r6e-2').click()
          cy.get('.css-1dqbruw > :nth-child(1) > .MuiTypography-root').should('be.visible');
      
          // Add assertions to verify links under "Eze" section
          cy.get('.css-1dqbruw > :nth-child(1) > .css-tr0r3x > :nth-child(1) > a')
            .should('exist')
            .should('have.attr', 'href', 'https://medium.com/ezewholesale');
        });
      });

      describe('Social Media Icons', () => {
        it.only('should navigate to the correct social media profiles', () => {
          // Visit the page
          cy.visit('https://v2-dev.ezewholesale.com');
          cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
          cy.wait(500) ;
          cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
          cy.get('.__logo_holder > :nth-child(1) > .logo__Wrapper-sc-19k2r6e-0 > .logo__LogoImageWithText-sc-19k2r6e-2').click()
          cy.get('.css-opvapp > .MuiBox-root > [href="https://facebook.com/ezewholesale"] > .css-1hlp9l8').should('exist').click();
      
          cy.visit('https://your-website-url.com'); // Visit the page again to start fresh
          cy.get('.social-media-icon-twitter').should('exist').click();
          cy.url().should('eq', 'https://twitter.com/your-twitter-profile');
      
          // Repeat for other social media icons (Instagram, LinkedIn, etc.)
        });
      
        // Add more tests if needed
      });
      
      
  });
  