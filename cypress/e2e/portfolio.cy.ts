describe('Portfolio Website', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load the homepage successfully', () => {
    cy.get('h1').should('contain', 'Everton Lima')
    cy.get('main').should('be.visible')
  })

  it('should display navigation and scroll to sections', () => {
    // Test scroll to projects
    cy.contains('Ver projetos').click()
    cy.get('#projetos').should('be.visible')
    
    // Test scroll to contact
    cy.contains('Contato').click()
    cy.get('#contato').should('be.visible')
  })

  it('should display all main sections', () => {
    // Hero section
    cy.get('main').within(() => {
      cy.contains('Everton Lima').should('be.visible')
      cy.contains('Desenvolvedor Full Stack').should('be.visible')
    })

    // About section
    cy.contains('Sobre Mim').should('be.visible')
    
    // Skills section
    cy.contains('Habilidades').should('be.visible')
    
    // Projects section
    cy.get('#projetos').should('exist')
    
    // Contact section
    cy.get('#contato').should('exist')
  })

  it('should have working social media links', () => {
    cy.get('a[href*="github.com"]').should('exist')
    cy.get('a[href*="linkedin.com"]').should('exist')
    cy.get('a[href*="instagram.com"]').should('exist')
  })

  it('should display skills with progress bars', () => {
    cy.contains('Habilidades').scrollIntoView()
    cy.get('[role="progressbar"]').should('have.length.greaterThan', 0)
    
    // Check if specific skills are present
    cy.contains('React').should('be.visible')
    cy.contains('JavaScript').should('be.visible')
    cy.contains('HTML').should('be.visible')
    cy.contains('CSS').should('be.visible')
  })

  it('should display contact information', () => {
    cy.get('#contato').scrollIntoView()
    cy.contains('evertonapk09@gmail.com').should('be.visible')
    cy.contains('+55 (85) 992665875').should('be.visible')
    cy.contains('Fortaleza, CE - Brasil').should('be.visible')
  })

  it('should have responsive design', () => {
    // Test mobile viewport
    cy.viewport(375, 667)
    cy.get('main').should('be.visible')
    cy.contains('Everton Lima').should('be.visible')
    
    // Test tablet viewport
    cy.viewport(768, 1024)
    cy.get('main').should('be.visible')
    
    // Test desktop viewport
    cy.viewport(1280, 720)
    cy.get('main').should('be.visible')
  })
})