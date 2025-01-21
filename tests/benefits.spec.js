import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MeAtWooliesPage } from '../pages/MeAtWooliesPage';
// import fs from 'fs';
// import path from 'path';

const testdata = JSON.parse(JSON.stringify(require('../dataset/LoginPage.json')))
test.describe.configure({ mode: 'parallel' });
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
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectbenefitsCatbenefitsOffersSubCat();
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.valiadateTheCaseDetails();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits Cateogry and Continuity/ Aggregate Service as subcategory is getting assigned to Benefits queue', async ({ page }) => {
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
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectbenefitsCatContinuityAggregateServiceSubCat();
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.valiadateTheCaseDetails();
    });
});

