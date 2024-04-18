describe('Enquiry Form', () => {
  beforeEach(() => {
    cy.visit('/adopt');

    cy.get('[data-testid="gallery"]').children().as('gallery');
    cy.get('@gallery').first().click();
    cy.get('button').contains('Enquire').click();

    cy.get('[data-testid="name"]').as('name');
    cy.get('[data-testid="email"]').as('email');
    cy.get('[data-testid="phone"]').as('phone');
    cy.get('[data-testid="message"]').as('message');
  });

  const properties = [
    'name',
    'email',
    'phone',
    'message'
  ];

  properties.forEach(property => {
    it(`should have a ${property} input field`, () => {
      cy.get(`[data-testid="${property}"]`).should('exist');
  });
  });

  it('Cancel button should close the form', () => {
    cy.get('button').contains('Cancel').click();
    cy.get('[data-testid="enquiry-form"]').should('not.exist');
  })

  it('submitting empty form should not submit the form', () => {
    cy.get('button').contains('Send').click();
    cy.get('[data-testid="enquiry-form"]').should('exist');
  });

  it('clicking in and out of name field should render error on name field', () => {
    cy.get('@name').click();
    cy.get('@name').blur();
    cy.get('@name').invoke('attr', 'class').should('match', /formInputInvalid/);
  });

  it('typing in name field should remove error on name field', () => {
    cy.get('@name').click();
    cy.get('@name').blur();
    cy.get('@name').invoke('attr', 'class').should('match', /formInputInvalid/);
    cy.get('@name').type('John Doe');
    cy.get('@name').invoke('attr', 'class').should('not.match', /formInputInvalid/);
  });

  it('clicking in and out of email field should render error on email field', () => {
    cy.get('@email').click();
    cy.get('@email').blur();
    cy.get('@email').invoke('attr', 'class').should('match', /formInputInvalid/);
  });

  it('typing in email field should remove error on email field', () => {
    cy.get('@email').click();
    cy.get('@email').blur();
    cy.get('@email').invoke('attr', 'class').should('match', /formInputInvalid/);
    cy.get('@email').type('test@test.com');
    cy.get('@email').invoke('attr', 'class').should('not.match', /formInputInvalid/);
  });

  it('typing invalid email in email field should render error on email field', () => {
    cy.get('@email').type('test');
    cy.get('@email').blur();
    cy.get('@email').invoke('attr', 'class').should('match', /formInputInvalid/);
  });

  it('typing valid email in email field should remove error on email field', () => {
    cy.get('@email').type('test');
    cy.get('@email').blur();
    cy.get('@email').invoke('attr', 'class').should('match', /formInputInvalid/);
    cy.get('@email').type('test@test.com');
    cy.get('@email').invoke('attr', 'class').should('not.match', /formInputInvalid/);
  });


  it('submitting form with empty "name" field should render error on name field', () => {
    // fill in email field only
    cy.get('[data-testid="email"]').type('test@test.com');
    cy.get('button').contains('Send').click();
    cy.get('[data-testid="name"]').invoke('attr', 'class').should('match', /formInputInvalid/);
  });

  it('submitting form with empty "email" field should render error on email field', () => {
    // fill in name field only
    cy.get('[data-testid="name"]').type('John Doe');
    cy.get('button').contains('Send').click();
    cy.get('[data-testid="email"]').invoke('attr', 'class').should('match', /formInputInvalid/);
  });

  it('sending valid form with required fields only should submit the form', () => {
    // set up the intercept
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', { statusCode: 200, body: { message: 'Success' } }).as('sendEmail');

    // fill in all required fields
    cy.get('[data-testid="name"]').type('John Doe');
    cy.get('[data-testid="email"]').type('test@test.com');

    cy.get('button').contains('Send').click();
    cy.wait('@sendEmail'); 
    
    cy.get('[data-testid="volunteer-form"]').should('not.exist');
  });

  it('sending valid form should submit the form', () => {
     // set up the intercept
     cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', { statusCode: 200, body: { message: 'Success' } }).as('sendEmail');

    // fill in all fields
    cy.get('[data-testid="name"]').type('John Doe');
    cy.get('[data-testid="email"]').type('test@test.com');
    cy.get('[data-testid="phone"]').type('123456789');
    cy.get('[data-testid="message"]').type('I want to volunteer');

    cy.get('button').contains('Send').click();
    cy.wait('@sendEmail');

    cy.get('[data-testid="volunteer-form"]').should('not.exist');
  });

  it('should display error message after error response from EmailJS', () => {
    // set up the intercept
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', { statusCode: 500, body: { message: 'Error' } }).as('sendEmail');

    // fill in all fields
    cy.get('[data-testid="name"]').type('John Doe');
    cy.get('[data-testid="email"]').type('test@test.com');

    // submit the form
    cy.get('button').contains('Send').click();

    // wait for the POST request
    cy.wait('@sendEmail');

    cy.get('[data-testid="volunteer-form"]').should('not.exist');
    cy.get('[data-testid="error-message"]').should('exist');
  });

  it('should display success message after success response from EmailJS', () => {
    // set up the intercept
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', { statusCode: 200, body: { message: 'Success' } }).as('sendEmail');

    // fill in all fields
    cy.get('[data-testid="name"]').type('John Doe');
    cy.get('[data-testid="email"]').type('test@test.com');

    // submit the form
    cy.get('button').contains('Send').click();

    // wait for the POST request
    cy.wait('@sendEmail');

    cy.get('[data-testid="volunteer-form"]').should('not.exist');
    cy.get('[data-testid="thanks-volunteer"]').should('be.visible');
  });

});
