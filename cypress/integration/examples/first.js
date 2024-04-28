import HomePage from '../pageObjects/HomePage'
describe('framework 1',function()
{
before(function()
{

    cy.fixture('example').then(function(data){

        this.data=data
    })
})

    it('this is first test case', function()
{
    const homePage=new HomePage()
cy.visit('https://rahulshettyacademy.com/angularpractice')
homePage.getName().type(this.data.name)
homePage.getGender().select(this.data.gender)
cy.get(':nth-child(4) > .ng-pristine').should('have.value',this.data.name)

cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
cy.get('#inlineRadio3').should('be.disabled')
cy.get("a[href='/angularpractice/shop']").click()

this.data.productname.forEach(function(element){
    cy.selectProduct(element)

} )
cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force:true})
    cy.get("input[type='submit']").click()
    
    cy.get('.alert').then(function(message){
        const actualText=message.text()
        expect(actualText.includes('Success')).to.be.true

    })
    
});
})
