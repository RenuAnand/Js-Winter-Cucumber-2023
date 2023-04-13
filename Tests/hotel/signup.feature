Feature: Sign Up
//

  Scenario: verify error message for invalid data in signup form
    Given I am on hotel homepage
    When I click on signin link
    When I click on signup link
    When I enter renu@2503 in email
    When I click on continue btn
    Then I verify error is displayed
    Then I verify continue btn is enabled

  Scenario: verify termsAndConditions link and privacy statement link open correct page on new tab
    Given I am on hotel homepage
    When I click on signin link
    When I click on signup link
    When I click on "termsAndConditions" link
    Then I verify "termsAndConditions" page opens in new tab
    Then I verify  "last revised" date format
    Then I click on "privacy statement"link
    Then I verify "privacy statement" page opens in new tab
    Then I verify "last updated" date format 

  Scenario: verify error is displayed When user submitting the empty feedback form
    Given I am on hotel homepage
    When I click on signin link
    When I click on feedback link
    When I click on submit button
    Then i verify error message is displayed(please fill in the required information highlighted below)
    Then i verify red dotted line is displayed around star-section

  Scenario: verify user can submit feedback after completing the feedback form
    Given I am on hotel homepage
    When I click on signin link
    When I click on feedback link
    When I select any star rating
    When I enter any comments
    When I select any option for "how likely are you to return to hotel.com?"
    When I select any answer for "prir to this visit, have you everbooked on hotel.com?"
    When I select any answer for "did you accomplish what you wanted to do on this page?"
    Then I click on submit button
    Then i verify "thank you for your feedback" is displayed

  Scenario: verify child age dropdowns are same as number of children selected
    Given I am on hotel homepage
    When I click on travellers
    When I select "children" as 2
    When I verify children-age dropdown are 2
    When I verify plus-button is enabled
    When I minus-button is enabled
    When I select "children" as 6
    When I verify children-age dropdown are 6
    When I verify plus-button is disabled
    When I verify minus-button is enabled
    When I select "children" as 5
    When I verify children-age dropdown are 5
    When I verify plus-button is enabled
    When I verify minus-button is enabled
    When I select "children" as 0
    When I verify children-age dropdown is not displayed
    Then I verify plus-button is enabled
    Then I verify minus-button is enabled


Scenario:verify user can update number of guest on home page
Given I am on hotel homepage
When I click on travellers
When I select "adult" as 6
When I select "children" as 3
When I select first child age:4
When I select first child age:under 1
When I select third child age:7
Then i click done
Then i verify total number of adults and children as same as selected on step#3 and#4
