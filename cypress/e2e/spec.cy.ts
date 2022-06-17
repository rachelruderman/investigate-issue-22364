/// <reference types="cypress" />
describe('if your app uses jQuery', () => {
  ['mouseover', 'mouseout', 'mouseenter', 'mouseleave'].forEach((event) => {
      it('triggers event: ' + event, () => {
          cy.log('test ran');
      })
  })

  it('normal test 1', () => {
      cy.log('test ran');
  })
})