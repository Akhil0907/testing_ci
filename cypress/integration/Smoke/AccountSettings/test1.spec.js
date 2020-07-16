
 describe('test it', () => {
 
     
     before(() => {   
 
        //clear the cookies before login
        cy.clearCookies()
        cy.getCookies().should('be.empty') 
 
        //visit the baseurl configured in settings
        cy.visit('https://app.useriq.com/')
        
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
     
     it('Smoke:-just test', () => {
        
        cy.contains('Dashboard').should('be.visible')
 
     })
        
     })
 
 
