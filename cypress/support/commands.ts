/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to check if element is visible in viewport
Cypress.Commands.add('isVisible', (selector: string) => {
  cy.get(selector).should('be.visible')
})

// Custom command to scroll to element smoothly
Cypress.Commands.add('scrollToElement', (selector: string) => {
  cy.get(selector).scrollIntoView({ behavior: 'smooth' })
})

// Extend Cypress interface
declare global {
  namespace Cypress {
    interface Chainable {
      isVisible(selector: string): Chainable<Element>
      scrollToElement(selector: string): Chainable<Element>
    }
  }
}

export {}
