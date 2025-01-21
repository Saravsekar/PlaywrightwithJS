const { test, expect } = require('@playwright/test');
test.setTimeout(300000);
test('Query Case', async ({ page }) => {
    await page.goto('https://peopleservices--hrsit.sandbox.my.salesforce.com/');
    await page.locator('id=username').fill('ssekar7@tcs.woolworths.com.au.hrsit')
    await page.locator('id=password').fill('Welcome@2');
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('button', { name: 'Setup' }).waitFor({ state: "visible" });
    await page.getByRole('button', { name: 'Setup' }).click();

    const [page1] = await Promise.all([
        page.waitForEvent("popup"), await page.locator('[id="related_setup_app_home"]').click()
    ]);
    await page.close();

    await page1.getByPlaceholder('Search Setup').fill('Penny Aquilina');
    await page1.getByRole('option', { name: 'Penny Aquilina User' }).click();
    await page1.locator('iframe').contentFrame().getByRole('row', { name: 'User Detail Edit Sharing' }).locator('input[name="login"]').click();
    await page1.getByRole('button', { name: 'App Launcher' }).waitFor({ state: "visible" });
    await page1.waitForTimeout(3000);
    await page1.getByRole('button', { name: 'App Launcher' }).click();
    await page1.waitForTimeout(3000);
    await page1.getByPlaceholder('Search apps and items...').type('Me@Woolies');
    await page1.waitForTimeout(10000);
    await page1.getByRole('option', { name: 'Me@Woolies' }).waitFor({ state: "visible" });

    const [page2] = await Promise.all([
        page1.waitForEvent("popup"), await page1.getByRole('option', { name: 'Me@Woolies' }).click()
    ]);
    await page2.locator('a').filter({ hasText: 'Raise a People Services' }).click();
    await page2.getByRole('heading', { name: 'Benefit' }).click();
    await page2.locator('label').filter({ hasText: 'No' }).locator('span').first().click();
    await page2.getByRole('combobox', { name: 'Is this a new request?' }).click();
    await page2.locator('[data-value="Yes"]').click();
    await page2.getByRole('combobox', { name: 'Sub Category' }).click();
    await page2.locator('[title="25 Year Club"]').click();
    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.getByLabel('*Subject').fill('Testing');
    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.getByRole('combobox', { name: 'Preferred contact method' }).click();
    await page2.locator('[title="Email"]').click();
    await page2.getByRole('button', { name: 'Submit' }).click();
    // let caseNumber = await page2.getByText('Case Number').textContent();
    let caseNumber = await page2.locator('h2[c-caseportalflowsupport_caseportalflowsupport]').nth(1).textContent();
    console.log(caseNumber);
    await page2.close();
    await page1.waitForTimeout(10000);
    await page1.reload();
    await page1.waitForTimeout(10000);
    await page1.reload();
    await page1.waitForTimeout(10000);
    await page1.reload();
    await page1.waitForTimeout(5000);
    await page1.getByLabel('Search', { exact: true }).click();
    await page1.waitForTimeout(40000);
    await page1.getByPlaceholder('Search...').fill(caseNumber);
    //await page1.locator('[class="data-match"]').click();


    if (await page1.locator('span').filter({ hasText: 'Benefits' }).nth(3).textContent() != "Benefits") {
        test.fail();

    }
    if (await page1.locator('div').filter({ hasText: /^Query Case$/ }).nth(1).textContent() != "Query Case") {
        test.fail();

    }

    if (await page1.locator('dd').filter({ hasText: 'Edit Subject' }).locator('span').first().textContent() != "Testing") {
        test.fail();

    }
    if (await page1.locator('dd').filter({ hasText: 'Edit Category' }).locator('span').first().textContent() != "Benefits") {
        test.fail();

    }
    if (await page1.locator('dd').filter({ hasText: 'Edit Sub Category' }).locator('span').first().textContent() != "25 Year Club") {
        test.fail();

    }
})