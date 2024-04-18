/// <reference types="cypress" />


describe('adopt-page', () => {
  beforeEach(() => {
    cy.visit('/adopt');
    cy.get('[data-testid="gallery"]').children().as('gallery');
  })


  it('should navigate to Contact Us page when clicking "Visit Us" button', () => {
  
    cy.get('[data-testid="adopt-page"]').contains('Visit Us').click()
    cy.url().should('include', '/contact-us')

  })

  it('should render all rabbit objects in gallery', () => {
    cy.get('@gallery').should('have.length.greaterThan', 10)
  })

  it('rabbits in gallery should have image element rendered', () => {
    cy.get('@gallery').each(($el) => {
      cy.wrap($el).find('img').should('exist')
    })
  })

  it('rabbits in gallery should have cloudinary image rendered', () => {
    cy.get('@gallery').each(($el) => {
      cy.wrap($el).find('img').should('have.attr', 'src').and('include', 'cloudinary')
    })
  })

  it('should render rabbit details when clicking on a rabbit picture', () => {
    cy.get('@gallery').first().as('firstRabbit');
    cy.get('@firstRabbit').find('img').click();
    cy.get('button').contains('Enquire').should('exist');
  });

  it('should open the enquiry form when the Enquire button is clicked', () => {
    // Enquiry form is not rendered initially
    cy.get('[data-testid="enquiry-form"]').should('not.exist');

    // Clicking on first rabbit image should open the enquiry form
    cy.get('@gallery').first().as('firstRabbit');
    cy.get('@firstRabbit').find('img').click();
    cy.get('button').contains('Enquire').click();
    cy.get('[data-testid="enquiry-form"]').should('be.visible');
  });

  it.only('should close rabbit details when the Cancel button is clicked', () => {
    // Enquiry form is not rendered initially
    cy.get('[data-testid="enquiry-form"]').should('not.exist');

    // Clicking on first rabbit image should open the enquiry form
    cy.get('@gallery').first().as('firstRabbit');
    cy.get('@firstRabbit').find('img').click();
    cy.get('button').contains('Close').click();
    cy.get('button').contains('Enquire').should('not.exist');
  });
})
