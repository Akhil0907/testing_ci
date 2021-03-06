 // <reference types="Cypress" />

 //T756 create a segment for tour step reached

 describe('Create Segment', () => {
 
     
     before(() => {   
 
        //clear the cookies before login
        cy.clearCookies()
        cy.getCookies().should('be.empty') 
 
        //visit the baseurl configured in settings
        cy.visit('/')
        
        //login with email and password stored in settings
        cy.get('#user_email').should('not.be.hidden').type("akhil.manjunath@useriq.com",{log:false})
 
        cy.get('#user_password').should('not.be.hidden').type("Akhil2020@",{log:false})
 
        cy.get('.signin-btn').should('not.be.disabled').click()

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        })
     
     it('Smoke:-Create Segment for tour step reached', () => {
        
        cy.contains('Dashboard').should('be.visible')
 
     })
        
     })
 
 
