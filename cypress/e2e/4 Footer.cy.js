describe('Login Popup', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      });
    it('Verifies Login popup on clicking Go to Shop button', () => {
      // Visit the page
      cy.visit('https://v2-dev.ezewholesale.com/');
      cy.get(':nth-child(6) > #panel1a-header',{ timeout: 10000 }).click().should('contain',"Africa");
      cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)', { timeout: 10000 }).click().should('contain',"Nigeria");
      cy.get('.css-1jzsr3l > .MuiButtonBase-root').should('be.visible').click();    
})

describe('Subscription Test', () => {
    it('Displays success message for valid email', () => {
      const validEmail = 'akosachinedu1+110@gmail.com';
      cy.visit('https://v2-dev.ezewholesale.com/');
      cy.get(':nth-child(6) > #panel1a-header',{ timeout: 10000 }).click().should('contain',"Africa");
      cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)', { timeout: 10000 }).click().should('contain',"Nigeria"); // Replace '/subscription-page' with your page URL
      cy.get('input[type="email"]').type(validEmail);
      cy.get('.css-hf3nnx > .MuiButtonBase-root').click();
      cy.contains('Thanks! You\'ve successfully subscribed.').should('be.visible');
    });
  });
  describe('Subscription Test', () => {
    it('Displays already subscribed message for subscribed email', () => {
      const subscribedEmail = 'akosachinedu1+110@gmail.com';
      cy.visit('https://v2-dev.ezewholesale.com/');
      cy.get(':nth-child(6) > #panel1a-header',{ timeout: 10000 }).click().should('contain',"Africa");
      cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)', { timeout: 10000 }).click().should('contain',"Nigeria");
      cy.get('input[type="email"]').type(subscribedEmail);
      cy.get('.css-hf3nnx > .MuiButtonBase-root').click();
      cy.contains('You are already subscribed!').should('be.visible');
    });
  });
  
    });
 
