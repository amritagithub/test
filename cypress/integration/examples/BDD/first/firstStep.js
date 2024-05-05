import {
    DataTable,
    Given,
    Then,
    When,
   
  } from "@badeball/cypress-cucumber-preprocessor";




Given('I open Ecommerce Page', () => {
    cy.visit(Cypress.env('url')+"/angularpractice")
  })

  When('I add items to cart',()=>{
    cy.get("a[href='/angularpractice/shop']").click()
    const productname=["Blackberry","Nokia Edge"]
  productname.forEach(function(element){
        cy.selectProduct(element)
    
    } )
    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()

  })
  Then('validate the price of the products',()=>
{
    var sum=0
cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>
{
const amount=$el.text()
var res=amount.split(" ")
res=res[1].trim()
sum=Number(sum)+Number(res)
cy.log(sum)
}

    )
    var totalfinal=0
    cy.get('h3 > strong').then(function(total){
const tot=total.text()
      var   tot1=tot.split(" ")
        var total1=tot1[1].trim()

totalfinal=Number(total1)
expect(totalfinal).to.equal(sum)
    })
})

Then('select the country and verify Thank you',()=>{
    
cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force:true})
    cy.get("input[type='submit']").click()
    
    cy.get('.alert').then(function(message){
        const actualText=message.text()
        expect(actualText.includes('Success')).to.be.true


    }) })



When('I fill the form details',function(dataTable)
{
    cy.get(':nth-child(1) > .form-control').type(dataTable.rawTable[1][0])
    cy.get('select').select(dataTable.rawTable[1][1])
})

Then('validate form behaviour',()=>
{
    //cy.get(':nth-child(4) > .ng-pristine').should('have.value',this.data.name)

    cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
    cy.get('#inlineRadio3').should('be.disabled')
})




Then('Select the shop page',()=>
{
    cy.get("a[href='/angularpractice/shop']").click()
})