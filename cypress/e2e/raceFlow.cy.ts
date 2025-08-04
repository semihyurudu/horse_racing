describe('Race Simulation - Basic Flow', () => {
    it('should simulate a race and show results for the correct horses', () => {
        cy.visit('/')

        cy.contains('Start Race').click()

        cy.get('[data-test-id="horse"]', { timeout: 60000 }).should('have.length.at.least', 1)

        cy.get('[data-test-id="horse"]')
            .first()
            .invoke('attr', 'data-horse-name')
            .then((horseName) => {
                cy.get('[data-test-id="race-results"] [data-race-index="0"]', { timeout: 20000 })
                    .should('exist')
                    .and('contain.text', horseName!)
            })
    })
})
