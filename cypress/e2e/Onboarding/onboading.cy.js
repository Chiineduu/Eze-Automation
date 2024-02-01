describe('My Cypress Test', () => {

  const Chance = require('chance');
  const chance = new Chance();
  it('should do something', { scrollBehavior: "top" }, () => {
  cy.visit('https://ezewhosale-git-peaceadeniji-sc-11510buyer-an-5271c1-ezegenesis1.vercel.app/');
  cy.get(':nth-child(6) > #panel1a-header').click();  
  cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').should('contain', 'Nigeria').click();
  cy.get('._sign_up').click();
  cy.get('.notifyGroup > :nth-child(9) > span').should('contain', 'Government').click();
  cy.get('.BusinessType__Footer-sc-6t85ci-3 > .MuiButtonBase-root').should('be.visible').click(); 
  cy.get('.namegroup > :nth-child(1) > .styles__InputWrap-sc-1lppl70-0 > input').type(chance.name());
  cy.get('.namegroup > :nth-child(2) > .styles__InputWrap-sc-1lppl70-0 > input').type(chance.name());
  cy.get(':nth-child(2) > :nth-child(1) > .styles__InputWrap-sc-1lppl70-0 > input').type('blessed.s@icloud.com')
  cy.get(':nth-child(3) > :nth-child(1) > .styles__Dropdown-sc-w9x0sy-0 > .styles__Button-sc-w9x0sy-1').click();  
  cy.get('.optionsWrap > :nth-child(162)').should('contain', 'Nigeria').click();
  cy.get('[style="flex-direction: column;"] > :nth-child(1) > .styles__Dropdown-sc-w9x0sy-0 > .styles__Button-sc-w9x0sy-1').click();  
  cy.get('.optionsWrap > :nth-child(5)').should('contain', 'Media').click();
  cy.get(':nth-child(5) > :nth-child(1) > .styles__InputWrap-sc-1lppl70-0 > input').type('Nextdoor@1a');
  cy.get('.PersonalDetails__Footer-sc-sisy9i-3 > div > :nth-child(1)').click();
  });

  it.only('should log in with valid credentials', () => {
    // Visit the login page
    cy.visit('https://ezewhosale-git-peaceadeniji-sc-11510buyer-an-5271c1-ezegenesis1.vercel.app/');
    cy.get(':nth-child(6) > #panel1a-header').click().should('contain',"Africa");
   cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)').click().should('contain',"Nigeria");
   cy.get('._login').should('exist').and('be.visible').click();
   cy.get('.ikdDSb > input').type('blessed.s@icloud.com')
   cy.get('.ikdEby > input').type('Nextdoor@1a');
   cy.get('form > .MuiButtonBase-root').click();
   cy.wait(15000);
   cy.get('.selected-flag').click();
   cy.get('[data-flag-key="flag_no_138"]').click();
   cy.get('.styles__InputWrap-sc-1lppl70-0 > input').type('08012345678');
   cy.get('.PhoneInput__Footer-sc-tkz9lt-3 > .MuiButtonBase-root').click()
   cy.get('.styles__InputWrap-sc-1lppl70-0 > input').type('08012345678');
});
});
