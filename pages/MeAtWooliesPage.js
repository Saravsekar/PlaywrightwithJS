export class MeAtWooliesPage {
    constructor(page) {
        this.page = page;
        this.peopleRequest = "//span[text()='Raise a People Services request']"
        //Benefits
        this.benefitTitle = "//h5[text()='Benefits']"
        //Career and Recruitment
        this.benefitTitle = "//h5[text()='Career and Recruitment']"

        this.raisingSomeone = "(//span[@class='slds-radio_faux'])[1]"
        this.newRequest = "//button[@aria-label='Is this a new request?']"
        this.newRequestDropDown = "[data-value='No']"
        this.existingNumber = "//input[@name='caseNum']"

        //Benefit Category
        this.benefitSubCatValue = "lightning-base-combobox-item"
        this.benefitSubCatClick = "//button[@aria-label='Sub Category']"
        this.benefitsCatbenefitsOffersSubCat = "//span[@title='Benefits/Offers']"
        this.benefitsCatContinuityAggregateServiceSubCat = "//span[@title='Continuity/ Aggregate Service']"
        this.benefitsCatDiscountCardsSubCat = "//span[@title='Discount cards']"
        this.benefitsCatNovatedLeaseSubCat = "//span[@title='Novated Lease']"
        this.benefitsCatOtherSubCat = "//span[@title='Other']"
        this.benefitsCatParentalLeaveGiftCardSubCat = "//span[@title='Parental Leave - Gift Card']"
        this.benefitsCatParentalLeaveSuperannuationSubCat = "//span[@title='Parental Leave - Superannuation']"
        this.benefitsCatPlusCardSubCat = "//span[@title='PlusCard']"
        this.benefitsCatPlusCardLossPreventionSubCat = "//span[@title='PlusCard - Loss Prevention']"
        this.benefitsCatPlusCardNotWorkingSubCat = "//span[@title='PlusCard - Not Working']"
        this.benefitsCatServiceAnniversariesSubCat = "//span[@title='Service Anniversaries']"
        this.benefitsCatSuperannuationPolicySubCat = "//span[@title='Superannuation Policy']"


        this.theirFirstName = "//input[@placeholder='Enter Name or Employee ID']"
        this.selecttheirName = "[data-subfield='Saravanan Sekar']"
        this.nextButton = "//button[text()='Next']"
        this.subject = "//input[@name='subject']"
        this.phoneNumber = "//input[@name='phnnumber']"
        this.email = "//input[@name='email']"
        this.contactMethod = "//button[@aria-label='Preferred contact method']"
        this.contactMethodDropDown = "[data-value='Email']"
        this.submitButton = "//button[text()='Submit']"
        this.previousButton = "//button[text()='Previous']"
        this.caseNumber = "//div[@class='cardNumCont']/h2"
        this.returnToPeopleServices = "[title='Return to People Services']"




    }


    async clickOnpeopleRequest() {
        await this.page.locator(this.peopleRequest).waitFor({ state: 'visible' });
        await this.page.locator(this.peopleRequest).click();
    }
    async clickOnbenefitTitle() {
        await this.page.locator(this.benefitTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitTitle).click();
    }
    async clickOnCareerAndRecruitmentTitle() {
        await this.page.locator(this.benefitTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitTitle).click();
    }
    async clickonRaisingSomeone() {
        await this.page.locator(this.raisingSomeone).waitFor({ state: 'visible' });
        await this.page.locator(this.raisingSomeone).click();

    }

    async clickOnNewRequest() {
        await this.page.locator(this.newRequest).waitFor({ state: 'visible' });
        await this.page.locator(this.newRequest).click();
        await this.page.locator(this.newRequestDropDown).waitFor({ state: 'visible' });
        await this.page.locator(this.newRequestDropDown).click();
    }

    async fillTheExistingNumber(existingCaseNumber) {
        await this.page.locator(this.existingNumber).waitFor({ state: 'visible' });
        await this.page.locator(this.existingNumber).fill(existingCaseNumber);
        // await this.page.waitForTimeout(5000);
    }

    async selectbenefitsCatbenefitsOffersSubCat(subcatNum) {
        await this.page.locator(this.benefitSubCatClick).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitSubCatClick).click();
        // await this.page.locator(this.benefitsCatbenefitsOffersSubCat).waitFor({ state: 'visible' });
        // await this.page.locator(this.benefitsCatbenefitsOffersSubCat).click();
        await this.page.locator(this.benefitSubCatValue).nth(subcatNum).click();
    }
    async selectbenefitsCatContinuityAggregateServiceSubCat() {
        await this.page.locator(this.benefitSubCatClick).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitSubCatClick).click();
        await this.page.locator(this.benefitsCatContinuityAggregateServiceSubCat).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitsCatContinuityAggregateServiceSubCat).click();
    }
    async selectbenefitsCatDiscountCardsSubCat() {
        await this.page.locator(this.benefitSubCatClick).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitSubCatClick).click();
        await this.page.locator(this.benefitsCatDiscountCardsSubCat).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitsCatDiscountCardsSubCat).click();
    }
    async selectbenefitsCatNovatedLeaseSubCat() {
        await this.page.locator(this.benefitSubCatClick).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitSubCatClick).click();
        await this.page.locator(this.benefitsCatNovatedLeaseSubCat).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitsCatNovatedLeaseSubCat).click();
    }
    async selectbenefitsCatOtherSubCat() {
        await this.page.locator(this.benefitSubCatClick).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitSubCatClick).click();
        await this.page.locator(this.benefitsCatOtherSubCat).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitsCatOtherSubCat).click();
    }
    async selectbenefitsCatParentalLeaveGiftCardSubCat() {
        await this.page.locator(this.benefitSubCatClick).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitSubCatClick).click();
        await this.page.locator(this.benefitsCatParentalLeaveGiftCardSubCat).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitsCatParentalLeaveGiftCardSubCat).click();
    }
    async selectbenefitsCatParentalLeaveSuperannuationSubCat() {
        await this.page.locator(this.benefitSubCatClick).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitSubCatClick).click();
        await this.page.locator(this.benefitsCatParentalLeaveSuperannuationSubCat).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitsCatParentalLeaveSuperannuationSubCat).click();
    }
    async selectbenefitsCatPlusCardSubCat() {
        await this.page.locator(this.benefitSubCatClick).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitSubCatClick).click();
        await this.page.locator(this.benefitsCatPlusCardSubCat).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitsCatPlusCardSubCat).click();
    }
    async selectbenefitsCatPlusCardLossPreventionSubCat() {
        await this.page.locator(this.benefitSubCatClick).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitSubCatClick).click();
        await this.page.locator(this.benefitsCatPlusCardLossPreventionSubCat).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitsCatPlusCardLossPreventionSubCat).click();
    }
    async selectbenefitsCatPlusCardNotWorkingSubCat() {
        await this.page.locator(this.benefitSubCatClick).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitSubCatClick).click();
        await this.page.locator(this.benefitsCatPlusCardNotWorkingSubCat).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitsCatPlusCardNotWorkingSubCat).click();
    }
    async selectbenefitsCatServiceAnniversariesSubCat() {
        await this.page.locator(this.benefitSubCatClick).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitSubCatClick).click();
        await this.page.locator(this.benefitsCatServiceAnniversariesSubCat).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitsCatServiceAnniversariesSubCat).click();
    }
    async selectbenefitsCatSuperannuationPolicySubCat() {
        await this.page.locator(this.benefitSubCatClick).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitSubCatClick).click();
        await this.page.locator(this.benefitsCatSuperannuationPolicySubCat).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitsCatSuperannuationPolicySubCat).click();
    }

    async fillTheName(firstName) {
        await this.page.locator(this.theirFirstName).waitFor({ state: 'visible' });
        await this.page.locator(this.theirFirstName).fill(firstName);
        await this.page.locator(this.selecttheirName).waitFor({ state: 'visible' });
        await this.page.locator(this.selecttheirName).click();
        // await this.page.waitForTimeout(5000);
    }

    async clickOnNext() {
        await this.page.locator(this.nextButton).waitFor({ state: 'visible' });
        await this.page.locator(this.nextButton).click();
    }
    async fillTheSubject(subject) {
        await this.page.locator(this.subject).waitFor({ state: 'visible' });
        await this.page.fill(this.subject, subject);
        // await this.page.waitForTimeout(5000);
    }
    async clickOnNext() {
        await this.page.locator(this.nextButton).waitFor({ state: 'visible' });
        await this.page.locator(this.nextButton).click();
    }

    async fillThePhoneNumber(phoneNumber) {
        await this.page.locator(this.phoneNumber).waitFor({ state: 'visible' });
        await this.page.type(this.phoneNumber, phoneNumber);
        // await this.page.waitForTimeout(2000);
    }
    async fillTheEmail(email) {
        await this.page.locator(this.email).waitFor({ state: 'visible' });
        await this.page.locator(this.email).click();
        await this.page.type(this.email, email);
        // await this.page.waitForTimeout(2000);
    }

    async clickOnPrevious() {
        await this.page.locator(this.previousButton).waitFor({ state: 'visible' });
        await this.page.locator(this.previousButton).click();
    }
    async clickOnSubmit() {
        await this.page.locator(this.submitButton).waitFor({ state: 'visible' });
        await this.page.locator(this.submitButton).click();
    }

    /*async getCaseNumber() {
        await this.page.locator(this.caseNumber).waitFor({ state: 'visible' });
        const caseNumber = await this.page.locator(this.caseNumber).textContent();
        // const caseNumber_trimmed = caseNumber.trim();
        // console.log(caseNumber_trimmed);
        return caseNumber_trimmed;
    } */

    async getCaseNumber() {
        await this.page.locator(this.caseNumber).waitFor({ state: 'visible' });
        // Locate the element and extract its text content
        const caseNumber = await this.page.locator(this.caseNumber).textContent();
        const caseNumberTrimmed = caseNumber.trim();  // Trim any extra spaces
        console.log(caseNumberTrimmed);  // Log the case number
        return caseNumberTrimmed;  // Return the trimmed case number
    }
    async clickOnReturnToPeopleServices() {
        await this.page.locator(this.returnToPeopleServices).waitFor({ state: 'visible' });
        await this.page.locator(this.returnToPeopleServices).click();
    }

}







