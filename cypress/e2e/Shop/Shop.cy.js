describe('Menu Bar Expansion Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('should expand the menu bar after clicking the menu icon', () => {
       // Visit the home page or trigger the navigation
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
      cy.get('.styles__LeftAside-sc-1wn7sqr-1').should('have.attr','style', 'width: 223px;')
      cy.get('.toggle-btn', { timeout: 5000 }).should('exist'); 
      cy.screenshot('menu_expanded');
    });
    describe('Product Filtering Test', () => {
        beforeEach(() => {
    
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
       cy.wait(15000)
        });
      
        it.only('should filter products based on options', () => {
          // Click on the filter option(s)
          cy.get(':nth-child(1) > .MuiPaper-root > #panel1a-header > .MuiAccordionSummary-content > .styles__ProductWrap-sc-1dvopld-3 > .productImg > :nth-child(2) > .properties > :nth-child(1) > .button_box > .value_summary',{timeout:10000}).contains('storage').click();
           cy.get('.overlay > .dropdown_box > .dropdown_options .check_holder').scrollIntoView().click({multiple:true},{force:true}) 
           cy.get('.overlay > .dropdown_box > .clear_holder > button').click({force:true}) // Clear
           cy.get('div > button[type = "button"] > input').should('be.visible')
           cy.wait(5000)
            cy.get('.overlay > .dropdown_box > .dropdown_options > :nth-child(1)').then(value=>{
            selectValue = value.text();
            cy.log(selectValue)
           })
          
          cy.get('.product-item', { timeout: 5000 }).should('have.length.greaterThan', 0); // Replace '.product-item' with the actual selector for your product items
      
          // Check if the displayed products match the expected result after filtering
          // You can assert based on the product details, count, or any other criteria
          cy.get('.product-item').each((product) => {
            // Add assertions for each product as needed
            cy.wrap(product).should('contain.text', 'FilteredCriteria'); // Replace 'FilteredCriteria' with your expected product details
          });
      
          // You can also take a screenshot or do other actions for visual validation
          cy.screenshot('filtered_products');
        });
      });
      
  });
  