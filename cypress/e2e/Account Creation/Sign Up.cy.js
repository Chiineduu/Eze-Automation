describe('Account Creation', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    });
     
    const Chance = require('chance');
    const chance = new Chance();
    
    // Rest of your Cypress test code
    
  
      it('To verify user is able to create account with Company Name.', () => {
       cy.visit('https://v2-dev.ezewholesale.com/');
       cy.get(':nth-child(6) > #panel1a-header',{ timeout: 10000 }).click().should('contain',"Africa");
       cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)', { timeout: 10000 }).click().should('contain',"Nigeria");
       cy.get('._sign_up').click().should('contain', "Create an Account");
       cy.get(':nth-child(1) > :nth-child(1) > [data-testid="inputs"]').type('chinedu')
       cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(1) > .dpZqKl > [data-testid="inputs"]').type('Ernest');
       cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(1) > :nth-child(2) > label').should('contain',"Last Name");
       cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(2) > [data-testid="inputs"]').type(chance.email({domain: "ezewholesale.com"}))
       cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(2) > label').should('contain',"Email Address");
       cy.get('.biz > [data-testid="input"] > [data-testid="inputs"]').type('MVP Gadgets');
       cy.get('.biz > [data-testid="input"] > label').should('contain',"Company Name");
       cy.get(':nth-child(2) > select').select('Nigeria')
       cy.get('.biz > :nth-child(2) > label').should('contain','Country of Business')
       cy.get('.arrow').click();
       cy.get('[data-flag-key="flag_no_138"]').click();
       cy.get('.phone > input').type('09034364269');
       cy.get(':nth-child(5) > .input-group > [data-testid="inputs"]').type('Nextdoor@1a')
       cy.get(':nth-child(5) > label').should('exist').and('be.visible');
       cy.get('.dpZqKl > .input-group > [data-testid="inputs"]').type('Nextdoor@1a');
       cy.get(':nth-child(6) > label').should('exist').and('be.visible');
       cy.get('.infoOption > select').select('Media', { force: true });
       cy.get('.infoOption > label',{ timeout: 10000 }).should('exist').and('be.visible');
       cy.get('.register-form__Wrap-sc-1fcgwnl-0 > [data-testid="button"]',{ timeout: 10000 }).click().should('exist').and('be.visible');
       cy.wait(5000);
       cy.get('.emailConfirmation__FormWrapper-sc-sj611p-1').click().should('exist').and('be.visible');
      });
  
      it('To verify user is able to create account with Gmail.', () => {
        cy.visit('https://v2-dev.ezewholesale.com/');
        cy.get(':nth-child(6) > #panel1a-header',{ timeout: 10000 }).click().should('contain',"Africa");
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)',{ timeout: 10000 }).click().should('contain',"Nigeria");
        cy.get('._sign_up').click().should('contain', "Create an Account");
        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="inputs"]').type('chinedu')
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(1) > .dpZqKl > [data-testid="inputs"]').type('Ernest');
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(1) > :nth-child(2) > label').should('contain',"Last Name");
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(2) > [data-testid="inputs"]').type(chance.email({domain: "gmail.com"}))
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(2) > label').should('contain',"Email Address");
        cy.get('.biz > [data-testid="input"] > [data-testid="inputs"]').type('MVP Gadgets');
        cy.get('.biz > [data-testid="input"] > label').should('contain',"Company Name");
        cy.get(':nth-child(2) > select').select('Nigeria')
        cy.get('.biz > :nth-child(2) > label').should('contain','Country of Business')
        cy.get('.arrow').click();
        cy.get('[data-flag-key="flag_no_138"]').click();
        cy.get('.phone > input').type('09034364269');
        cy.get(':nth-child(5) > .input-group > [data-testid="inputs"]').type('Nextdoor@1a')
        cy.get(':nth-child(5) > label').should('exist').and('be.visible');
        cy.get('.dpZqKl > .input-group > [data-testid="inputs"]').type('Nextdoor@1a');
        cy.get(':nth-child(6) > label').should('exist').and('be.visible');
        cy.get('.infoOption > select').select('Media', { force: true });
        cy.get('.infoOption > label').should('exist',{ timeout: 10000 }).and('be.visible');
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > [data-testid="button"]',{ timeout: 10000 }).click().should('exist').and('be.visible');
        cy.wait(5000);
        cy.get('.emailConfirmation__FormWrapper-sc-sj611p-1').click().should('exist').and('be.visible');
      });
      
      it('To verify user is able to create account with outlook.', () => {
        cy.visit('https://v2-dev.ezewholesale.com/');
        cy.get(':nth-child(6) > #panel1a-header',{ timeout: 10000 }).click().should('contain',"Africa");
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)', { timeout: 10000 }).click().should('contain',"Nigeria");
        cy.get('._sign_up').click().should('contain', "Create an Account");
        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="inputs"]').type('Chinedu')
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(1) > .dpZqKl > [data-testid="inputs"]').type('Ernest');
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(1) > :nth-child(2) > label').should('contain',"Last Name");
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(2) > [data-testid="inputs"]').type(chance.email({domain: "outlook.com"}))
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(2) > label').should('contain',"Email Address");
        cy.get('.biz > [data-testid="input"] > [data-testid="inputs"]').type('MVP Gadgets');
        cy.get('.biz > [data-testid="input"] > label').should('contain',"Company Name");
        cy.get(':nth-child(2) > select').select('Nigeria')
        cy.get('.biz > :nth-child(2) > label').should('contain','Country of Business')
        cy.get('.arrow').click();
        cy.get('[data-flag-key="flag_no_138"]').click();
        cy.get('.phone > input').type('09034364269');
        cy.get(':nth-child(5) > .input-group > [data-testid="inputs"]').type('Nextdoor@1a')
        cy.get(':nth-child(5) > label').should('exist').and('be.visible');
        cy.get('.dpZqKl > .input-group > [data-testid="inputs"]').type('Nextdoor@1a');
        cy.get(':nth-child(6) > label').should('exist').and('be.visible');
        cy.get('.infoOption > select').select('Media', { force: true });
        cy.get('.infoOption > label',{ timeout: 10000 }).should('exist').and('be.visible');
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > [data-testid="button"]',{ timeout: 10000 }).click();
        cy.wait(5000);
        cy.get('.emailConfirmation__FormWrapper-sc-sj611p-1').click().should('exist').and('be.visible');
        
      });
  
      it('To verify user is able to create account with HotMail.', () => {
        cy.visit('https://v2-dev.ezewholesale.com/');
        cy.get(':nth-child(6) > #panel1a-header',{ timeout: 10000 }).click().should('contain',"Africa");
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)',{ timeout: 10000 }).click().should('contain',"Nigeria");
        cy.get('._sign_up').click().should('contain', "Create an Account");
        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="inputs"]').type('chinedu')
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(1) > .dpZqKl > [data-testid="inputs"]').type('Ernest');
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(1) > :nth-child(2) > label').should('contain',"Last Name");
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(2) > [data-testid="inputs"]').type(chance.email({domain: "hotmail.com"}))
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(2) > label').should('contain',"Email Address");
        cy.get('.biz > [data-testid="input"] > [data-testid="inputs"]').type('MVP Gadgets');
        cy.get('.biz > [data-testid="input"] > label').should('contain',"Company Name");
        cy.get(':nth-child(2) > select').select('Nigeria')
        cy.get('.biz > :nth-child(2) > label').should('contain','Country of Business')
        cy.get('.arrow').click();
        cy.get('[data-flag-key="flag_no_138"]').click();
        cy.get('.phone > input').type('09034364269');
        cy.get(':nth-child(5) > .input-group > [data-testid="inputs"]').type('Nextdoor@1a')
        cy.get(':nth-child(5) > label').should('exist').and('be.visible');
        cy.get('.dpZqKl > .input-group > [data-testid="inputs"]').type('Nextdoor@1a');
        cy.get(':nth-child(6) > label').should('exist').and('be.visible');
        cy.get('.infoOption > select').select('Media', { force: true });
        cy.get('.infoOption > label').should('exist',{ timeout: 10000 }).and('be.visible');
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > [data-testid="button"]',{ timeout: 10000 }).click().should('exist').and('be.visible');
        cy.wait(5000);
        cy.get('.emailConfirmation__FormWrapper-sc-sj611p-1').click().should('exist').and('be.visible');
      });
  
      it('To verify user is able to create account with Zoho.', () => {
        cy.visit('https://v2-dev.ezewholesale.com/');
        cy.get(':nth-child(6) > #panel1a-header',{ timeout: 10000 }).click().should('contain',"Africa");
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)',{ timeout: 10000 }).click().should('contain',"Nigeria");
        cy.get('._sign_up').click().should('contain', "Create an Account");
        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="inputs"]').type('chinedu')
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(1) > .dpZqKl > [data-testid="inputs"]').type('Ernest');
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(1) > :nth-child(2) > label').should('contain',"Last Name");
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(2) > [data-testid="inputs"]').type(chance.email({domain: "zohomail.com"}))
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > :nth-child(2) > label').should('contain',"Email Address");
        cy.get('.biz > [data-testid="input"] > [data-testid="inputs"]').type('MVP Gadgets');
        cy.get('.biz > [data-testid="input"] > label').should('contain',"Company Name");
        cy.get(':nth-child(2) > select').select('Nigeria')
        cy.get('.biz > :nth-child(2) > label').should('contain','Country of Business')
        cy.get('.arrow').click();
        cy.get('[data-flag-key="flag_no_138"]').click();
        cy.get('.phone > input').type('09034364269');
        cy.get(':nth-child(5) > .input-group > [data-testid="inputs"]').type('Nextdoor@1a')
        cy.get(':nth-child(5) > label').should('exist').and('be.visible');
        cy.get('.dpZqKl > .input-group > [data-testid="inputs"]').type('Nextdoor@1a');
        cy.get(':nth-child(6) > label').should('exist').and('be.visible');
        cy.get('.infoOption > select').select('Media', { force: true });
        cy.get('.infoOption > label').should('exist',{ timeout: 10000 }).and('be.visible');
        cy.get('.register-form__Wrap-sc-1fcgwnl-0 > [data-testid="button"]',{ timeout: 10000 }).click().should('exist').and('be.visible');
        cy.wait(5000);
        cy.get('.emailConfirmation__FormWrapper-sc-sj611p-1').click().should('exist').and('be.visible');
      });
    
    });
  