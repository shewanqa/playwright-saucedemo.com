import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login';


test.describe("Login tests", () => {

    test('As a Swag Labs web user, I can sign into the web app using a valid username and password', async ({ page }) => {
        
        const loginPage = new LoginPage(page);
        //await loginPage.goto();
        // await loginPage.login("standard");
        await loginPage.goto();
        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickLoginButton();
        
        await expect(page).toHaveTitle(/Swag Labs/);
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    });

    test('As a Swag Labs web user, I cannot sign into the web app using a invalid username and valid password', async ({ page }) => {
        
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("wrong_password");
        await loginPage.clickLoginButton();
        page.pause();

        // Assertions for login error message

        await expect(page).toHaveTitle(/Swag Labs/);        
        await expect(page).toHaveURL(loginPage.pageUrl);
        page.pause();

    });

})    