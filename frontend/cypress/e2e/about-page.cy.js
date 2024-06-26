/// <reference types="cypress" />


describe('about-page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display logo', () => {
    cy.get('svg').should('exist')
    cy.get('[data-testid=logo]').should('exist')
    cy.get('[data-testid=logo-text]').should('have.text', 'rabbit rescue')
    
  })

  it('should navigate to Adopt page when clicking "Adopt" in main navbar', () => {

    cy.get('[aria-label="main navigation"]').contains('Adopt').click()
    cy.url().should('include', '/adopt')

  })

  it('should navigate to Contact Us page when clicking "Contact Us" link in main navbar', () => {
  
    cy.get('[aria-label="main navigation"]').contains('Contact Us').click()
    cy.url().should('include', '/contact-us')

  })

  it('should navigate to Stripe page when clicking Donate button in main navbar', () => {
    // set up the intercept
    cy.intercept('GET', 'https://donate.stripe.com/*', { statusCode: 200, body: { message: 'Intercepted Stripe Request' } }).as('stripe');

    cy.get('[aria-label="main navigation"]').contains('Donate').click()
    cy.wait('@stripe')
    
    cy.url().should('include', 'stripe') 

  })

  it('should navigate to Adopt page when clicking the CTA "Adopt" button', () => {

    cy.get('[data-testid="about-page"]').contains('Adopt').click()
    cy.url().should('include', '/adopt')

  })

  it('should navigate to Adopt page when clicking "Find Out More" button', () => {

    cy.get('[data-testid="about-page"]').contains('Find Out More').click()
    cy.url().should('include', '/adopt')

  })

  it('should navigate to Contact Us page when clicking "Visit Us" button', () => {
  
    cy.get('[data-testid="about-page"]').contains('Visit Us').click()
    cy.url().should('include', '/contact-us')

  })

  it('should render Volunteer form when clicking "Volunteer" button', () => {
  
    cy.get('[data-testid="about-page"]').contains('Volunteer').click()
    cy.get('[data-testid="volunteer-form"]').should('be.visible')

  })

  it('should navigate to Stripe page when clicking Donate button', () => {
    // set up the intercept
    cy.intercept('GET', 'https://donate.stripe.com/*', { statusCode: 200, body: { message: 'Intercepted Stripe Request' } }).as('stripe');

    cy.get('[data-testid="about-page"]').contains('Donate').click()
    cy.wait('@stripe')

    cy.url().should('include', 'stripe') 

  })
  
})
