describe("user can successfully login with valid details, is redirected to the Accounts Overview page, then logs out successfully.", function(){


  

  it("user can successfully login with valid details", function(){

    cy.visit(Cypress.env("url"))

  })

  it("user logs out successfully.", function(){

    cy.visit(Cypress.env("url"))

  })
})