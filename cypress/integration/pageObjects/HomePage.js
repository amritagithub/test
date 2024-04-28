class HomePage
{
    getName()
    {
       return cy.get(':nth-child(1) > .form-control')
    }
    
    getGender()
    {
       return cy.get('select')
    }

    getCheckoutButton()
    {
      return  cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
}
export default HomePage;