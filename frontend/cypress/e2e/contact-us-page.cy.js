describe('Contact Us Page', () => {
  beforeEach(() => {
    cy.visit('/contact-us');
  });

  it('should load the page', () => {
    cy.get('[data-testid="contact-us-page"]').should('be.visible');
  });

  it('should display the correct titles', () => {
    cy.get('h1').should('have.text', 'Contact Us');
    cy.get('h2').first().should('have.text', 'How to find us?');
  });

  it('should display the map', () => {
    cy.get('iframe').should('have.attr', 'src').and('include', 'google');
  });

  it('should open the volunteer form when the Volunteer button is clicked', () => {
    cy.get('button').contains('Volunteer').as('volunteerForm')
    cy.get('@volunteerForm').click();
    cy.get('[data-testid="volunteer-form"]').should('be.visible'); 
  });
});