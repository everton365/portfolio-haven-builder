describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#contato').scrollIntoView()
  })

  it('should display contact form', () => {
    cy.get('form').should('be.visible')
    cy.get('input[placeholder="Seu Nome"]').should('be.visible')
    cy.get('input[placeholder="Seu Email"]').should('be.visible')
    cy.get('textarea[placeholder="Sua Mensagem"]').should('be.visible')
    cy.get('button[type="submit"]').should('contain', 'Enviar Mensagem')
  })

  it('should validate required fields', () => {
    cy.get('button[type="submit"]').click()
    cy.contains('Todos os campos são obrigatórios').should('be.visible')
  })

  it('should validate email format', () => {
    cy.get('input[placeholder="Seu Nome"]').type('João Silva')
    cy.get('input[placeholder="Seu Email"]').type('email-invalido')
    cy.get('textarea[placeholder="Sua Mensagem"]').type('Teste de mensagem')
    cy.get('button[type="submit"]').click()
    
    cy.contains('Por favor, insira um email válido').should('be.visible')
  })

  it('should respect character limits', () => {
    const longName = 'a'.repeat(101)
    const longEmail = 'a'.repeat(90) + '@teste.com'
    const longMessage = 'a'.repeat(501)
    
    cy.get('input[placeholder="Seu Nome"]').type(longName)
    cy.get('input[placeholder="Seu Nome"]').should('have.value', 'a'.repeat(100))
    
    cy.get('input[placeholder="Seu Email"]').type(longEmail)
    cy.get('input[placeholder="Seu Email"]').should('have.value', 'a'.repeat(87) + '@teste.com')
    
    cy.get('textarea[placeholder="Sua Mensagem"]').type(longMessage)
    cy.get('textarea[placeholder="Sua Mensagem"]').should('have.value', 'a'.repeat(500))
  })

  it('should show loading state when submitting', () => {
    cy.get('input[placeholder="Seu Nome"]').type('João Silva')
    cy.get('input[placeholder="Seu Email"]').type('joao@teste.com')
    cy.get('textarea[placeholder="Sua Mensagem"]').type('Mensagem de teste')
    
    // Intercept the API call to control the response
    cy.intercept('POST', '/api/send-whatsapp', { delay: 1000 }).as('sendMessage')
    
    cy.get('button[type="submit"]').click()
    cy.get('button[type="submit"]').should('contain', 'Enviando...')
    cy.get('button[type="submit"]').should('be.disabled')
  })

  it('should clear form after successful submission', () => {
    cy.intercept('POST', '/api/send-whatsapp', {
      statusCode: 200,
      body: { success: true }
    }).as('sendMessageSuccess')
    
    cy.get('input[placeholder="Seu Nome"]').type('João Silva')
    cy.get('input[placeholder="Seu Email"]').type('joao@teste.com')
    cy.get('textarea[placeholder="Sua Mensagem"]').type('Mensagem de teste')
    
    cy.get('button[type="submit"]').click()
    cy.wait('@sendMessageSuccess')
    
    cy.contains('Mensagem enviada com sucesso!').should('be.visible')
    cy.get('input[placeholder="Seu Nome"]').should('have.value', '')
    cy.get('input[placeholder="Seu Email"]').should('have.value', '')
    cy.get('textarea[placeholder="Sua Mensagem"]').should('have.value', '')
  })
})