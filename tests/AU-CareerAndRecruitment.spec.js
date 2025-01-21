import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MeAtWooliesPage } from '../pages/MeAtWooliesPage';
import fs from 'fs';
import path from 'path';

const testdata = JSON.parse(JSON.stringify(require('../dataset/LoginPage.json')))

// test.setTimeout(600000);
test('Case Creation', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();

        for (let subcatNum = 2; subcatNum < 9; subcatNum++) {
            await woolies.clickOnCareerAndRecruitmentTitle();
            await woolies.clickonRaisingSomeone();
            await woolies.clickOnNewRequest();
            await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
            await woolies.selectbenefitsCatbenefitsOffersSubCat(subcatNum);
            await woolies.fillTheName(testdata.firstName);
            await woolies.clickOnNext();
            await woolies.fillTheSubject(testdata.subject);
            await woolies.clickOnNext();
            await woolies.fillThePhoneNumber(testdata.phoneNumber);
            await woolies.fillTheEmail(testdata.email);
            await woolies.clickOnSubmit();
            caseNumber = await woolies.getCaseNumber();
            console.log(caseNumber);
            let caseNo = testdata.caseNumber;
            caseNo[subcatNum] = caseNumber;
            fs.writeFileSync(path.resolve('dataset', 'LoginPage.json'), JSON.stringify(testdata, null, 2), 'utf-8');
            await woolies.clickOnReturnToPeopleServices();
        }

    });

    await wooliesPage.close();

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        //await page.waitForTimeout(15000);
        let caseNo = testdata.caseNumber;
        console.log(caseNo.length);
        for (let i = 0; i < caseNo.length; i++) {
            await home2.clcikOnGlobalSearch();
            await home2.enterTheCaseNumber(caseNo[i]);
            await home2.clickCaseNumber(caseNo[i]);
            await home2.valiadateTheCaseDetails();
        }


    });

});
