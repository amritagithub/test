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
   
cy.visit(Cypress.env('url')+"/angularpractice")

cy.get("a[href='/angularpractice/shop']").click()

this.data.productname.forEach(function(element){
    cy.selectProduct(element)

} )
homePage.getCheckoutButton().click()
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
})
