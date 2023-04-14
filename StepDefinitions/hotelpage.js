// const { Given, Then } = require("@wdio/cucumber-framework/build");
// const { expect } = require("chai");
// const { now } = require("moment");
// const { and } = require("wdio-wait-for");
// const hotelpage = require('./hotelpage');
  
// const Hotelpage = new hotelpage();
 
// Given(/^i am on hotel homepage$/,async function(){
//     await browser.url('https://www.hotel.com/');
//     await browser.pause(10000);
//      await browser.scrollintoview(false);
// });
 

// when(/^i click on learn about hotel.com rewards $/,async function(){
// await Hotelpage.clickhotelreward();
//     });


// and(/^i very hotels rewards opened in a new window $/,async function(){

//   let allhandles= await browser.getwindowhandles();
//     expect(allhandles,'not as expected' ).to.equal(2);

// });

// //click on join now

// when(/^ i click on join now $/,async function(){
//     await Hotelpage.clickjoin();
//         });
    

// //verify form is blank
// Given(/^i verify email is blank $/,async function(){
//     await Hotelpage.isemailempty();
//     expect(isemailempty,'email is not empty').to.equal('');
// });

// Given(/^i verify firstname is blank $/,async function(){
//     await Hotelpage.isfirstnameempty();
// });

// Given(/^i verify  last name is blank $/,async function(){
//     await Hotelpage.islastnameempty();
// });

// Given(/^i verify password is blank $/,async function(){
//     await Hotelpage.ispasswordempty();
// });


// //verify continue btn is not enabled
// Then(/^ i verify continue btn is not enabled $/,async function(){
//     await Hotelpage.iscontinuebtnenabled();
//         });

//     and(/^i  click on calender   $/,async function(){
//               await Hotelpage .clickcalender();
            
//         });
// //go to august 2023

// currenttime=moment().format(MM,YYYY)
//  and(/^i  go to on august   $/,async function(){
//   let isselectedmonth= await Hotelpage.selectedmonth();
//   expect(isselectedmonth,'not as expected').to.equal('currenttime');
// });







// //facebook signuppage first name field is empty

// Then(/^i verify first name field is empty $/,async function(){
//      await signuppage.isfirstnamefieldempty();
//      expect(isfirstnameempty,'first name is not empty').to.equal('');
//      });

// //last name field is empty    
//      and(/^i verify last name field is empty $/,async function(){
//         await signuppage.islastnamefieldempty();
//         expect(islastnameempty,'last name is not empty').to.equal('');
//         });
//     //phonenumber field is empty
//         and(/^i verify phone number field is empty $/,async function(){
//             await signuppage.isphonenumberfieldempty();
//             expect(isphonenumberfieldempty,' phonenumber field is not empty').to.equal('');

//             });
    
//     //verify current time is selected

//   Then(/^i verify current date  is selected $/,async function(){
//     let currenttime=moment()
//   let  isdateselected=  await signuppage.isdateselected();
//       expect(isdateselected,'date is not selected').to.equal(currenttime.format('D'));           
//    let ismonthselected=await signuppage.ismonthelected();
//    expect(ismonthselected,'month is not selected').to.equal(currenttime.format('MMM'));
//    let isyearselected=await signuppage.isyearelected(); 
//    expect(isyearselected,'year is not selected').to.equal(currenttime.format('YYYY'));
//       });

        

//     //verify no gender is selected
    
//     Then(/^i verify gender  is selected $/,async function(){
//         let isfemaleselected=  await signuppage.isselected();
//         expect(isfemaleselected,'female is not selected').to.be.false();
    
        
//         let ismaleselected=  await signuppage.isselected();
//         expect(ismaleselected,'male is not selected').to.be.false();

//      let iscustomselected=  await signuppage.selected();
//         expect(iscustomselected,'custom is not selected').to.be.false();         
// });






// hotelrewardlocator = ('a=Learn about Hotels.com Rewards');
//      joinlocator = ('a=join now');
//      calenderlocator=('button[data-stid="open-date-picker"]');
//      emaillocator=('#signupFormEmailInput');
//        fnamelocator=("#signupFormFirstNameInput");
//        lnamelocator= ('#signupFormLastNameInput');
//        passwordlocator=('#signupFormPasswordInput');
//          continuebtnlocator =('#signupFormSubmitButton');
//        emptyfirstnamelocator=('input[name=firstname]/parent::div');
//        emptylastnamelocator=('input[name=firstname]/parent::div');
//        emptyphoneumberlocator=('input[name=firstname]/parent::div');
//        daylocator=('#day');
//        monthlocator=('#month');
//        yearlocator=('#year');
//        selectedmonthlocator=
        


// async clickhotelreward(){
//     await $(this.hotelrewardlocator).click;
// }

// async clickjoin(){
//    await $(this.joinlocator).click;
// }

// async clickcalender(){
//  let calenderelement  = await $(this.calenderlocator).click();
//  await calenderelement.waitfordisplayed();
//  }
 
//  async isemailfieldempty(){
//     await $(this.emaillocator).getattribute('value');
   
//  }
 

//  async isfirstnamefieldempty(){
//     await $(this.firstnamelocator).getattribute('value');
//     expect(isfirstnameempty,'first name is not empty').to.equal('');
//  }


//  async islastnameefieldmpty(){
//     await $(this.lastnamelocator).getattribute('value');
    
//  }

//  async ispasswordempty(){
//     await $(this.passwordlocator).getattribute('value');
     
//  }

//  async iscontinuebtnenabled(){
//    let iscontinuebtnenabled= await $(this.continuebtnlocator).isenabled();
    
//  }


//  async isfirstnameempty(){
//    let classattributevalue= await $(this.firstnamelocator).getattribute('class');
//     return classattributevalue.endswith("uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput");
//  }

//  async islastnameempty(){
//     let classattributevalue1= await $(this.lastnamelocator).getattribute('class');
//      return classattributevalue1.endswith("uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput");
//   }
 

//   async isphonenumberfieldempty(){
//     let classattributevalue2= await $(this.lastnamelocator).getattribute('class');
//      return classattributevalue2.endswith("uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput");
//   }
 
 

//  async isdateselected(){
//   let datelocator= await $(this.datelocator).getselected();
//  }

//  async ismonthselected(){
//   let monthselected=  await $(this.monthlocator).getselected();
//  }

//  async isyearselected(){
//   let yearselected= await $(this.yearlocator).getselected();
    
//  }

//     async selectedmonth(){
//         await $(this.selectedmonthlocator).gettext()
//     }