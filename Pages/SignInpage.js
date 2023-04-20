class SignInpage {
  signinlocator = 'a[data-stid="link-header-account-signin"]';
  emaillocator = "#loginFormEmailInput";
  continuebtnlocator = "#loginFormSubmitButton";
  emailerrorlocator = "#loginFormEmailInput-error";
  englishlanguagelocator = 'button[data-stid="button-type-picker-trigger"]';
  languagedropdownlocator = "#language-selector";
  savelocator = 'div[class*="uitk-sheet-content-padded"]//button';
  languagelocator =
    'button[data-stid="button-type-picker-trigger"]//div[class*="uitk-text-default-theme"]';
  listyourpropertylocator = "#listYourProperty";
  whatwouldyouliketolistlocator = 'p[class="classification__title"]';
  lodgingandprivateresidencelocator =
    'div[class="classification__Options"]//p[1]';
  privateresidencelocator = "p=Private residence";
  step1of3locator = 'div[class="ulx-stepper"]';
  seehoemuchyoucouldearnlocator = 'h1[class="bed-and-bath__title"]';
  bedandbathroomlocator = 'span[class="fds-field-label"]';
  nextbtnlocator = 'button[id="propertyInfoNextBtn"]//span';
  step2of3locator = 'div[data-wdio="lyp-progress-bar"]';
  Whereisyourpropertylocatedlocator =
    'div[class*="cation-wrapper ulx-animated"]//h1';
  addresslocator = "#locationTypeAhead";
  suggestionslocator=('li[class="typeahead-prediction-item fds-list-item"]');
 graphlocator=('section[class="map-section location"]');
 pinlocator = ('div[data-wdio="google-map-component"]');
movethepinlocator=('span[@class="map-footer"]');


  async clickSignIn() {
    await $(this.signinlocator).click();
  }

  async enteremail(email) {
    await $(this.emaillocator).setvalue(email);
  }

  async clickcontinue() {
    await $(this.continuebtnlocator).click();
  }
  async verifyerror() {
    await $(this.emailerrorlocator).gettext();
  }

  async clickenglish() {
    await $(this.englishlanguagelocator).click();
  }

  async selectlanguage() {
    await $(this.languagedropdownlocator).gettext();
  }
  async clicksave() {
    await $(this.savelocator).click();
  }
  async verifyEspanol() {
    await $(this.languagelocator).gettext(Espanol);
  }
  async clickEspanol() {
    await $(this.languagelocator).click();
  }
  async clickguarder() {
    await $(this.languagelocator).click();
  }
  async verifyEnglish() {
    await $(this.languagelocator).gettext("English");
  }
  async clicklistproperty() {
    await $(this.listyourpropertylocator).click();
  }
  async verifywhatwouldyouliketolist() {
    await $(this.whatwouldyouliketolistlocator).gettext();
  }

  async verifylodgingandprivateresidence() {
    await $(this.lodgingandprivateresidencelocator).gettext();
  }
  async clickprivateresidence() {
    await $(this.privateresidencelocator).click();
  }
  async verify1of3() {
    await $(this.step1of3locator).gettext();
  }
  async verifyseehoemuchyoucouldearn() {
    await $(this.seehoemuchyoucouldearnlocator).gettext();
  }
  async enterbed() {
    await $(this.bedandbathroomlocator).setvalue("4bedroom");
  }
  async enterbath() {
    await $(this.bedandbathroomlocator).setvalue("1bathroom");
  }
  async nextbtn() {
    await $(this.nextbtnlocator).gettext();
  }
  async verify2of3() {
    await $(this.step2of3locator).gettext();
  }
  async verifyWhereisyourpropertylocated() {
    await $(this.Whereisyourpropertylocatedlocator).gettext();
  }
  async enteraddress() {
    await $(this.addresslocator).setvalue("address");
  }
  async clicksuggestions() {
    await $(this.suggestionslocator).click();
  }
 async verifygraph() {
    await $(this.graphlocator).click();
  }
  async verifypin() {
    await $(this.pinlocator).click();
  }
  async verifypinlocation() {
    await $(this.movethepinlocator).gettext();
  }

}

module.exports = SignInpage;
