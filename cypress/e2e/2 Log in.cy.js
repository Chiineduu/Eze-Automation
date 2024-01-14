describe('Login Functionality', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
 it('should log in with valid credentials', () => {
      // Visit the login page
      cy.visit('https://v2-dev.ezewholesale.com/');
      cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
     cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
     cy.get('._login').should('exist').and('be.visible').click();
     cy.get(':nth-child(1) > [data-testid="inputs"]').type('akosa.chinedu@zohomail.com');
     cy.get('.ksGYZT > label').should('exist').and('be.visible')
     cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1a')
     cy.get('[style="margin-bottom: 17px;"] > label').should('exist').and('be.visible')
     cy.get('.styles__CheckBox-sc-5noga9-3 > input').check();
     cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('exist').and('be.visible')
     cy.get('form > [data-testid="button"]').should('exist').and('be.visible').click();

    });

     it('should display an error with invalid credentials', () => {
        // Visit the login page
        cy.visit('https://v2-dev.ezewholesale.com/');
      // Fill in the username and password fields with invalid credentials
      cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
     cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
     cy.get('._login').should('exist').and('be.visible').click();
      cy.get(':nth-child(1) > [data-testid="inputs"]').type('chiedu091@ezewholesale.com');
      cy.get('.input-group > [data-testid="inputs"]').type('Nextdoor@1aaa');

      cy.get('form > [data-testid="button"]').click();
      cy.get('.toast-message').should('exist').and('be.visible')
});

describe('Verify Register Link on Login Popup', () => {
  it('Clicks on Login and checks Register link', () => {
    // Visit the page or trigger the login popup first
    cy.visit('https://v2-dev.ezewholesale.com/');
    cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
    cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
    cy.get('._login').should('exist').and('be.visible').click();
    cy.get('p > a').should('be.visible').click();
}); 
 
describe('Verify Forgot Password Link on Login Popup', () => {
  it('Clicks on Login and checks Forgot Password link', () => {
    // Visit the page or trigger the login popup first
    cy.visit('https://v2-dev.ezewholesale.com/');
    cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
    cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
    cy.get('._login').should('exist').and('be.visible').click();
    cy.get('.styles__ActionWrapper-sc-5noga9-2 > a').should('be.visible').click();
}); 

});

describe('Verify Close Icon on Login Popup', () => {
  it('Closes Login Popup using Close Icon', () => {
    // Visit the page or trigger the login popup first
    cy.visit('https://v2-dev.ezewholesale.com/');
    cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
    cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
    cy.get('._login').should('be.visible').click();
    cy.get('[data-testid="button"] > img').should('be.visible').click()
});
});
});
describe('Verify Remember Me Checkbox Default State', () => {
  it('Checks if Remember Me Checkbox is not selected by default', () => {
    // Visit the page or trigger the login popup first
    cy.visit('https://v2-dev.ezewholesale.com/');
    cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
    cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
    cy.get('._login').should('be.visible').click();
    cy.get('.styles__CheckBox-sc-5noga9-3 > label').should('not.be.checked')
});
});
});
