Feature: Sign in

  Scenario: Verify verification message for invalid sign in credentials
    Given I am on hotel homepage
    When I click on signin link
    When I click on signin button
    When I enter invalid email
    When I click on continue btn
    Then I verify error message is displayed

  Scenario: verify language can be changed successfully
    Given I am on hotel homepage
    When I click on "English" language
    When I select "Espanol" in language dropdown
    When I click on "save" button
    When I verify "Espanol is displayed
    When I click on "Espanol" language
    When I select "English" in language dropdown
    When I click on "Guardar" button
    Then I verify "English" is displayed

  Scenario: verify "list your property" flow
    Given I am on hotel homepage
    When I click on "list your property"
    When I verify "what whould you like to list" is displayed
    When I verify "lodging and private residence" options are displayed
    When I click on "private residence"
    When I verify "step 1 of 3" is displayed
    When I verify "see hoe much you could earn" is displayed
    When I enter "4" as bedroom
    When I enter "2.5" as bathroom
    When I click on "next" button
    When I verify "step 2 of 3" is displayed
    When I verify "where is your property located"
    When I enter "121" in address
    When I select "1211 6th avenue,newyork,ny,USA" 
    When I verify graph is displayed
    When I verify pin in graph is displayed
    Then I verify "pin location may not be exact" is displayed below graph
