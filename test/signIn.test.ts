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


test("user registration", async () => {
    //await homePage.closePopup();
    //await homePage.navigateToHomePage();
    await homePage.clickAccountIcon();
    await homePage.clickSignIn();
    await homePage.enterSignInEmail();
    await homePage.enterSignInPassword();
    await homePage.clickSignInButton();

   // await homePage.moveSliderToRight();
},80000);


afterAll(async () => {
    await quitDriver(driver);
},10000);