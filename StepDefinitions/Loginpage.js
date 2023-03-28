const { Given, When, Then, } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

const Homepage = require('../Pages/Homepage');
const Loginpage = require('./Loginpage');

const homepage = new Homepage();
const loginpage = new Loginpage();


Given(/^i am on facebook homepage$/,async function(){
    await browser.url('/');
    await browser.pause(10000);
});

Then(/^i verify "(.+)" login email field is enabled$/,async function(){
await homepage.loginemail('renuanand.sharma@gmail.com');
let isloginemailenabled=await loginpage.isenabled();
expect(isloginemailenabled,'not enabled').to.be.true;

});


And(/^i verify "(.+)" login password field is enabled$/,async function(){
await homepage.loginpassword('renu@2503');
let isloginpasswordenabled=await loginpage.isenabled();
expect(isloginpasswordenabled,'not enabled').to.be.true;
});


And(/^i verify login button field is enabled$/,async function(){
await homepage.clickloginbutton();
let isloginbuttonenabled=await loginpage.isenabled();
expect(isloginbuttonenabled,'not enabled').to.be.true;
});


let loginpasswordlocators=('#pass');
let loginemaillocators=('#email');
let loginbuttonlocators=('button=log in');

async loginemail(loginemail){
  await $(this.loginemaillocators).setvalue(loginemail);

}

async loginpassword(loginpassword){
    await $(this.loginpasswordlocators).setvalue(loginpassword);

}

async clickloginbutton(){
    await $(this.loginbuttonlocators).click();
}
