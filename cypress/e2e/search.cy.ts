describe('User Search Scenario', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should filter items when searching', () => {
    cy.get('app-item-card').should('have.length.greaterThan', 0);

    cy.get('.search-input').type('Nike');

    cy.wait(3500);

    cy.get('app-item-card').each(($el) => {
      cy.wrap($el).contains('Nike', { matchCase: false });
    });
  });
});
