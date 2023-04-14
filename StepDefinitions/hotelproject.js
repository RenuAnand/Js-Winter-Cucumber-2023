const { expect } = require("chai");
const Homepage = require("../Pages/Homepage");
const { Given, When, Then } = require("@wdio/cucumber-framework");
const moment = require("moment/moment");
const homepage = new Homepage();

//TC-22

Given(/^I am on hotel homepage$/, async function () {
  await browser.url("https://www.hotels.com/");
  await browser.pause(10000);
});

When(/^I click on signin link$/, async function () {
  await homepage.clickSignIn();
  await browser.pause(10000);
});

When(/^I click on signup link$/, async function () {
  await browser.waitfordisplayed();
  await homepage.clicksignup(); 
});

When(/^I enter (.+) in email$/, async function (email) {
  await homepage.enterEmail(email);
});

When(/^I click on continue btn$/, async function () {
  await homepage.clickcontinuebtn();
  await browser.pause(10000);
});

Then(/^I verify error is displayed$/, async function () {
  let iserrordiaplayed = await homepage.isdiaplayed();
  expect(iserrordiaplayed, "error is not displayed").to.be.true;
});

Then(/^I verify continue btn is enabled$/, async function () {
  let iscontinuebtnenabled = await homepage.isenabled();
  expect(iscontinuebtnenabled, "continue btn is enabled").to.be.false;
});

When(/^I click on continue btn$/, async function () {
  await homepage.clickcontinuebtn();
  await browser.pause(10000);
});

//TC-20
When(/^I click on "termsAndConditions" link$/, async function () {
  await homepage.clicktermsandconditionsbtn();
  await browser.pause(10000);
});

Then(/^I verify "termsAndConditions" page opens in new tab$/, async function () {
  const allhandles= await browser.getwindowhandles();
  for(const handle of allhandles){
    await browser.switchtowindow(handle);
  const  title  =  await browser.gettitle();
if(title.localcompare('https://www.hotels.com/lp/b/terms-of-service')===0){
  break;
} 
 }
  });

Then(/^I verify "last revised" date format$/, async function () { 
  let isstringvalid= await moment('01/01/23',MM/dd/YY).isvalid();
  islastrevisedddisplayed=await homepage.lastreviseddformat.isdisplayed();
   expect(islastreviseddisplayed, "format is not displayed").to.be.true;
});
 
  When(/^I click on "privacy statement"link$/, async function () {
  await homepage.clickprivacystatement();
});

Then(/^I verify "privacy statement" page opens in new tab$/, async function () {
  const allhandles= await browser.getwindowhandles();
  for(const handle of allhandles){
    await browser.switchtowindow(handle);
   const title  =  await browser.gettitle();
if(title.localcompare('https://www.hotels.com/customer_care/privacy.html')===0){
  break;

  }
}
});

Then(/^I verify "last updated" date format$/, async function () {
 let isstringvalid= await moment('20December2022',ddMMMMYYYY).isvalid();
 islastupdateddisplayed=await homepage.lastupdatedformat.isdisplayed();
  expect(islastupdateddisplayed, "format is not displayed").to.be.true;
});

//TC-24
When(/I click on feedback link^$/, async function () {
  await homepage.clickfeedback();
});

When(/I click on submit button^$/, async function () { 
  await browser.scrollintoview(false);
  await homepage.clicksubmitbtn();
});

Then(
  /^i verify error message is displayed(please fill in the required information highlighted below)$/,
  async function () {
    iserrormsgdisplayed=await homepage.requiredinformation();
    expect(iserrormsgdisplayed, "error msg is not displayed").to.be.true;
  });

Then(
  /^i verify red dotted line is displayed around star-section$/,async function () {
    let isreddottedlinedisplayed = await homepage.pagerating();
    expect(isreddottedlinedisplayed, "red dotted lined is not displayed").to.be.true;
  });
  

  //TC-25
  When(/^I select any star rating$/, async function () {
    await homepage.click4starrating();
  });

  When(/^I enter any comments$/, async function () {
    await homepage.enterpagecomments();
  });

  When(/^I select any option for "how likely are you to return to hotel.com?"$/, async function () {
    await homepage.clickreturntohotel();
  });

  When(/^I select any answer for "prir to this visit, have you everbooked on hotel.com?$/, async function () {
    await homepage.clickvisithotel();
  });

  Then(/^I select any answer for "did you accomplish what you wanted to do on this page?"$/, async function () {
    await homepage.clickdonesuccessfully();
  });

  Then(/^i verify "thank you for your feedback" is displayed$/, async function () {
    await homepage.thankyoufeedback();
  });


//TC-18
  When(/^I select "adult" as 6$/, async function () {
    await homepage.addadult(6).isselected();
  });

  When(/^I select "children" as 3$/, async function () {
    await homepage.addchildren(3).isselected();
  });

  When(/^I select first child age:4$/, async function () {
    await homepage.addchildage(3).isselected();
  });

  When(/^I select second child age:under1$/, async function () {
    await homepage.addsecondchildage(1).isselected();
  });

  When(/^I select third child age:7$/, async function () {
    await homepage.addthirdchildage(7).isselected();
  });

  Then(/^i click done$/, async function () {
    await homepage.clickdone();
  
  });
  Then(/^i verify total number of adults and children as same as selected on step#3 and#4$/, async function () {
 let totaltravelerscount= await homepage.travellerscount();
  expect(totaltravelerscount,'not as expected').to.equal("9travellers,1 room");
  });

