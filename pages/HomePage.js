//import exp from "constants";
import { expect } from '@playwright/test';
export class HomePage {
    constructor(page) {
        this.page = page;
        this.setupButton = '//div[@class="headerTrigger  tooltip-trigger uiTooltip"][1]';
        this.setupButton2 = '#related_setup_app_home';
        this.searchBox = "//input[@title='Search Setup']";
        this.loginBtn = "(//input[@title='Login'])[1]";
        this.selectedMenu = "//a[@title='Home']";
        this.navMenu = 'button[title="Show Navigation Menu"]';
        this.homeMenu = '//ul[@role="menu"]//span[text()="Home"]';
        this.appLaunch = "//button[@title='App Launcher']";
        this.search = "(//input[@placeholder='Search apps and items...'])";
        this.MeAtWoolies = "//b[text()='Me@Woolies']"
        this.peopleServices = "//a[@data-label='PeopleServices']"
        this.peopleRequest = "(//span[@class='quick-action-name quick-action-Australia'])[2]"
        this.benefitTitle = "//h5[text()='Benefits']"
        this.raisingSomeone = "(//span[@class='slds-radio_faux'])[2]"
        this.newRequest = "[data-value='Yes']"
        this.searchOnCaseNumber = "//button[@aria-label='Search']"
        this.enterACaseNumberInGlobalSearch = "//input[@placeholder='Search...']"
        this.benefitQueue = "(//span[@class='owner-name slds-grow'])[2]"
        this.userClick = this.page.getByRole('button', { name: 'View profile' })
        this.userLogout = "//a[text()='Log Out']"
        // this.userOut = "a[class='action-link']"
        this.caseClick = "(//a[@title='Cases'])[2]"
        this.caseNumberLocator = "//a[text()='$caseNumber']";
        this.caseRecordType = this.page.locator('div').filter({ hasText: /^Query Case$/ }).last();
        this.caseOwner = this.page.locator('span').filter({ hasText: 'Advisory Payroll' }).last();
        this.priority = this.page.locator('lightning-formatted-text').filter({ hasText: /^Low$/ }).last();
        this.benefitCategoty = this.page.locator('lightning-formatted-text').filter({ hasText: /^Benefits$/ }).last();
        this.benefitsOffersSubCat = this.page.locator('lightning-formatted-text').filter({ hasText: 'Benefits/Offers' }).last();







    }

    async userLogin(loginuser) {
        await this.page.pause();
        await this.page.waitForSelector(this.setupButton, { state: 'visible' });
        await this.page.click(this.setupButton);
        await this.page.waitForSelector(this.setupButton2, { state: 'visible' });
        const [page1] = await Promise.all([
            this.page.waitForEvent("popup"),
            await this.page.click(this.setupButton2)
        ])
        await page1.waitForLoadState('load');
        await this.page.close();
        await page1.locator(this.searchBox).waitFor({ state: 'visible' });
        await page1.locator(this.searchBox).fill(loginuser);
        await page1.getByRole('option', { name: loginuser + ' User' }).click();
        const frame = await page1.frameLocator('iframe');
        await frame.locator(this.loginBtn).click();
        return page1;
    }

    async closeTab() {
        await this.page.close();
    }
    async gotoHome() {
        if (!(await this.page.locator(this.selectedMenu).isVisible())) {
            await this.page.locator(this.navMenu).waitFor({ state: 'visible' });
            await this.page.click(this.navMenu);
        }
    }
    async clickOnAppLauch() {
        // await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.appLaunch, { state: 'visible' });
        await this.page.click(this.appLaunch);
    }

    async searchForPeopleServices(searchPeopleServices) {
        await this.page.waitForSelector(this.search, { state: 'visible' });
        await this.page.fill(this.search, searchPeopleServices);
        await this.page.waitForTimeout(5000);
    }
    async clickOnPeopleServices() {
        await this.page.waitForSelector(this.peopleServices, { state: 'visible' });
        await this.page.waitForTimeout(5000)
        await this.page.click(this.peopleServices);
        await this.page.waitForTimeout(10000)
    }


    async searchForMeAtWoolies(searchWoolies) {
        console.log("searchWoolies: " + searchWoolies);
        await this.page.waitForSelector(this.search, { state: 'visible' });
        await this.page.fill(this.search, searchWoolies);
        // await this.page.waitForTimeout(5000);
    }

    async clickOnMeAtWoolies() {
        await this.page.waitForSelector(this.MeAtWoolies, { state: 'visible' });
        const [page2] = await Promise.all([
            this.page.waitForEvent("popup"),
            await this.page.click(this.MeAtWoolies)
        ])
        await page2.waitForLoadState('load');
        return page2;
    }

    async clickOnUserLogout() {
        await this.page.reload();
        await this.userClick.waitFor({ state: 'visible' });
        await this.userClick.click();
        await this.page.locator(this.userLogout).waitFor({ state: 'visible' });
        await this.page.locator(this.userLogout).click();
    }



    async pageReload() {
        for (let i = 0; i < 9; i++) {
            await this.page.reload();
            await this.page.waitForTimeout(10000);
        }
        await this.page.waitForTimeout(5000);

    }
    async clcikOnGlobalSearch() {
        await this.page.locator(this.searchOnCaseNumber).waitFor({ state: 'visible' });
        await this.page.locator(this.searchOnCaseNumber).click();
    }
    async enterTheCaseNumber(caseNumber) {

        await this.page.locator(this.enterACaseNumberInGlobalSearch).waitFor({ state: 'visible' });
        await this.page.fill(this.enterACaseNumberInGlobalSearch, caseNumber);
        await this.page.press(this.enterACaseNumberInGlobalSearch, 'Enter');
    }

    async clickCaseNumber(caseNumber) {
        await this.page.getByRole('link', { name: 'Cases 1' }).waitFor({ state: "visible" });
        await this.page.getByRole('link', { name: 'Cases 1' }).click();
        // Replace the placeholder with the actual case number
        const caseNumberLink = this.caseNumberLocator.replace('$caseNumber', caseNumber);
        console.log(caseNumberLink);  // Log the final generated locator
        await this.page.locator(caseNumberLink).click();  // Click on the dynamically generated link
    }



    async valiadateTheCaseDetails() {
        expect(await this.caseRecordType.textContent()).toContain('Query Case');
        expect(await this.caseOwner.textContent()).toContain('Advisory Payroll');
        // await this.priority.waitFor({ state: 'visible' });
        expect(await this.priority.textContent()).toContain('Low');
        expect(await this.benefitCategoty.textContent()).toContain('Benefits');
        expect(await this.benefitsOffersSubCat.textContent()).toContain('Benefits/Offers');
        await this.page.reload();


    }


}


