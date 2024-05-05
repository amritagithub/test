Feature: ecommerce application
  # The first example has two steps
  Scenario: Ecommerce products delivery
  Given I open Ecommerce Page
    When I add items to cart
    Then validate the price of the products
    Then select the country and verify Thank you


    Scenario: Fill form to shop
Given I open Ecommerce Page
When I fill the form details
|name|gender|
|amrita|Female|
Then validate form behaviour
Then Select the shop page
