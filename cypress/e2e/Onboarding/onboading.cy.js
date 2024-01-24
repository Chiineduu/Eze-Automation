

describe('Example Test', () => {
  it.only('otp class', () => {
    // Your test code here
    cy.visit('https://trymima.com/home');
    cy.get('.mt-20 > .flex > .sc-dcJsrY > .sc-fqkvVR').click();
    cy.get('#fullname').type('Test User');
    
    // Add more test steps as needed
  });

  it('should wait for email using MailSlurp', () => {
    // Wait for the email using MailSlurp
    cy.mailslurp().waitForLatestEmail("example@mailslurp.com").then(email => {
      // Your email verification logic here
      const otp = extractOtpFromEmail(email.body);
      cy.log(`Extracted OTP: ${otp}`);
    });
  });
});
