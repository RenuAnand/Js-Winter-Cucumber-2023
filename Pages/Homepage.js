class Homepage {
  singinlocator = ('"#gc-custom-header-nav-bar-acct-menu"// button');
  singuplocator = "=Sign up, it’s free";
  emaillocator = "#signupFormEmailInput";
  continuebtnlocator = "#signupFormSubmitButton";
  termsandcoditionslocator = "=Terms and Conditions";
  LastRevisedlocator = 'span*=lastrevised';
  Lastupdatedlocator =  'p*=Last Updated';
  privacystatementlocator = ("=Privacy Statement");
  feedbacklocator = "=Feedback";
  submitbtnlocator = "#submit-button";
  requiredinformationlocator = ["#required"]; //p[1];
  pageratinglocator = ["#required_box_page_rating"][1];
  starrating4locator = 'label[for="page-rating-4"]';
  pagecommentslocator = "#verbatim";
  returntohotellocator = "#will-you-return";
  visithotellocator = 'label[for="booked-here-before-yes"]';
  donesuccessfullylocator = 'label[for="were-you-successful-yes"]';
  thankyoufeedbacklocator = 'h5[class="question-header"]';
  travellerlocator=('button="2 travelers, 1 room"');
 addadultlocator = ("#traveler_selector_adult_step_input-0");
 addchildrenlocator = ("#traveler_selector_children_step_input-0")
 childagelocator = ("#age-traveler_selector_children_age_selector-0-0");
 donelocator=("#traveler_selector_done_button");
 travellerscountlocator=('button[data-stid="open-room-picker"]');

 async clickSignIn() {
    await $(this.signinlocator).click();
  }

  async clicksignup() {
    await $(this.signuplocator).click();
  }

  async enterEmail(email) {
    await $(this.emaillocator).setvalue(email);
  }
  async clickcontinuebtn() {
    await $(this.continuebtnlocator).click();
  }

  async clicktermsandconditionsbtn() {
    await $(this.termsandconditionsbtnlocator).click();
  }

  async lastrevisedformat() {
   let expectedformat= await $(this.LastRevisedlocator ).gettext();
   
  }


  async clickprivacystatement() {
    await $(this.privacystatementlocator).click();
  }

  async lastupdatedformat() {
     await $(this.lastupdatedlocator ).gettext();
    
   }

  async clickfeedback() {
    await $(this.feedbacklocator).click();
  }

  async clicksubmitbtn() {
    await $(this.submitbtnlocator).click();
  }

  async requiredinformation() {
    await $(this.requiredinformationlocator).isdisplayed();
  }

  async pagerating() {
    await $(this.pageratinglocator).isdisplayed();
  }

  async click4starrating() {
    await $(this.starrating4locator).click();
  }
  async enterpagecomments() {
    await $(this.pagecommentslocator).setvalue();
  }

  async clickreturntohotel() {
    await $(this.returntohotellocator).click();
  }

  async clickvisithotel() {
    await $(this.visithotellocator).click();
  }

  async clickdonesuccessfully() {
    await $(this.donesuccessfullylocator).click();
  }

  async thankyoufeedback() {
    await $(this.thankyoufeedbacklocator).isdisplayed();
  }

  async clicktravellers() {
    await $(this.travellerlocator).click();
  }
  async selectadd2children() {
    await $(this.add2childrenlocator).isselected();
  }

  async childrenage2dropdown() {
    await $(this.childrend2dropdownlocator).isdisplayed();
  }
async childrenplusbutton() {
    await $(this.childrenplusbtnlocator).isenabled();
  }
  async childrenminusbutton() {
    await $(this.childrenminusbtnlocator).isenabled();
  }

  

  async  addadult() {
    await $(this.addadultlocator).getattribute(value,6);
  }
  async  addchildren() {
    await $(this.addchildrenlocator).getattribute(value,3);

  }
  async  addfirstchildage() {
    await $(this.childagelocator).gettext();
  }
  async  addsecondchildage() {
    await $(this.childagelocator).gettext();
  }
  async  addthirdchildage() {
    await $(this.childagelocator).gettext();
  }
  async clickdone() {
    await $(this.donelocator).click();
  }
  async travellerscount() {
    await $(this.travellerscountlocator).gettext();
  }
}

module.exports = Homepage;
