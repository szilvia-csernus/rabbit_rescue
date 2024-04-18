/// <reference types="cypress" />


describe('adopt-page', () => {
  beforeEach(() => {
    cy.visit('/adopt')
  })


  it('should navigate to Contact Us page when clicking "Visit Us" button', () => {
  
    cy.get('[data-testid="adopt-page"]').contains('Visit Us').click()
    cy.url().should('include', '/contact-us')

  })

  it('should render all rabbit objects in gallery', () => {
    cy.get('[data-testid="gallery"]').children().should('have.length.greaterThan', 10)
  })

  it('rabbits in gallery should have image element rendered', () => {
    cy.get('[data-testid="gallery"]').children().each(($el) => {
      cy.wrap($el).find('img').should('exist')
    })
  })

  it('rabbits in gallery should have cloudinary image rendered', () => {
    cy.get('[data-testid="gallery"]').children().each(($el) => {
      cy.wrap($el).find('img').should('have.attr', 'src').and('include', 'cloudinary')
    })
  })
  
})
