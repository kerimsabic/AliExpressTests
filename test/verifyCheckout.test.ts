import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let homePage: HomePage;



beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
},80000);


test("Verify Checkout ", async () => {
    //await homePage.closePopup();
    //await homePage.navigateToHomePage();
    await homePage.clickAccountIcon();
    await homePage.clickSignIn();
    await homePage.enterSignInEmail();
    await homePage.enterSignInPassword();
    await homePage.clickSignInButton();
    await homePage.enterSearch();
    await homePage.clickSearchButton();
    await homePage.clickOnPhoneCase();
    await homePage.clickBuyButton();
    await homePage.clickPlaceOrder();
    await homePage.checkDiv();


   // await homePage.moveSliderToRight();
},80000);


afterAll(async () => {
    await quitDriver(driver);
},10000);