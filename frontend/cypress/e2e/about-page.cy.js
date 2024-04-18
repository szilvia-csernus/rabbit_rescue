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
  
    cy.get('[aria-label="main navigation"]').contains('Donate').click()
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

  it('should navigate to Stripe page when clicking Donate button', () => {
  
    cy.get('[data-testid="about-page"]').contains('Donate').click()
    cy.url().should('include', 'stripe') 

  })

  it('should render Volunteer form when clicking "Volunteer" button', () => {
  
    cy.get('[data-testid="about-page"]').contains('Volunteer').click()
    cy.get('form').should('exist')

  })

  it.only('cy.viewport() - set the viewport size and dimension to inspect by sight', () => {
    cy.viewport('macbook-15')
    cy.wait(200)
    cy.viewport('macbook-13')
    cy.wait(200)
    cy.viewport('macbook-11')
    cy.wait(200)
    cy.viewport('ipad-2')
    cy.wait(200)
    cy.viewport('ipad-mini')
    cy.wait(200)
    cy.viewport('iphone-6+')
    cy.wait(200)
    cy.viewport('iphone-x')
    cy.wait(200)
    cy.viewport('iphone-xr')
    cy.wait(200)
    cy.viewport('iphone-se2')
    cy.wait(200)
  })
  
})
