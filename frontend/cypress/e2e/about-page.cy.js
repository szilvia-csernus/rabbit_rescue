/// <reference types="cypress" />


describe('about-page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display logo', () => {
    cy.get('svg').should('exist')
    cy.get('[data-cy=logo]').should('exist')
    cy.get('[data-cy=logo-text]').should('have.text', 'rabbit rescue')
    
  })

  
})
