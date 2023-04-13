// const { Given, Then } = require("@wdio/cucumber-framework");
// const { expect } = require("chai");

// const moment = require("moment/moment");
// const Homepage = require('../Pages/Homepage');
// const SignupPage = require('../StepDefinitions/SignupPage');

// const homepage = new Homepage();
// const signuppage = new SignupPage();


// Given(/^i click on creat new account button$/,async function(){
//    await homepage.clickcreatenewaccbtn();
//    await homepage.waitforsignupform();
//    await browser.pause(10000);
// });

// Then(/^i verify current month "(.+)" is selected in month dropdown$/,async function(){
//     await signuppage.selectedmonth('mar');
 
//  });
 
//  And(/^i verify current date "(.+)" is selected in date dropdown$/,async function(){
//     await signuppage.selecteddate('13');
//  });
 
//  And(/^i verify current year "(.+)" is selected in year dropdown$/,async function(){
//     await signuppage.selectedyear('2012');
 
//  });

 
//  selectedtime=  selectedmonth + selecteddate + selectedyear;
//  creatnewaccbtnlocator=('=Create new account');
//  signupformlocator="div=it's quick and easy.";
//  selecteddropdowndatelocator='#date';
//  selecteddropdownmonthlocator='#month';
//  selecteddropdownyearlocator='#year';

 
// async clickcreatenewaccbtn(){
//     await $(this.creatnewaccbtnlocator).click();

// }

// async signupform(){
//     await $(this.signupformlocator).waitfordisplay();

// }



// async selecteddate(Date){
//     await $(this.selecteddropdowndatelocator).selectbyvisibletext(Date);

// }

// async selectedmonth(month){
//     await $(this.selecteddropdownmonthlocator).selectbyvisibletext(month);

// }

// async selectedyear(year){
//     await $(this.selecteddropdownyearlocator).selectbyvisibletext(year);

// }

// let currtime=moment().format('MMM,DD,YYYY');

//  expect(selectedtime,'not as expected').to.equal(currtime);
