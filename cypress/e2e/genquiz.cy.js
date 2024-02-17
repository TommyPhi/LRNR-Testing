describe('Generate Quiz', () => {
  it('Should generate Quiz', () => {
    cy.visit('localhost:3000')

    cy.get('a').contains('Quiz').click();

    cy.get('select#topic').select('javascript').should('have.value', 'javascript');
    cy.get('select#expertise').select('novice').should('have.value', 'novice');
    cy.get('select#numquestions').select('5').should('have.value', 5);
    cy.get('select#questionstyle').select('master oogway').should('have.value', 'master oogway');

    cy.get('button').contains('Submit').click();
    cy.wait(5000)

    cy.get('h1').contains('Question 1').should('exist');
  })
})