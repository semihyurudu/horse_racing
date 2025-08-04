import { RACE_DISTANCES } from '../../src/constants/staticValues'

describe('Generate Program Feature', () => {
    it('should generate correct number of race programs', () => {
        cy.visit('/')

        cy.contains('button', 'Generate Program').click()

        cy.get('.Toastify__toast-body')
            .should('contain.text', 'New program generated!')
            .and('be.visible')

        cy.get('[data-test-id="program-item"]')
            .should('have.length', RACE_DISTANCES.length)
    })
})
