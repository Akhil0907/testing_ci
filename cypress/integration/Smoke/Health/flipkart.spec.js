
describe('flikpart', () => {
    

    it('Smoke:-shopping ', () => {
        
      cy.visit('/')
        
        cy.url().should('include','https://www.oracle.com/index.html')
        cy.contains('Products').should('be.visible')
        cy.contains('Resources').should('be.visible')
        cy.contains('Support').should('be.visible')
        })
    
    })
       
 

