const { When, Then, Given } = require("@wdio/cucumber-framework");
const SignInpage = require("../Pages/SignInpage");
const { expect } = require("chai");
const signinpage = new SignInpage();
//TC-21

Given(/^I click on signin button$/, async function () {
  await signinpage.clickSignIn();
  await browser.pause(10000);
});

When(/^I enter invalid email$/, async function () {
  await signinpage.enteremail("renu2503");
  await browser.pause(10000);
});

When(/^I click on continue btn$/, async function () {
  await signinpage.clickcontinue();
  await browser.pause(10000);
});

Then(/^I verify error message is displayed$/, async function () {
  let errormsg = await signinpage.verifyerror();
  let iserrordiaplayed = await errormsg.isdisplayed();
  expect(iserrordiaplayed, "error is not displayed").to.be.true;
});

//TC-31

When(/^I click on "English" language$/, async function () {
  await signinpage.clickenglish();
  await browser.pause(10000);
});

When(/^ I select "Espanol" in language dropdown$/, async function () {
  let islangugeselected = await signinpage.selectlanguage(
    "Espanol"
  ).isselected();
  expect(islangugeselected, "not as expected").to.be.true;
});

When(/^I click on "save" button$/, async function () {
  await signinpage.clicksave();
  await browser.pause(10000);
});

When(/^ I verify "Espanol" is displayed$/, async function () {
  let isespanoldisplayed = await signinpage.verifyEspanol(
    "Espanol"
  ).isdisplayed();
  expect(isespanoldisplayed, "not as expected").to.be.true;
});

When(/^I click on "Espanol" language$/, async function () {
  await signinpage.clickEspanol();
  await browser.pause(10000);
});

When(/^ I select "English" in language dropdown$/, async function () {
  let islangugeselected = await signinpage.selectlanguage().isselected();
  expect(islangugeselected, "not as expected").to.be.true;
});

When(/^I click on "Guardar" button$/, async function () {
  await signinpage.clickguarder();
});

Then(/^ I verify "English" is displayed$/, async function () {
  let isEnglishdisplayed = await signinpage.verifyEnglish(
    "English"
  ).isdisplayed();
  expect(isEnglishdisplayed, "not as expected").to.be.true;
});

//TC-31

When(/^I click on "list your property"$/, async function () {
  await signinpage.clicklistproperty();
});
When(
  /^I verify "what whould you like to list" is displayed$/,
  async function () {
    let islistdisplayed =
      await signinpage.verifywhatwouldyouliketolist().isdisplayed();
    expect(islistdisplayed, "not as expected").to.be.true;
  }
);
When(
  /^I verify "lodging and private residence" options are displayed$/,
  async function () {
    let isdisplayed =
      await signinpage.lodgingandprivateresidencelocator().isdisplayed();
    expect(isdisplayed, "not as expected").to.be.true;
  }
);
When(/^I click on "private residence"$/, async function () {
  await signinpage.clickprivateresidence();
});
When(/^I verify "step 1 of 3" is displayed$/, async function () {
  let isdisplayed = await signinpage.verify1of3().isdisplayed();
  expect(isdisplayed, "not as expected").to.be.true();
});
When(
  /^I verify "see hoe much you could earn" is displayed$/,
  async function () {
    let isdisplayed =
      await signinpage.verifyseehoemuchyoucouldearn().isdisplayed();
    expect(isdisplayed, "not as expected").to.be.true();
  }
);
When(/^I enter "4" as bedroom$/, async function () {
  await signinpage.enterbed("4bedroom");
  await browser.pause(10000);
});
When(/^I enter "2.5" as bathroom$/, async function () {
  await signinpage.enterbath("1bathroom");
  await browser.pause(10000);
});
When(/^I click on "next" button$/, async function () {
  await signinpage.nextbtn();
  await browser.pause(10000);
});
When(/^I verify "step 2 of 3" is displayed$/, async function () {
  let isdisplayed = await signinpage.verify2of3().isdisplayed();
  expect(isdisplayed, "not as expected").to.be.true();
});
When(/^I verify "where is your property located"$/, async function () {
  let isdisplayed =
    await signinpage.verifyWhereisyourpropertylocated().isdisplayed();
  expect(isdisplayed, "not as expected").to.be.true();
});
When(/^I enter "121" in address$/, async function () {
  await signinpage.enteraddress('121');
  await browser.pause(10000);
});
When(/^I select "1211 6th avenue,newyork,ny,USA"$/, async function () {
  await signinpage.clicksuggestions();
for(const suggestion of allsuggestion){
const text=await suggestion.getattribute();
if(text.startswith("1211 6th avenue")){
  await suggestion.click();
break;
}
}
  await browser.pause(10000);
});

When(/^I verify graph is displayed$/, async function () {
  let isdisplayed = await signinpage.verifygraph().isdisplayed();
  expect(isdisplayed, "not as expected").to.be.true();
});

When(/^I verify pin in graph is displayed$/, async function () {
  let isdisplayed = await signinpage.verifypin().isdisplayed();
  expect(isdisplayed, "not as expected").to.be.true();
});

When(/^I verify "pin location may not be exact" is displayed below graph$/, async function () {
  let isdisplayed = await signinpage.verifypinlocation().isdisplayed();
  expect(isdisplayed, "not as expected").to.be.true();
});