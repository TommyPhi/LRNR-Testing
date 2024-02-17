describe('Navigation Bar Test', () => {
  it('Should visit all pages of LRNR website', () => {
    cy.visit('localhost:3000')

    cy.url().should('include', '/')

    cy.get('a').contains('LRNR').click()
    cy.url().should('include', '/')

    cy.get('a').contains('Home').click()
    cy.url().should('include', '/')

    cy.get('a').find('img').click()
    cy.url().should('include', '/')

    cy.get('a').contains('Account').click()
    cy.url().should('include', '/account')

    cy.get('a').contains('Quiz').click()
    cy.url().should('include', '/quiz')

    cy.get('a').contains('Results').click()
    cy.url().should('include', '/results')

  })
})